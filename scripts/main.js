document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('nav ul li a.nav-link');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath + '.html'|| (currentPath === '' && (linkPath === 'index.html' || linkPath === './'))) {
            link.classList.add('active-nav-link');
        }
    });


    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    cards.forEach((card, index) => {
        card.style.opacity = '0'; 
        card.style.transform = 'translateY(20px)'; 
        card.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });


    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '↑';
    backToTopButton.setAttribute('id', 'backToTop');
    
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});