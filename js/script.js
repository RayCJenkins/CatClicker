var catTitle1="Frank";
var catTitle2="Jinx";
var timesCatImageClicked = 0;
$('.cat-image').click(function(e) {
    timesCatImageClicked = timesCatImageClicked + 1
    $('.cat-clicked').text('Number of times Cat Image Clicked: ' + timesCatImageClicked);
})

$(document).ready(function() {
    $('.cat-title1').text(catTitle1);
    $('.cat-title2').text(catTitle2);
});
