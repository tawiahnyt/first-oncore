 // Navbar show/hide code
var $navbar = $('#main-nav-bar');
var $navbarCollapse = $('#navcol-2');
var togglerClicked = false;
$('.navbar-toggler').on('click', function () {
    togglerClicked = true;
    Logger.debug('Navbar toggled')
});
$navbar.on('mouseleave', function () {
    collapseNavbarIfExpanded();
});
// Collapse navbar when a link or button inside it is clicked
$navbarCollapse.on('click', 'a, button', function () {
    collapseNavbarIfExpanded();
});
function collapseNavbarIfExpanded() {
    Logger.debug('Navbar collapse if expanded')
    if (togglerClicked && $navbarCollapse.hasClass('show')) {
        var navbarCollapseInstance = new bootstrap.Collapse($navbarCollapse[0]);
        navbarCollapseInstance.hide();
        togglerClicked = false; // reset the flag
        Logger.debug('Navbar was collapsed')
    }
}