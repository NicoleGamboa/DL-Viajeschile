$(document).ready(function(){
    console.log( "ready!" );

    // alternar entre mostrar y ocultar parrafos asociados a los iconos
    $(".iconos").click(function(){
        $(".parrafo-icono").toggle();
    })
    
    // hacer navegacion al clic -> llevar a seccion de inicio
    $('#navInicio').click(function(event) {
        event.preventDefault();
        document.querySelector('#inicio').scrollIntoView({
            behavior: 'smooth'
        })
    })

    // hacer navegacion al clic -> llevar a seccion de quienesSomos
    $('#navQuienesSomos').click(function(event) {
        event.preventDefault();
        document.querySelector('#quienesSomos').scrollIntoView({
            behavior: 'smooth'
        })
    })
    
    // hacer navegacion al clic -> llevar a seccion de destacados
    $('#navDestacados').click(function(event) {
        event.preventDefault();
        document.querySelector('#destacados').scrollIntoView({
            behavior: 'smooth'
        })
    });
    
    // hacer navegacion al clic -> llevar a seccion de contacto
    $('#navContacto').click(function(event) {
        event.preventDefault();
        document.querySelector('#contacto').scrollIntoView({
            behavior: 'smooth'
        })
    });
    
    // hacer navegacion al clic del botón -> llevar a seccion de contacto
    $('#botonAlerta').click(function(event) {
        event.preventDefault();
        document.querySelector('#contacto').scrollIntoView({
            behavior: 'smooth'
        })
    });

});

