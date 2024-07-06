document.addEventListener('DOMContentLoaded', function() {
  const link = document.getElementById('brand-valuator-link');
  
  // Add the animate class to start the animation
  link.classList.add('animate');
  
  // Remove the animate class after the animation completes
  link.addEventListener('animationend', function() {
    link.classList.remove('animate');
  });
});
