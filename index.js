const menuSection = document.querySelector('.menu-section');

    window.addEventListener('scroll', () => {
      const sectionTop = menuSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.85; // when 85% of the screen is reached

      if (sectionTop < triggerPoint) {
        menuSection.classList.add('show');
      }
    });