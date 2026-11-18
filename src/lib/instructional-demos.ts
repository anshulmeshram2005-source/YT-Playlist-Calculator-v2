// src/lib/instructional-demos.ts
// Robust, continuous animated slideshow for "How to Use the Calculator"
// Supports 5 realistic steps, smooth transitions, manual tab selection, and auto-play resume.
// Solves horizontal scroll offset clipping, keeping Tab 1 completely visible on load & restart.

export function initInstructionalDemos(): void {
  if (typeof window === 'undefined') return;

  const container = document.getElementById('instructional-demos');
  if (!container) return;

  // Prevent multiple initializations
  if ((container as any).__demosInit) return;
  (container as any).__demosInit = true;

  const totalSteps = 5;
  let currentStep = 1;
  let isAutoPlaying = true;
  let timer: any = null;
  const STEP_DURATION_MS = 4500;

  let typingInterval: any = null;
  let stepTimeouts: any[] = [];

  const tabList = container.querySelector('#demo-tab-list') as HTMLElement | null;
  const tabs = container.querySelectorAll<HTMLButtonElement>('[data-demo-step-btn]');
  const slides = container.querySelectorAll<HTMLElement>('[data-demo-slide]');
  const prevBtn = document.getElementById('demo-prev-btn');
  const nextBtn = document.getElementById('demo-next-btn');
  const autoPlayBtn = document.getElementById('demo-autoplay-btn');
  const autoPlayLabel = document.getElementById('demo-autoplay-label');
  const autoPlayIcon = document.getElementById('demo-autoplay-icon');
  const progressBar = document.getElementById('demo-progress-bar');

  function clearActiveStepAnimations() {
    if (typingInterval) {
      clearInterval(typingInterval);
      typingInterval = null;
    }
    stepTimeouts.forEach((t) => clearTimeout(t));
    stepTimeouts = [];
  }

  function scrollTabIntoView(step: number, smooth = true) {
    if (!tabList) return;

    const isRtl = document.documentElement.dir === 'rtl' || document.body.dir === 'rtl';

    // If the tabs fit within the container width, ensure no offset
    if (tabList.scrollWidth <= tabList.clientWidth + 4) {
      tabList.scrollLeft = 0;
      return;
    }

    const behavior: ScrollBehavior = smooth ? 'smooth' : 'auto';

    // When returning to step 1 (load, restart, or manual click)
    if (step === 1) {
      tabList.scrollTo({
        left: isRtl ? (tabList.scrollWidth - tabList.clientWidth) : 0,
        behavior,
      });
      return;
    }

    // When on the last step (step 5)
    if (step === totalSteps) {
      tabList.scrollTo({
        left: isRtl ? 0 : (tabList.scrollWidth - tabList.clientWidth),
        behavior,
      });
      return;
    }

    // Intermediate steps (2, 3, 4): center the active tab smoothly without window scroll jumping
    const activeTab = tabList.querySelector(`[data-demo-step-btn="${step}"]`) as HTMLElement | null;
    if (activeTab) {
      const tabRect = activeTab.getBoundingClientRect();
      const containerRect = tabList.getBoundingClientRect();
      const currentScroll = tabList.scrollLeft;
      const offsetLeftInContainer = tabRect.left - containerRect.left;
      const targetScroll = currentScroll + offsetLeftInContainer - (containerRect.width / 2) + (tabRect.width / 2);

      tabList.scrollTo({
        left: Math.max(0, Math.min(targetScroll, tabList.scrollWidth - tabList.clientWidth)),
        behavior,
      });
    }
  }

  function renderStep(step: number, animate = true) {
    currentStep = ((step - 1 + totalSteps) % totalSteps) + 1;

    // Clear any previous running step animations
    clearActiveStepAnimations();

    // Update tab styles and aria attributes
    tabs.forEach((tab) => {
      const s = parseInt(tab.getAttribute('data-demo-step-btn') || '1', 10);
      const isActive = s === currentStep;
      tab.setAttribute('aria-selected', String(isActive));

      if (isActive) {
        tab.style.backgroundColor = 'var(--color-text)';
        tab.style.color = 'var(--color-bg)';
        tab.style.borderColor = 'var(--color-text)';
        tab.classList.add('font-semibold');
      } else {
        tab.style.backgroundColor = 'var(--color-surface-2)';
        tab.style.color = 'var(--color-text-muted)';
        tab.style.borderColor = 'var(--color-border)';
        tab.classList.remove('font-semibold');
      }
    });

    // Keep active tab visible smoothly in the tab bar without clipping
    scrollTabIntoView(currentStep, animate);

    // Update slides with smooth transition
    slides.forEach((slide) => {
      const s = parseInt(slide.getAttribute('data-demo-slide') || '1', 10);
      if (s === currentStep) {
        slide.classList.remove('hidden');
        if (animate) {
          slide.style.opacity = '0';
          slide.style.transform = 'translateY(6px)';
          requestAnimationFrame(() => {
            slide.style.transition = 'opacity 0.25s ease-out, transform 0.25s ease-out';
            slide.style.opacity = '1';
            slide.style.transform = 'translateY(0)';
          });
        } else {
          slide.style.opacity = '1';
          slide.style.transform = 'translateY(0)';
        }
      } else {
        slide.classList.add('hidden');
        slide.style.opacity = '0';
      }
    });

    // Trigger step-specific mini-animations
    triggerStepAnimation(currentStep);

    // Reset and trigger progress bar animation cleanly
    if (progressBar) {
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      // Force DOM reflow so transition starts from 0% reliably
      void progressBar.offsetWidth;
      if (isAutoPlaying) {
        requestAnimationFrame(() => {
          progressBar.style.transition = `width ${STEP_DURATION_MS}ms linear`;
          progressBar.style.width = '100%';
        });
      }
    }
  }

  function triggerStepAnimation(step: number) {
    if (step === 1) {
      // Step 1: Typing text animation & detected playlist badge
      const typingEl = document.getElementById('demo-typing-url');
      const badgeEl = document.getElementById('demo-detected-badge');
      if (badgeEl) {
        badgeEl.style.opacity = '0';
      }
      if (typingEl) {
        const fullUrl = 'https://www.youtube.com/playlist?list=PLBDA2E52FB1EF80C9';
        let idx = 0;
        typingEl.textContent = '';
        typingInterval = setInterval(() => {
          idx += 3;
          if (idx >= fullUrl.length) {
            typingEl.textContent = fullUrl;
            clearInterval(typingInterval);
            typingInterval = null;
            if (badgeEl) {
              badgeEl.style.opacity = '1';
            }
          } else {
            typingEl.textContent = fullUrl.slice(0, idx);
          }
        }, 40);
      }
    } else if (step === 2) {
      // Step 2: Sequential step checkmarks
      const steps = [
        document.getElementById('demo-calc-step-1'),
        document.getElementById('demo-calc-step-2'),
        document.getElementById('demo-calc-step-3'),
      ];
      steps.forEach((el) => {
        if (el) el.style.opacity = '0.3';
      });
      steps.forEach((el, i) => {
        if (!el) return;
        const t = setTimeout(() => {
          if (currentStep === 2) {
            el.style.transition = 'opacity 0.3s ease';
            el.style.opacity = '1';
          }
        }, (i + 1) * 380);
        stepTimeouts.push(t);
      });
    }
  }

  function startSlideshow() {
    stopSlideshow();
    if (!isAutoPlaying) return;

    timer = setInterval(() => {
      renderStep(currentStep + 1);
    }, STEP_DURATION_MS);

    if (progressBar) {
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      void progressBar.offsetWidth;
      requestAnimationFrame(() => {
        progressBar.style.transition = `width ${STEP_DURATION_MS}ms linear`;
        progressBar.style.width = '100%';
      });
    }
  }

  function stopSlideshow() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    if (progressBar) {
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
    }
  }

  function userInteraction() {
    // When user manually selects a tab or navigates, show step immediately and restart slideshow timer
    if (isAutoPlaying) {
      startSlideshow();
    }
  }

  // Bind tab click events
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const step = parseInt(tab.getAttribute('data-demo-step-btn') || '1', 10);
      renderStep(step);
      userInteraction();
    });
  });

  // Previous button
  prevBtn?.addEventListener('click', () => {
    renderStep(currentStep - 1);
    userInteraction();
  });

  // Next button
  nextBtn?.addEventListener('click', () => {
    renderStep(currentStep + 1);
    userInteraction();
  });

  // Auto-play toggle button
  autoPlayBtn?.addEventListener('click', () => {
    isAutoPlaying = !isAutoPlaying;
    if (autoPlayLabel) {
      const activeText = window.i18n ? window.i18n.t(isAutoPlaying ? 'demonstrations.autoPlayOn' : 'demonstrations.autoPlayPaused') : (isAutoPlaying ? 'Auto-Play On' : 'Paused');
      autoPlayLabel.textContent = activeText;
    }
    if (autoPlayIcon) {
      autoPlayIcon.textContent = isAutoPlaying ? '⏸' : '▶';
    }

    if (isAutoPlaying) {
      renderStep(currentStep);
      startSlideshow();
    } else {
      stopSlideshow();
    }
  });

  // "Try in Calculator" button click
  container.querySelectorAll('[data-demo-apply]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const textarea = document.getElementById('playlist-url') as HTMLTextAreaElement | null;
      if (textarea) {
        textarea.value = 'https://www.youtube.com/playlist?list=PLBDA2E52FB1EF80C9';
        textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
        textarea.focus();
        // Dispatch input event to trigger validation
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });
  });

  // Re-translate dynamic labels and adjust tab scroll on language change
  window.addEventListener('yt:languagechange', () => {
    if (autoPlayLabel && window.i18n) {
      autoPlayLabel.textContent = isAutoPlaying
        ? window.i18n.t('demonstrations.autoPlayOn')
        : window.i18n.t('demonstrations.autoPlayPaused');
    }
    // Re-verify tab alignment after translated text alters button widths
    requestAnimationFrame(() => {
      scrollTabIntoView(currentStep, false);
    });
  });

  // Handle window resize gracefully to maintain tab alignment
  let resizeTimer: any = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      scrollTabIntoView(currentStep, false);
    }, 100);
  });

  // Initial render: Ensure tab container strictly starts at position 0 with no offset
  if (tabList) {
    tabList.scrollLeft = 0;
  }
  renderStep(1, false);
  startSlideshow();

  // Secondary verification pass to ensure layout has computed and Tab 1 is 100% visible
  requestAnimationFrame(() => {
    scrollTabIntoView(1, false);
    setTimeout(() => {
      scrollTabIntoView(1, false);
    }, 60);
  });
}

// Auto-run if script is loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInstructionalDemos);
  } else {
    initInstructionalDemos();
  }
}
