function mostrarFormulario() {
    document.getElementById("formulario").style.display = "block";
    document.getElementById("botonEmpleado").style.display = "none";
}

function mostrarDatos() {
    var seleccion = document.getElementById("selectPuesto").value;
    if (seleccion === "conductor") {
        document.getElementById("formulario").style.display = "none";
        document.getElementById("datosConductor").style.display = "block";
    }
}

function validarFormulario(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var pagosEfectivo = document.getElementById("pagosEfectivo").value;
    var direccionEntrega = document.getElementById("direccionEntrega").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var licenciaConducir = document.getElementById("licenciaConducir").value;

    if (nombre === "" || apellido === "" || pagosEfectivo === "" || direccionEntrega === "" || telefono === "" || email === "" || licenciaConducir === "") {
        swal("Error", "Por favor, completa todos los campos del formulario.", "error");
        return;
    }

    if (telefono.length !== 10) {
        swal("Error", "El número de teléfono debe tener 10 dígitos.", "error");
        return;
    }

    if (!email.includes("@")) {
        swal("Error", "Por favor, ingresa un email válido.", "error");
        return;
    }

    mostrarMensajeExito();
}

function mostrarMensajeExito() {
swal({
    title: "¡Registro exitoso!",
    text: "Tu información ha sido guardada correctamente.",
    icon: "success",
    button: "¡Aceptar!",
}).then((value) => {
    if (value) {
        window.location.href = window.location.href.split('#')[0]; // Redirigir al inicio de la página
    }
});
}
