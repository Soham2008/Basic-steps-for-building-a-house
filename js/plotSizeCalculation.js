var canvas;

var input;

var text, text2;

var button;

var total, total2, total3;

var sound;

function preload() {
    sound = loadSound("Music.mp3");
}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);

    sound.play();

    text = createElement('h1');
    text2 = createElement('h2');
    text3 = createElement('h2');
    text4 = createElement('h2');
    text5 = createElement('h2');
    text6 = createElement('h2');
    text7 = createElement('h2');
    text11 = createElement('h2');
    text13 = createElement('h2');

    text8 = createElement('h2');
    text9 = createElement('h2');
    text10 = createElement('h2');
    text11 = createElement('h2');
    text12 = createElement('h2');

    input = createInput('');
    input2 = createInput('');
    input3 = createInput('');
}

function draw() {
    background("#20B2AA");

    text.html("Calculation of Foundation plate");
    text.position(displayWidth / 2 - 220, displayHeight / 2 + 170);
    text.style("font-family", "Berlin Sans FB");
    text.style("textDecoration", "underline");

    text2.html("Size [A]:");
    text2.position(displayWidth / 2 - 220, displayHeight / 2 + 550);
    text2.style("font-family", "Roboto");

    input.position(displayWidth / 2 - 105, displayHeight / 2 + 575);
    input.style("font-family", "Comic Sans MS");
    input.style("background-color", "transparent");

    text3.html("m.");
    text3.position(displayWidth / 2 + 115, displayHeight / 2 + 550);
    text3.style("font-family", "Roboto");

    text4.html("Size [B]:");
    text4.position(displayWidth / 2 - 220, displayHeight / 2 + 600);
    text4.style("font-family", "Roboto");

    input2.position(displayWidth / 2 - 105, displayHeight / 2 + 625);
    input2.style("font-family", "Comic Sans MS");
    input2.style("background-color", "transparent");

    text5.html("m.");
    text5.position(displayWidth / 2 + 115, displayHeight / 2 + 600);
    text5.style("font-family", "Roboto");

    text6.html("Size [C]:");
    text6.position(displayWidth / 2 - 220, displayHeight / 2 + 650);
    text6.style("font-family", "Roboto");

    input3.position(displayWidth / 2 - 105, displayHeight / 2 + 675);
    input3.style("font-family", "Comic Sans MS");
    input3.style("background-color", "transparent");

    text7.html("cm.");
    text7.position(displayWidth / 2 + 115, displayHeight / 2 + 650);
    text7.style("font-family", "Roboto");

    text12.html("Enter all the values and get the data");
    text12.position(displayWidth / 2 - 210, displayHeight / 2 + 450);
    text12.style("font-family", "Berlin Sans FB");
    text12.style("textDecoration", "underline");

    text13.html("");
    text13.position(displayWidth / 2 - 350, displayHeight / 2 + 485);
    text13.style("font-family", "Berlin Sans FB");
    text13.style("textDecoration", "underline");

    var total = 2 * input.value() + 2 * input2.value();
    var total2 = 2 * (input3.value() / 100);
    var total3 = total2 * input.value();
    var total4 = total2 * input2.value();
    var total5 = total3 + total4;

    if (input.value() && input2.value() && input3.value()) {
        text8.html("Plot area : " + input.value() * input2.value() + "m2");
        text8.position(displayWidth / 2 - 150, displayHeight / 2 + 850);
        text8.style("font-family", "Roboto");
        text8.style("color", "#E46B39");
        text8.style("textDecoration", "underline");

        text9.html("Concrete volume : " + Math.round(input.value() * input2.value() * (input3.value() / 100)) + "m3");
        text9.position(displayWidth / 2 - 190, displayHeight / 2 + 875);
        text9.style("font-family", "Roboto");
        text9.style("color", "#E46B39");
        text9.style("textDecoration", "underline");

        text10.html("Perimeter Plate : " + total + "m");
        text10.position(displayWidth / 2 - 170, displayHeight / 2 + 900);
        text10.style("font-family", "Roboto");
        text10.style("color", "#E46B39");
        text10.style("textDecoration", "underline");

        text11.html("Lateral surface area : " + total5 + "m2");
        text11.position(displayWidth / 2 - 190, displayHeight / 2 + 925);
        text11.style("font-family", "Roboto");
        text11.style("color", "#E46B39");
        text11.style("textDecoration", "underline");
    }
}





