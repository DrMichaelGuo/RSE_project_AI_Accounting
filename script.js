document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Apple-style reveal animations
    const grantInfo = document.querySelector('.grant-info');
    const headerGradient = document.querySelector('header::before');
    
    // Floating animation trigger
    grantInfo.style.animationPlayState = 'running';
    
    // Parallax effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if(headerGradient) {
            headerGradient.style.transform = `rotate(-15deg) translateY(${scrolled * 0.5}px)`;
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.area-card, .profile-image, .method-step').forEach(el => {
        // Set initial state for animation
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });
    
    // Staggered animation for methodology steps
    const methodSteps = document.querySelectorAll('.method-step');
    methodSteps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.1}s`;
    });
});
