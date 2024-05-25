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
});
