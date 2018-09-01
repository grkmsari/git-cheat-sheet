$( document ).ready(function() {
    $('.row').masonry({
        itemSelector : '.col-12'
    });
});

function randomBg() {
    bgArr = ["bg-primary", "bg-info", "bg-danger"];
    return bgArr[1];
}