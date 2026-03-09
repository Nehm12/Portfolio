document.addEventListener('DOMContentLoaded', () => {
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
});
