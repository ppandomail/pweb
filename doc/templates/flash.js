document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
      let alerts = document.querySelectorAll('.alert');
      alerts.forEach(function(alert) {
          alert.style.opacity = '0';
          setTimeout(function() {
              alert.remove();
          }, 500);
      });
  }, 3000);
});