/* Theme handling for the Computational Neuroanatomy Lab site.
   Loaded in <head> (render-blocking) so the correct theme is set
   before the body paints — this avoids a flash of the wrong theme. */
(function () {
    var STORAGE_KEY = 'cnl-theme';

    function systemPrefersDark() {
        return window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function resolveInitialTheme() {
        var saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
        if (saved === 'light' || saved === 'dark') return saved;
        return systemPrefersDark() ? 'dark' : 'light';
    }

    var MOON_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
    var SUN_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        var btn = document.querySelector('.theme-toggle');
        if (btn) {
            btn.innerHTML = theme === 'dark' ? SUN_ICON : MOON_ICON;
            btn.setAttribute(
                'aria-label',
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }
    }

    // Apply as early as possible.
    applyTheme(resolveInitialTheme());

    window.toggleTheme = function () {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
        applyTheme(next);
    };

    // Re-sync the button label once the DOM (and the button) exists.
    document.addEventListener('DOMContentLoaded', function () {
        applyTheme(document.documentElement.getAttribute('data-theme'));
    });
})();
