var mobileNav = document.getElementById('mobileNav');

function showMenu() {
    if (mobileNav) {
        mobileNav.classList.add('show');
    }
}

function hideMenu() {
    if (mobileNav) {
        mobileNav.classList.remove('show');
    }
}