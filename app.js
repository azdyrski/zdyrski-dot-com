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
});