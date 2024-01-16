
$('#hamburger-icon').on('click',function() {
    $('.sidebar-nav').toggleClass('remove-nav-section');
    $('.body-content').toggleClass('body-content-width');
    $('#hamburger-icon').toggleClass('lines');
});