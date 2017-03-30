var test = "cerrado";
// Creamos un array vacio
var ElementosClick = new Array();
// Capturamos el click y lo pasamos a una funcion
document.onclick = captura_click;
function captura_click() {
//    e.preventDefault();
    console.log(event.srcElement.id);
    console.log(test);
	if ((test=="abierto") && ((event.srcElement.id != "link") && (event.srcElement.id != "menu-icon"))){
        closeNav();
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "225px";
    document.getElementById("menu-icon").classList.add("ocultar");
//    console.log(document.onclick);
    test = "abierto";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu-icon").classList.remove("ocultar");
    test = "cerrado";
}
(function ($) {
    // Instantiate MixItUp:
    $('#Container').mixItUp();

    // Add smooth scrolling to all links in navbar + footer link
    $(".sidenav #link").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
    });
})(jQuery);