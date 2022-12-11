$(document).ready(function() {
    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#vraag').val().toLowerCase() === 'basket';

        if (ValidEmail === true) {
            $('.valid').css('display', 'block');
            window.location = "vraag1b.html";
        }
        else {
            $('.error').css('display', 'block')
        }
    });
});