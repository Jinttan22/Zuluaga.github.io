document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.hm-tab-link');
    const tabsContent = document.querySelectorAll('.tabs-content');

    // Inicializar el primer tab como activo
    tabLinks[0].classList.add('active');
    tabsContent[0].classList.add('tab-active');

    tabLinks.forEach((tabLink, index) => {
        tabLink.addEventListener('click', () => {
            // Quitar la clase active de todos los tabs y contenido
            tabLinks.forEach(tab => tab.classList.remove('active'));
            tabsContent.forEach(content => content.classList.remove('tab-active'));

            // Agregar la clase active al tab y contenido clickeado
            tabLink.classList.add('active');
            tabsContent[index].classList.add('tab-active');
        });
    });

    AOS.init({
        duration: 1200,
    });
});

