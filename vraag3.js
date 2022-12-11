$(document).ready(function() {
    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#vraag').val().toLowerCase() === 'springen';

        if (ValidEmail === true) {
            $('.valid').css('display', 'block');
            window.location = "vraag3b.html";
        }
        else {
            $('.error').css('display', 'block')
        }
    });
});