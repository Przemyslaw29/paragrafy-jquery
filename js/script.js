'use strict';
$(document).ready(function() {
    $('#goinDown').click(function() {
        $('#container').append($('#container').children().first());
    });
    $('#goinUp').click(function() {
        $('#container').prepend($('#container').children().last());
    });
});