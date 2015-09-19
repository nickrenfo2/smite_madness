$(document).ready(function(){
    
    $('#leftMenuButton').click(toggleMenu);
    $('.godSelectOption').click(function() {
        $(this).toggleClass("deselected")
    });
    $('.madnessOption').click(function() {
        $(this).toggleClass("deselected")
    });
    $('#selectnogods').click(function() {
        $('.godSelectOption').each(function() {
            $(this).addClass("deselected");
        });
    });
    $('#selectallgods').click(function() {
        $('.godSelectOption').each(function() {
            $(this).removeClass("deselected");
        });
    });
    
    $('#madnessButton').click(function() {log("MADNESS!");});
});

function toggleMenu() {
        $('#leftMenu').animate({width:"toggle"},500);
        $('#innerBodyWrapper').toggleClass("wideBody");
}

function log(txt) {
    $('#log').append(txt+"<br/>");
}