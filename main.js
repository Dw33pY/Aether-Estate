/* ==========================================
   AETHER ESTATES — Main JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Property Data (with multiple images for Swiper) ----
    const properties = [
        {
            id: 1,
            name: "The Meridian Estate",
            location: "Beverly Hills, California",
            price: "$12,500,000",
            beds: 5,
            baths: 6,
            sqft: "8,200 sqft",
            type: "house",
            images: [
                "https://picsum.photos/seed/meridian-est/1200/800",
                "https://picsum.photos/seed/meridian-2/1200/800",
                "https://picsum.photos/seed/meridian-3/1200/800"
            ],
            description: "An architectural masterpiece set among rolling hills, featuring floor-to-ceiling glass walls, infinity pool, and panoramic city views that redefine indoor-outdoor living.",
            span: "span-large"
        },
        {
            id: 2,
            name: "Coastal Retreat",
            location: "Malibu, California",
            price: "$8,900,000",
            beds: 4,
            baths: 4,
            sqft: "5,600 sqft",
            type: "house",
            images: [
                "https://picsum.photos/seed/coastal-ret/1200/800",
                "https://picsum.photos/seed/coastal-2/1200/800",
                "https://picsum.photos/seed/coastal-3/1200/800"
            ],
            description: "A beachfront sanctuary where the ocean meets luxury living. Private beach access, stunning sunset views, and resort-style amenities create the ultimate coastal escape.",
            span: ""
        },
        {
            id: 3,
            name: "Skyline Penthouse",
            location: "Manhattan, New York",
            price: "$15,200,000",
            beds: 3,
            baths: 3,
            sqft: "4,200 sqft",
            type: "apartment",
            images: [
                "https://picsum.photos/seed/skyline-pent/1200/800",
                "https://picsum.photos/seed/skyline-2/1200/800",
                "https://picsum.photos/seed/skyline-3/1200/800"
            ],
            description: "Rise above the city in this ultra-exclusive penthouse with 360-degree skyline views, private terrace, and bespoke interior finishes by world-renowned designers.",
            span: "span-tall"
        },
        {
            id: 4,
            name: "Emerald Valley Ranch",
            location: "Aspen, Colorado",
            price: "$22,000,000",
            beds: 6,
            baths: 7,
            sqft: "12,000 sqft",
            type: "land",
            images: [
                "https://picsum.photos/seed/emerald-ranch/1200/800",
                "https://picsum.photos/seed/emerald-2/1200/800",
                "https://picsum.photos/seed/emerald-3/1200/800"
            ],
            description: "A sprawling mountain estate with world-class skiing access, private trails, and untouched wilderness. The ultimate sanctuary for those who seek nature's grandeur.",
            span: "span-large"
        },
        {
            id: 5,
            name: "Harbor View Villa",
            location: "Miami Beach, Florida",
            price: "$6,700,000",
            beds: 4,
            baths: 5,
            sqft: "4,800 sqft",
            type: "house",
            images: [
                "https://picsum.photos/seed/harbor-villa/1200/800",
                "https://picsum.photos/seed/harbor-2/1200/800",
                "https://picsum.photos/seed/harbor-3/1200/800"
            ],
            description: "Mediterranean elegance meets modern luxury in this waterfront villa with private dock, bay views, and lush tropical gardens.",
            span: ""
        },
        {
            id: 6,
            name: "Desert Modern",
            location: "Scottsdale, Arizona",
            price: "$4,200,000",
            beds: 3,
            baths: 3,
            sqft: "3,600 sqft",
            type: "land",
            images: [
                "https://picsum.photos/seed/desert-mod/1200/800",
                "https://picsum.photos/seed/desert-2/1200/800",
                "https://picsum.photos/seed/desert-3/1200/800"
            ],
            description: "A minimalist desert masterpiece blending seamlessly with the Sonoran landscape. Private acreage, stargazing terrace, and organic architecture at its finest.",
            span: ""
        }
    ];

    // ---- Exclusive Horizontal Showcase Data ----
    const showcaseProperties = [
        {
            name: "The Obsidian Manor",
            location: "French Riviera",
            tagline: "Where the sea meets the sky",
            image: "https://picsum.photos/seed/obsidian-manor/1400/800"
        },
        {
            name: "Timberline Summit",
            location: "Whistler, Canada",
            tagline: "Elevated mountain living",
            image: "https://picsum.photos/seed/timberline-sum/1400/800"
        },
        {
            name: "Aurora Acres",
            location: "Queenstown, New Zealand",
            tagline: "Untamed elegance",
            image: "https://picsum.photos/seed/aurora-acres/1400/800"
        },
        {
            name: "Coral Crest",
            location: "Turks and Caicos",
            tagline: "Island paradise redefined",
            image: "https://picsum.photos/seed/coral-crest/1400/800"
        }
    ];

    // ---- DOM Elements ----
    const loader = document.getElementById('loader');
    const curtain = document.getElementById('curtain');
    const counterEl = document.getElementById('counter');
    const loaderFill = document.getElementById('loader-fill');
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const galleryGrid = document.getElementById('gallery-grid');
    const propertyPanel = document.getElementById('property-panel');
    const panelCloseBtn = document.getElementById('panel-close');
    const panelBackdrop = document.getElementById('panel-backdrop');
    const scrollProgress = document.getElementById('scroll-progress');
    const ctaForm = document.getElementById('cta-form');
    const horizontalTrack = document.getElementById('horizontal-track');

    let activeSwiper = null;

    // ---- Custom Cursor ----
    let isCoarse = window.matchMedia('(pointer: coarse)').matches;

    if (!isCoarse) {
        document.body.classList.add('cursor-ready');
        let mouseX = 0, mouseY = 0;
        let dotX = 0, dotY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            dotX += (mouseX - dotX) * 0.3;
            dotY += (mouseY - dotY) * 0.3;
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;

            cursorDot.style.left = dotX + 'px';
            cursorDot.style.top = dotY + 'px';
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        const hoverTargets = 'a, button, .gallery-item, .service-card, .filter-btn, input, .swiper-button-next, .swiper-button-prev';
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest(hoverTargets)) document.body.classList.add('cursor-hover');
        });
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest(hoverTargets)) document.body.classList.remove('cursor-hover');
        });
    }

    // ---- Magnetic Buttons ----
    const magneticBtns = document.querySelectorAll('.magnetic-btn');

    function initMagneticButtons() {
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.2, ease: 'power2.out' });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
            });
        });
    }
    initMagneticButtons();

    // ---- Loader ----
    let counter = { val: 0 };
    const loaderTL = gsap.timeline({ onComplete: revealCurtain });

    loaderTL
        .to(counter, {
            val: 100,
            duration: 2.4,
            ease: 'power2.inOut',
            onUpdate: () => {
                const v = Math.round(counter.val);
                counterEl.textContent = v;
                loaderFill.style.width = v + '%';
            }
        })
        .to(counterEl, { y: -30, opacity: 0, duration: 0.4, ease: 'power2.in' })
        .to('.loader-bar', { opacity: 0, duration: 0.3 }, '-=0.2')
        .to('.loader-label', { opacity: 0, duration: 0.3 }, '-=0.3');

    // ---- Curtain Reveal ----
    function revealCurtain() {
        const panels = document.querySelectorAll('.curtain-panel');
        const curtainTL = gsap.timeline({
            onComplete: () => {
                curtain.style.display = 'none';
                loader.style.display = 'none';
                initAnimations();
            }
        });

        curtainTL.to(panels, {
            yPercent: -100,
            duration: 0.9,
            ease: 'power4.inOut',
            stagger: 0.08
        });
    }

    // ---- Lenis Smooth Scroll (Synced with GSAP) ----
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // ---- Scroll Progress ----
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });

    // ---- Navbar Scroll Behavior ----
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        lastScrollY = window.scrollY;
    });

    // ---- Mobile Menu ----
    function openMenu() {
        mobileMenu.classList.add('open');
        menuToggle.classList.add('active');
        document.documentElement.classList.add('overflow-hidden');
        lenis.stop();
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        document.documentElement.classList.remove('overflow-hidden');
        lenis.start();
    }

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    });

    menuClose.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ---- Smooth Anchor Scrolling ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                closeMenu();
                closePanel();
                lenis.scrollTo(target, { offset: -60 });
            }
        });
    });

    // ---- Build Gallery ----
    function renderGallery(filter = 'all') {
        const filtered = filter === 'all' ? properties : properties.filter(p => p.type === filter);
        galleryGrid.innerHTML = '';

        filtered.forEach((prop, i) => {
            const item = document.createElement('div');
            item.className = `gallery-item ${prop.span}`;
            item.dataset.id = prop.id;
            item.innerHTML = `
                <img src="${prop.images[0]}" alt="${prop.name}" loading="lazy">
                <div class="gallery-item-overlay">
                    <span class="gallery-item-type">${prop.type}</span>
                    <h3 class="gallery-item-name">${prop.name}</h3>
                    <p class="gallery-item-location">${prop.location}</p>
                    <div class="gallery-item-meta">
                        <span><iconify-icon icon="lucide:bed-double" width="14"></iconify-icon> ${prop.beds} Beds</span>
                        <span><iconify-icon icon="lucide:bath" width="14"></iconify-icon> ${prop.baths} Baths</span>
                        <span><iconify-icon icon="lucide:maximize" width="14"></iconify-icon> ${prop.sqft}</span>
                    </div>
                </div>
                <span class="gallery-item-price">${prop.price}</span>
            `;

            item.addEventListener('click', () => openPanel(prop));
            galleryGrid.appendChild(item);

            gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.08,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 92%',
                    toggleActions: 'play none none none'
                }
            });
        });
    }

    // ---- Gallery Filtering ----
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            const items = galleryGrid.querySelectorAll('.gallery-item');
            items.forEach(item => item.classList.add('hiding'));

            setTimeout(() => { renderGallery(filter); }, 350);
        });
    });

    // ---- Build Horizontal Showcase ----
    function renderShowcase() {
        horizontalTrack.innerHTML = '';
        showcaseProperties.forEach(prop => {
            const card = document.createElement('div');
            card.className = 'horizontal-card';
            card.innerHTML = `
                <img src="${prop.image}" alt="${prop.name}" loading="lazy">
                <div class="horizontal-card-overlay">
                    <span class="horizontal-card-location">${prop.location}</span>
                    <h3 class="horizontal-card-name">${prop.name}</h3>
                    <p class="horizontal-card-tagline">${prop.tagline}</p>
                </div>
            `;
            horizontalTrack.appendChild(card);
        });
    }

    // ---- Property Panel & Swiper ----
    function openPanel(prop) {
        // Setup Swiper slides
        const wrapper = document.getElementById('panel-swiper-wrapper');
        wrapper.innerHTML = '';
        prop.images.forEach(img => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `<img src="${img}" alt="${prop.name}">`;
            wrapper.appendChild(slide);
        });

        // Update text details
        document.getElementById('panel-type').textContent = prop.type;
        document.getElementById('panel-name').textContent = prop.name;
        document.getElementById('panel-location').textContent = prop.location;
        document.getElementById('panel-price').textContent = prop.price;
        document.getElementById('panel-beds').textContent = prop.beds + ' Beds';
        document.getElementById('panel-baths').textContent = prop.baths + ' Baths';
        document.getElementById('panel-sqft').textContent = prop.sqft;
        document.getElementById('panel-desc').textContent = prop.description;

        propertyPanel.classList.add('open');
        panelBackdrop.classList.add('active');
        document.documentElement.classList.add('overflow-hidden');
        lenis.stop();

        // Initialize Swiper after panel opens
        setTimeout(() => {
            if (activeSwiper) activeSwiper.destroy(true, true);
            activeSwiper = new Swiper('.property-swiper', {
                loop: true,
                grabCursor: true,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                speed: 600,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }, 650); // match CSS transition time
    }

    function closePanel() {
        propertyPanel.classList.remove('open');
        panelBackdrop.classList.remove('active');
        document.documentElement.classList.remove('overflow-hidden');
        lenis.start();
    }

    panelCloseBtn.addEventListener('click', closePanel);
    panelBackdrop.addEventListener('click', closePanel);

    document.getElementById('panel-cta').addEventListener('click', (e) => {
        e.preventDefault();
        closePanel();
        setTimeout(() => { lenis.scrollTo('#contact', { offset: -60 }); }, 400);
    });

    // ---- CTA Form ----
    ctaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = ctaForm.querySelector('.cta-input');
        const btn = ctaForm.querySelector('.btn-primary');
        if (input.value) {
            btn.textContent = 'Submitted ✓';
            btn.style.background = '#22c55e';
            btn.style.color = '#fff';
            input.value = '';
            setTimeout(() => {
                btn.textContent = 'Get Started';
                btn.style.background = '';
                btn.style.color = '';
            }, 3000);
        }
    });

    // ---- GSAP Animations ----
    function initAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // Hero animations
        const heroTL = gsap.timeline({ delay: 0.3 });
        heroTL
            .to('.hero-tag.anim-fade', { opacity: 1, duration: 0.8, ease: 'power2.out' })
            .to('.hero-line.anim-up', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.15 }, '-=0.4')
            .to('.hero-subtitle.anim-fade', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.5')
            .to('.hero-ctas.anim-up', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4')
            .to('.scroll-indicator.anim-fade', { opacity: 1, duration: 0.6 }, '-=0.2');

        // Hero parallax
        gsap.to('.hero-bg img', {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
        });

        gsap.to('.hero-content', {
            yPercent: -15,
            opacity: 0,
            ease: 'none',
            scrollTrigger: { trigger: '#hero', start: '60% top', end: 'bottom top', scrub: true }
        });

        gsap.to('.scroll-indicator', {
            yPercent: 100,
            opacity: 0,
            ease: 'none',
            scrollTrigger: { trigger: '#hero', start: 'top top', end: '30% top', scrub: true }
        });

        gsap.to('.orb-1', { yPercent: 30, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
        gsap.to('.orb-2', { yPercent: -20, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });

        // Reveal text animations
        document.querySelectorAll('.reveal-text').forEach(el => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
            });
        });

        // Reveal image animations
        document.querySelectorAll('.reveal-img').forEach(el => {
            gsap.to(el, {
                opacity: 1,
                clipPath: 'inset(0% 0 0 0)',
                duration: 1.2,
                ease: 'power3.inOut',
                scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
            });
        });

        // Counter animation
        document.querySelectorAll('.stat-number').forEach(el => {
            const target = parseInt(el.dataset.target);
            const obj = { val: 0 };
            ScrollTrigger.create({
                trigger: el,
                start: 'top 85%',
                once: true,
                onEnter: () => {
                    gsap.to(obj, {
                        val: target,
                        duration: 2,
                        ease: 'power2.out',
                        onUpdate: () => { el.textContent = Math.round(obj.val); }
                    });
                }
            });
        });

        // Service & Testimonial cards
        document.querySelectorAll('.service-card, .testimonial-card').forEach((card, i) => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.1,
                ease: 'power2.out',
                scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
            });
        });

        // Spotlight parallax
        gsap.to('.spotlight-bg img', {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: { trigger: '.section-spotlight', start: 'top bottom', end: 'bottom top', scrub: true }
        });

        // ---- Horizontal Scroll Showcase (GSAP matchMedia for bulletproof responsive handling) ----
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": function() {
                // Desktop: Pin and translate horizontally
                const track = document.getElementById('horizontal-track');
                const totalScrollWidth = track.scrollWidth - window.innerWidth;

                gsap.to(track, {
                    x: () => -totalScrollWidth,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.section-horizontal',
                        start: 'top top',
                        end: () => '+=' + totalScrollWidth,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        anticipatePin: 1
                    }
                });
            }
        });
    }

    // ---- Initial Render ----
    renderGallery('all');
    renderShowcase();

    // ---- Keyboard support ----
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
            closePanel();
        }
    });

    // ---- Resize handler ----
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { ScrollTrigger.refresh(); }, 250);
    });

});
