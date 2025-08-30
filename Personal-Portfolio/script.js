document.addEventListener('DOMContentLoaded', () => {

    // -------------------- Smooth Scrolling for Navigation --------------------
    const navLinks = document.querySelectorAll('.menu-list a[href^="#"]');
    
    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevents the default jump behavior
            
            // Get the target section's ID from the link's href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Use the scrollIntoView method with smooth behavior
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // -------------------- Sticky Navbar and Active Link Highlighting --------------------
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const sections = document.querySelectorAll('section[id]');
        
        // Make header sticky by adding a class when scrolling down
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }

        // Highlight active link based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        // Remove the 'active' class from all links
        const allNavLinks = document.querySelectorAll('.menu-list a');
        allNavLinks.forEach(link => {
            link.classList.remove('active');
            // Add the 'active' class to the link that matches the current section
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const menuList = document.querySelector('.menu-list');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            menuList.classList.toggle('active');
        });
    }

});