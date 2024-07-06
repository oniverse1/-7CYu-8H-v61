document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('brand-valuator-link');
  
  // After the animation ends, remove the rainbow effect and make it plain
  link.addEventListener('animationend', () => {
    link.classList.add('rainbow-border-end');
  });
});