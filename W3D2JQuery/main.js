

$(document).ready(function () {



    let timer;
    let t;
    function fun() {
        t = setInterval(grow, 250);

    }
    function start() {
        timer = setTimeout(fun, parseInt($("input[name='interval']").val()));
    }
    function stop() {
        clearTimeout(timer);
    }

    function grow() {
        let size = parseInt($(".circlee").height()) + parseInt($("input[name='growth']").val());
        $(".circlee").height(size);
        $(".circlee").width(size);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function draw() {

        let size = parseInt($("input[name='growth']").val());

        let a = $("<div class='circlee' id='cir'></div>");

        $(".circle").append(a);
        $("div#cir").css("background-color", "green");
        $("div#cir").css("width", size);
        $("div#cir").css("height", size);
        $("div#cir").css("opacity", 1);
        $("div#cir").css("top", getRandomInt(size));
        $("div#cir").css("left", getRandomInt(size));

        $("div#cir").click(function () {
            this.remove();
        });
        $("div#cir")
            .on("mouseenter", function () {
                $(this).css("opacity", 0.5);
            })
            .on("mouseleave", function () {
                $(this).css("opacity", 1);
            });

    }

    $("#for").submit(function (event) {
        event.preventDefault();
        //for (let i = 0; i < parseInt($("input[name='count']")).val(); i++) {
            draw();
        //}
        start();
        //timer = setTimeout(fun, parseInt($("input[name='interval']").val()));
        //stop();

    });


})