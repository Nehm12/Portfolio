document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    const currentTheme = localStorage.getItem('site_theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        if (icon) {
            icon.classList.remove('bi-moon');
            icon.classList.add('bi-sun');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            body.classList.toggle('dark-theme');

            const isDark = body.classList.contains('dark-theme');
            localStorage.setItem('site_theme', isDark ? 'dark' : 'light');

            if (icon) {
                icon.classList.toggle('bi-moon', !isDark);
                icon.classList.toggle('bi-sun', isDark);
            }
        });
    }

    // Language toggle redirect
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = document.documentElement.lang || 'fr';
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            
            localStorage.setItem('site_lang', newLang);

            const path = window.location.pathname;
            let newPath;
            if (path.includes('/fr/')) {
                newPath = path.replace('/fr/', '/' + newLang + '/');
            } else if (path.includes('/en/')) {
                newPath = path.replace('/en/', '/' + newLang + '/');
            } else {
                // Handle direct file paths
                newPath = path.replace('/' + currentLang + '/', '/' + newLang + '/');
            }
            window.location.href = newPath;
        });
    }
});

