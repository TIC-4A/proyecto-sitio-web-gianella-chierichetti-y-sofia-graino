// Este evento se asegura de que el código se ejecute solo cuando toda la página HTML se haya cargado.
document.addEventListener('DOMContentLoaded', () => {

    // Seleccionamos todos los botones de navegación y todas las secciones de contenido.
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');

    // Agregamos un "escuchador" de clics a cada botón de navegación.
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevenimos que el link '#' recargue la página.
            event.preventDefault();

            // Obtenemos el ID de la sección que queremos mostrar desde el atributo 'data-target' del botón.
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // 1. Quitamos la clase 'active' de todos los botones.
            navButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // 2. Quitamos la clase 'active' (que los hace visibles) de todas las secciones.
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // 3. Añadimos la clase 'active' solo al botón que fue presionado.
            button.classList.add('active');
            
            // 4. Añadimos la clase 'active' solo a la sección correspondiente para mostrarla.
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});
