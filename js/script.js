$(document).ready(function() {
    var text_max = 140;
    $('#textarea_feedback').html(text_max + ' characters remaining');

    $('#posttext').keyup(function(e) {
        var text_length = $('#posttext').val().length;
        var text_remaining = text_max - text_length;

        $('#textarea_feedback').html(text_remaining + ' characters remaining');

    });
});

function validate(form) {
    valid = true;
    if ($('#posttext').val()==""){
        alert("You may not submit an empty post.");
        valid = false;
    }
    return valid;
}