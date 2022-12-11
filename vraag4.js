$(document).ready(function() {
    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#vraag').val().toLowerCase() === 'hangen';

        if (ValidEmail === true) {
            $('.valid').css('display', 'block');
            window.location = "vraag4b.html";
        }
        else {
            $('.error').css('display', 'block')
        }
    });
});