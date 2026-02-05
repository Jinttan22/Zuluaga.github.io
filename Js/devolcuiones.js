function validateForm() {
    const inputs = document.querySelectorAll('input[required]');
    for (let input of inputs) {
        if (!input.value) {
            return false;
        }
    }
    return true;
  }
  
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        Swal.fire({
            title: "¡Gracias por tu Mensaje!",
            html: "En unos momentos veremos tu solicitud. Gracias",
            timer: 4000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
            setTimeout(function() {
                location.reload();
            }, 500);
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, complete todos los campos.',
        });
    }
  });
  
  let inputFile = document.getElementById('foto');
  inputFile.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        const file = this.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            Swal.fire({
                title: 'Foto seleccionada',
                imageUrl: e.target.result,
                imageAlt: 'Foto del producto'
            });
        };
        reader.readAsDataURL(file);
    }
  });
  