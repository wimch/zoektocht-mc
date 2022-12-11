$(document).ready(function() {
    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#vraag').val().toLowerCase() === 'voetbal';

        if (ValidEmail === true) {
            $('.valid').css('display', 'block');
            window.location = "vraag5b.html";
        }
        else {
            $('.error').css('display', 'block')
        }
    });
});