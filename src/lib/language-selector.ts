// src/lib/language-selector.ts
// Handles responsive positioning, keyboard navigation, search filtering, and outside dismissal
// for the 22-language selector on both desktop and mobile.

import { SUPPORTED_LANGUAGES, normalizeLanguage } from './i18n';

export function initLanguageSelector(): void {
  if (typeof window === 'undefined') return;

  const btn = document.getElementById('language-selector-btn');
  const dropdown = document.getElementById('language-dropdown');
  const chevron = document.getElementById('lang-chevron');
  const searchInput = document.getElementById('lang-search-input') as HTMLInputElement | null;
  const options = document.querySelectorAll<HTMLButtonElement>('[data-lang-option]');
  const container = document.getElementById('language-selector-container');

  if (!btn || !dropdown) return;

  // Prevent multiple initializations
  if ((btn as any).__langSelectorInit) return;
  (btn as any).__langSelectorInit = true;

  function positionDropdown() {
    if (!dropdown || !btn) return;
    const isHidden = dropdown.classList.contains('hidden');
    if (isHidden) return;

    const btnRect = btn.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

    if (viewportWidth < 640) {
      // Mobile positioning: fixed below header, clamped within viewport
      const dropdownWidth = Math.min(280, viewportWidth - 24);
      dropdown.style.position = 'fixed';
      dropdown.style.top = `${btnRect.bottom + 8}px`;
      dropdown.style.width = `${dropdownWidth}px`;
      dropdown.style.maxHeight = '72vh';

      if (isRtl) {
        // In RTL, align near button right edge but clamp between 12px and viewportWidth - 12px
        let right = viewportWidth - btnRect.right;
        if (right < 12) right = 12;
        if (right + dropdownWidth > viewportWidth - 12) {
          right = viewportWidth - dropdownWidth - 12;
        }
        dropdown.style.right = `${right}px`;
        dropdown.style.left = 'auto';
      } else {
        // In LTR, align near button right edge but clamp
        let right = viewportWidth - btnRect.right;
        if (right < 12) right = 12;
        if (right + dropdownWidth > viewportWidth - 12) {
          right = viewportWidth - dropdownWidth - 12;
        }
        dropdown.style.right = `${right}px`;
        dropdown.style.left = 'auto';
      }
    } else {
      // Desktop / Tablet positioning: anchored absolute
      dropdown.style.position = 'absolute';
      dropdown.style.top = '100%';
      dropdown.style.width = '16rem';
      dropdown.style.maxHeight = '';
      if (isRtl) {
        dropdown.style.left = '0';
        dropdown.style.right = 'auto';
      } else {
        dropdown.style.right = '0';
        dropdown.style.left = 'auto';
      }
    }
  }

  function toggleDropdown(open?: boolean) {
    const shouldOpen = open !== undefined ? open : dropdown.classList.contains('hidden');
    if (shouldOpen) {
      dropdown.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
      chevron?.classList.add('rotate-180');
      positionDropdown();
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 60);
      }
    } else {
      dropdown.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
      chevron?.classList.remove('rotate-180');
      if (searchInput) {
        searchInput.value = '';
        filterOptions('');
      }
    }
  }

  function filterOptions(query: string) {
    const q = query.trim().toLowerCase();
    options.forEach((opt) => {
      const searchTarget = opt.getAttribute('data-lang-search') || '';
      const matches = !q || searchTarget.includes(q);
      opt.classList.toggle('hidden', !matches);
    });
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  searchInput?.addEventListener('input', (e) => {
    filterOptions((e.target as HTMLInputElement).value);
  });

  // Handle option selection
  options.forEach((opt) => {
    opt.addEventListener('click', async (e) => {
      e.stopPropagation();
      const code = opt.getAttribute('data-lang-option');
      if (code && window.i18n) {
        await window.i18n.setLanguage(code);
      }
      toggleDropdown(false);
      btn.focus();
    });
  });

  // Dismiss on outside click
  document.addEventListener('click', (e) => {
    if (!container?.contains(e.target as Node) && !dropdown?.contains(e.target as Node)) {
      toggleDropdown(false);
    }
  });

  // Keyboard navigation (Escape to close)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !dropdown.classList.contains('hidden')) {
      toggleDropdown(false);
      btn.focus();
    }
  });

  // Reposition on window resize or scroll
  window.addEventListener('resize', positionDropdown);
  window.addEventListener('scroll', positionDropdown, { passive: true });
}

// Auto-run if script is loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSelector);
  } else {
    initLanguageSelector();
  }
}

