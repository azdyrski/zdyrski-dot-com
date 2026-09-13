document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('.content-section');
    const container = document.getElementById('terminal-container');

    const navigateTo = (sectionId) => {
        // 1. Trigger Glitch
        container.classList.add('glitch-active');

        // 2. Wait for glitch to settle slightly, then swap
        setTimeout(() => {
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the requested section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // 3. Remove glitch class
            container.classList.remove('glitch-active');
        }, 150);
    };

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            navigateTo(sectionId);
        });
    });

    // Default view
    navigateTo('home');

    // Color theme switcher (amber -> green -> white -> amber ...)
    const colorSwitcher = document.getElementById('color-switcher');
    const colorSwitcherLabel = colorSwitcher.querySelector('.color-switcher-label');
    const themes = ['amber', 'green', 'white'];
    const storedTheme = localStorage.getItem('theme');
    let themeIndex = Math.max(themes.indexOf(storedTheme), 0);

    const applyTheme = (theme) => {
        // "amber" is the default palette, so no attribute is needed
        if (theme === 'amber') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }

        colorSwitcherLabel.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
        localStorage.setItem('theme', theme);
    };

    applyTheme(themes[themeIndex]);

    colorSwitcher.addEventListener('click', () => {
        container.classList.add('glitch-active');

        setTimeout(() => {
            themeIndex = (themeIndex + 1) % themes.length;
            applyTheme(themes[themeIndex]);

            container.classList.remove('glitch-active');
        }, 150);
    });
});