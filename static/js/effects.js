document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('a.button');
    var star = button.querySelector('svg.star');
    
    button.addEventListener('click', function() {
      star.classList.add('magictime', 'vanishOut');
      button.classList.add('clicked');

      // Wait for the animation to complete and then remove the classes
      setTimeout(function() {
        star.classList.remove('magictime', 'vanishOut');
        button.classList.remove('clicked');
      }, 1000); // Adjust the timeout value to match the animation duration
    });
  });