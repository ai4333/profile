document.addEventListener('DOMContentLoaded', function() {
    // Load Spline 3D model
    const splineContainer = document.getElementById('spline-container');
    const splineScript = document.createElement('script');
    splineScript.src = 'https://unpkg.com/@splinetool/viewer@1.0.62/build/spline-viewer.js';
    splineScript.type = 'module';
    document.head.appendChild(splineScript);
    
    splineScript.onload = function() {
        const splineViewer = document.createElement('spline-viewer');
        splineViewer.setAttribute('url', 'https://prod.spline.design/cNfJaxD4JUzWtef0/scene.splinecode');
        splineContainer.appendChild(splineViewer);
    };

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Close menu when clicking on a nav item
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});