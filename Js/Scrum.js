const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.addEventListener(
  'click',
  () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
  },
);

$prev.addEventListener(
  'click',
  () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
  },
);
// Obtener el botón por su clase
const btn = document.querySelector('.btn-76');

// Agregar un evento de clic al botón
btn.addEventListener('click', function() {
  // Redirigir a la página1.html
  window.location.href = 'index.html';
});
