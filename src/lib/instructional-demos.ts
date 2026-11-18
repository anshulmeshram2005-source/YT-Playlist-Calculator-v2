// src/lib/instructional-demos.ts
// Robust, continuous animated slideshow for "How to Use the Calculator"
// Supports 5 realistic steps, smooth transitions, manual tab selection, and auto-play resume.

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

  const tabs = container.querySelectorAll<HTMLButtonElement>('[data-demo-step-btn]');
  const slides = container.querySelectorAll<HTMLElement>('[data-demo-slide]');
  const prevBtn = document.getElementById('demo-prev-btn');
  const nextBtn = document.getElementById('demo-next-btn');
  const autoPlayBtn = document.getElementById('demo-autoplay-btn');
  const autoPlayLabel = document.getElementById('demo-autoplay-label');
  const autoPlayIcon = document.getElementById('demo-autoplay-icon');
  const progressBar = document.getElementById('demo-progress-bar');

  function renderStep(step: number, animate = true) {
    currentStep = ((step - 1 + totalSteps) % totalSteps) + 1;

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

    // Reset progress bar animation
    if (progressBar) {
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
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
      // Step 1: Typing text animation
      const typingEl = document.getElementById('demo-typing-url');
      if (typingEl) {
        const fullUrl = 'https://www.youtube.com/playlist?list=PLBDA2E52FB1EF80C9';
        let idx = 0;
        typingEl.textContent = '';
        const typeInterval = setInterval(() => {
          idx += 3;
          if (idx >= fullUrl.length) {
            typingEl.textContent = fullUrl;
            clearInterval(typeInterval);
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
      steps.forEach((el, i) => {
        if (!el) return;
        el.style.opacity = '0.3';
        setTimeout(() => {
          if (currentStep === 2) {
            el.style.transition = 'opacity 0.3s ease';
            el.style.opacity = '1';
          }
        }, (i + 1) * 400);
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
      progressBar.style.transition = `width ${STEP_DURATION_MS}ms linear`;
      progressBar.style.width = '100%';
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
    // When user manually selects a tab, show step immediately, then resume auto-play smoothly
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

  // Re-translate dynamic labels on language change
  window.addEventListener('yt:languagechange', () => {
    if (autoPlayLabel && window.i18n) {
      autoPlayLabel.textContent = isAutoPlaying
        ? window.i18n.t('demonstrations.autoPlayOn')
        : window.i18n.t('demonstrations.autoPlayPaused');
    }
  });

  // Initial render
  renderStep(1, false);
  startSlideshow();
}

// Auto-run if script is loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInstructionalDemos);
  } else {
    initInstructionalDemos();
  }
}

