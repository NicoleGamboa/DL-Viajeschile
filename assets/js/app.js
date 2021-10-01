$(document).ready(function(){
    console.log( "ready!" );


    $(".iconos").click(function(){
        $("p").toggle();
    })
    
    $('#navInicio').click(function(event) {
        event.preventDefault();
        document.querySelector('#inicio').scrollIntoView({
            behavior: 'smooth'
        })
    })
    
    $('#navQuienesSomos').click(function(event) {
        event.preventDefault();
        document.querySelector('#quienesSomos').scrollIntoView({
            behavior: 'smooth'
        })
    })
    
    $('#navDestacados').click(function(event) {
        event.preventDefault();
        document.querySelector('#destacados').scrollIntoView({
            behavior: 'smooth'
        })
    })
    
    $('#navContacto').click(function(event) {
        event.preventDefault();
        document.querySelector('#contacto').scrollIntoView({
            behavior: 'smooth'
        })
    })
    


});

