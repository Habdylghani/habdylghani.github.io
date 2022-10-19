var maze = (function () {

    function init() {
        status("Click the \"S\" to begin.");
        $('#start').on("click", start);
    }
    function start() {
        $('#maze .boundary').removeClass("youlose");
        $('#maze').on('mouseenter', '.boundary', function () {

            $('#maze .boundary').addClass("youlose");
            status("<b>You lose!</b>");
            $('#end').off('click');
            setTimeout(init, 1500);
        });
        $('#maze').on('mouseleave', function () {
            $('#end').off('click');
            status("<b>out of maze</b>")
            setTimeout(init, 1500);
        });

        $('#end').on("click", function () {
            status("<b>You win!</b>");
            $('#maze').off("mouseenter");
            setTimeout(init, 2000);
        });

    }
    function status(gameStatus) {
        $('#status').html(gameStatus);
    }
    return {
        init: init,
        start: start,
        status: status
    };
})();

$(function () {
    maze.init();
});






