document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation for login and contact forms
    const loginForm = document.querySelector('form[action="login.html"]');
    const contactForm = document.querySelector('form[action="talk_to_us.html"]');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username === '' || password === '') {
                e.preventDefault();
                alert('Please fill in both fields');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            if (name === '' || email === '' || message === '') {
                e.preventDefault();
                alert('Please fill in all fields');
            }
        });
    }

    // Back-to-top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Navbar highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Dynamic statistics display
    const statsButtons = document.querySelectorAll('.stats-buttons button');
    const statDisplay = document.getElementById('stat-value');

    statsButtons.forEach(button => {
        button.addEventListener('click', () => {
            let statText;
            switch (button.dataset.stat) {
                case 'stockouts':
                    statText = 'Stockouts: 10%';
                    break;
                case 'cash-recovery':
                    statText = 'Cash Recovery Cycle: 5 days';
                    break;
                case 'revenue':
                    statText = 'Revenue: $1M';
                    break;
                default:
                    statText = 'Click on a category to see statistics';
            }
            statDisplay.textContent = statText;
        });
    });
});
