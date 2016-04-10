document.getElementsByClassName('enter-button')[0].addEventListener("click", function (event) {
    var l = document.getElementsByClassName("left-side")[0],
        r = document.getElementsByClassName("right-side")[0],
        effect = 'slide',
        duration = 700;
    $(l).toggle(effect, {direction: "left"}, duration);
    $(r).toggle(effect, {direction: "right"}, duration);
    renderTimeLineView();
});

function renderTimeLineView() {
    var div = document.getElementsByClassName("viz-page");
}