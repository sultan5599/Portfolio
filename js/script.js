  // Sultan Bataweel - 1947243 - Assignment 1

document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll('.nav-pills .nav-link');

  function removeActiveClass() {
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });
  }

  window.addEventListener('scroll', function() {
    var fromTop = window.scrollY;

    navLinks.forEach(function(link) {
      var section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        removeActiveClass();
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
});
