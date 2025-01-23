document.addEventListener('click', function (event) {
    const isDropdownButton = event.target.matches('[data-toggle="dropdown"]');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    
    dropdownMenus.forEach(menu => {
      const dropdown = menu.closest('.dropdown');
      const toggleButton = dropdown.querySelector('.dropdown-toggle');
  
      if (isDropdownButton && toggleButton === event.target) {
        // Toggle the clicked dropdown
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        menu.style.display = isExpanded ? 'none' : 'block';
      } else {
        // Close other dropdowns
        toggleButton.setAttribute('aria-expanded', 'false');
        menu.style.display = 'none';
      }
    });
  });
  