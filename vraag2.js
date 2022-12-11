$(document).ready(function() {
    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#vraag').val().toLowerCase() === 'kruipen';

        if (ValidEmail === true) {
            $('.valid').css('display', 'block');
            window.location = "vraag2b.html";
        }
        else {
            $('.error').css('display', 'block')
        }
    });
});