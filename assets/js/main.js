// ADD YOUR CUSTOME JS HERE
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        var body = this.nextElementSibling;
        this.classList.toggle("active");
        body.classList.toggle("active");
    });
}

$('.toggle-bar').click(function(){
    $('.nav-right').slideToggle();
});

AOS.init();