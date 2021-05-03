// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){
    
    //Activación de Slick-Slider
	$('.slick-slider').slick({
		autoplay: true,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 200,
		arrows: true
	});

    // Abrir y Cerrar Menú Responsive >>> Izquierda 290px
    $('#abrir-menu').click(function(){
        $('#menu-moviles').animate({
            left: 0
        });
        $('#abrir-menu').hide();
        $('#cerrar-menu').show();
        event.preventDefault();
    });

    $('#cerrar-menu').click(function(){
        $('#menu-moviles').animate({
            left: -290
        });
        $('#cerrar-menu').hide();
        $('#abrir-menu').show();
        event.preventDefault();
    });
});