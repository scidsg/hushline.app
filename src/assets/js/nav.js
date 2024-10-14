document.addEventListener('DOMContentLoaded', function() {

    // Handle mobile navigation toggle
    const mobileNavButton = document.querySelector('.mobileNav');
    const navMenu = document.querySelector('header nav ul');

    mobileNavButton.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Isolate dropdown setup in its own function for better error handling
    function setupDropdown() {
        const dropdownToggle = document.querySelector('.dropdown .dropbtn');
        if (!dropdownToggle) return; // Exit if no dropdown toggle found

        const dropdownContent = document.querySelector('.dropdown-content');
        const dropdownIcon = document.querySelector('.dropdown-icon');

        // Ensure all elements needed for the dropdown are present
        if (dropdownContent && dropdownIcon) {
            dropdownToggle.addEventListener('click', function(event) {
                event.preventDefault();
                dropdownContent.classList.toggle('show');
                dropdownContent.style.animation = dropdownContent.classList.contains('show') ? 'fadeInSlideDown 0.3s ease forwards' : 'fadeOutSlideUp 0.3s ease forwards';
                dropdownIcon.classList.toggle('rotate-icon');
            });

            window.addEventListener('click', function(event) {
                if (!dropdownToggle.contains(event.target) && dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                    dropdownIcon.classList.remove('rotate-icon');
                }
            });
        }
    }

    // async function checkUptime() {
    //     const url = 'https://tips.hushline.app'; // replace with your Hush Line URL
    //     try {
    //       const response = await fetch(url, { method: 'HEAD' });
    //       if (response.ok) {
    //         document.getElementById('uptime-badge').style.backgroundColor = 'green';
    //         document.getElementById('uptime-badge').textContent = 'The App is Online';
    //       } else {
    //         document.getElementById('uptime-badge').style.backgroundColor = 'red';
    //         document.getElementById('uptime-badge').textContent = 'App Offline';
    //       }
    //     } catch (error) {
    //       document.getElementById('uptime-badge').style.backgroundColor = 'red';
    //       document.getElementById('uptime-badge').textContent = 'App Offline';
    //     }
    //   }
    
    //   setInterval(checkUptime, 60000); // Check every 60 seconds
    //   checkUptime(); // Initial check

    // Execute dropdown setup
    setupDropdown();
});
