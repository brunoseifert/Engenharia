var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 20) {
          nav.classList.add('bg-dark', 'shadow');
          nav.style.transition = 'all 0.5s';
        } else {
          nav.classList.remove('bg-dark', 'shadow');
        }
      });