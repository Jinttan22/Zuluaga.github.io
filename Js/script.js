document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Aquí puedes agregar cualquier validación adicional antes de mostrar la ventana emergente

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tu mensaje ha sido enviado con Exito.",
        showConfirmButton: false,
        timer: 1900
    });

    // Actualiza la página después de mostrar la ventana emergente
    setTimeout(function() {
        location.reload(); // Recarga la página
    }, 1500); // 

    // Selecciona el campo de teléfono por su ID
var telefonoInput = document.getElementById('telefono');

telefonoInput.addEventListener('keydown', function(event) {
    // Obtiene el valor de la tecla presionada
    var key = event.key;

    if (isNaN(key) && key !== 'Backspace' && key !== 'Delete') {
        // Cancela el evento predeterminado si la tecla presionada no es un número
        event.preventDefault();
    }
});
});


document.addEventListener("DOMContentLoaded", function() {
    const btnIngresaApp = document.querySelector(".btn-101");

    btnIngresaApp.addEventListener("click", function() {
        Swal.fire({
            title: '¡Escanea el siguiente codigo QR!',
            text: 'Gracias por tu interés en nuestra aplicación.',
            imageUrl: '../Imagenes/App.png', 
            imageWidth: 400, 
            imageHeight: 400, 
            imageAlt: 'Imagen de la App',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#14b4bf',
            
        }).then((result) => {

            if (result.isConfirmed) {
                location.reload();
            }
        });
    });
});
// Obtener el botón por su clase
const btn = document.querySelector('.btn-76');

// Agregar un evento de clic al botón
btn.addEventListener('click', function() {
  // Redirigir a la página1.html
  window.location.href = 'Scrum.html';
});