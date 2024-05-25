document.addEventListener('DOMContentLoaded', function () {
    var mobileNav = document.getElementById('mobileNav');

    window.showMenu = function () {
        if (mobileNav) {
            mobileNav.classList.add('show');
        }
    }

    window.hideMenu = function () {
        if (mobileNav) {
            mobileNav.classList.remove('show');
        }
    }

    var mainNav = document.getElementById('mainNav');
    var mainMobileNav = document.getElementById('mainMobileNav');

    if (!mainNav || !mainMobileNav) {
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        var entry = entries[0];

        if (!entry.isIntersecting) {
            mainMobileNav.classList.add('active');
        } else {
            mainMobileNav.classList.remove('active');
        }
    });

    observer.observe(mainNav);

    function hideElements(containerId) {
        const elementsToHide = document.querySelectorAll(`#${containerId} *`);
        elementsToHide.forEach((element, index) => {
            if (index > 0) {
                element.classList.add('hidden');
            }
        });
    }

    hideElements('mainHeaderWrapper');
    hideElements('about');
    hideElements('features');
    hideElements('pricing');
    hideElements('contact');
    hideElements('mainFooter');

    function handleAnimation(entries, observer) {
        entries.forEach(entry => {
            const children = entry.target.querySelectorAll('*');
            if (entry.isIntersecting) {
                let interval = 40;
                children.forEach(child => {
                    setTimeout(() => {
                        child.classList.add('animate');
                    }, interval);
                    interval += 10;
                });
            }
            else {
                children.forEach(child => {
                    child.classList.remove('animate');
                });
            }
        });
    }

    const visibilityObserver = new IntersectionObserver(handleAnimation, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    });

    visibilityObserver.observe(document.getElementById('mainHeaderWrapper'));
    visibilityObserver.observe(document.getElementById('about'));
    visibilityObserver.observe(document.getElementById('features'));
    visibilityObserver.observe(document.getElementById('pricing'));
    visibilityObserver.observe(document.getElementById('contact'));
    visibilityObserver.observe(document.getElementById('mainFooter'));
});
