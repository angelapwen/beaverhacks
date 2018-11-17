$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    window.location.href = "contact.html";
});