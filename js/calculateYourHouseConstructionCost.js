var canvas;

var total, total2, total3;

var sound;

function preload() {
    sound = loadSound("Music.mp3");
}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);

    sound.play();

    text = createElement('h2');

    text2 = createElement('h3');
    button = createButton("Metro");
    button2 = createButton("Urban");
    button3 = createButton("Semi-Urban");

    button4 = createButton("Calculate");

    text3 = createElement('h4');

    text4 = createElement('h2');
    text5 = createElement('h4');
    text6 = createElement('h4');

    text7 = createElement('h2');
    text8 = createElement('h4');
    text9 = createElement('h4');

    text10 = createElement('h2');
    text11 = createElement('h4');
    text12 = createElement('h4');

    text13 = createElement('h2');
    text14 = createElement('h4');
    text15 = createElement('h4');

    text16 = createElement('h2');
    text17 = createElement('h4');
    text18 = createElement('h4');

    text19 = createElement('h2');
    text20 = createElement('h4');
    text21 = createElement('h4');

    text22 = createElement('h2');
    text23 = createElement('h4');
    text24 = createElement('h4');

    text25 = createElement('h2');
    text26 = createElement('h4');
    text27 = createElement('h4');

    text28 = createElement('h2');
    text29 = createElement('h4');
    text30 = createElement('h4');

    text31 = createElement('h2');
    text32 = createElement('h4');
    text33 = createElement('h4');

    text34 = createElement('h3');

    text35 = createElement('h1');
    text36 = createElement('h4');
    text37 = createElement('h4');
    text38 = createElement('h4');
    text39 = createElement('h4');
    text40 = createElement('h4');
    text41 = createElement('h4');
    text42 = createElement('h4');
    text43 = createElement('h4');
    text44 = createElement('h4');
    text45 = createElement('h4');
    text46 = createElement('h3');

    input = createInput("");
}

function draw() {
    background("#20B2AA");

    text35.html("Calulate your House Construction Cost");
    text35.position(displayWidth / 2 - 300, displayHeight / 2 + 230);
    text35.style("font-family", "Berlin Sans FB");
    text35.style("textDecoration", "underline");

    text2.html("Please select the location of the plot:");
    text2.position(200, displayHeight / 2 + 300);
    text2.style("font-family", "Courier New");
    text2.style("textDecoration", "underline");

    button.position(650, displayHeight / 2 + 315);
    button.style("font-family", "Berlin Sans FB");
    button.style("background-color", "crimson");
    button.style("color", "#000000");
    button.style("width", "160px");
    button.style("height", "30px");
    button.style("font-size", "22px");

    button2.position(830, displayHeight / 2 + 315);
    button2.style("font-family", "Berlin Sans FB");
    button2.style("background-color", "crimson");
    button2.style("color", "#000000");
    button2.style("width", "160px");
    button2.style("height", "30px");
    button2.style("font-size", "22px");

    button3.position(1010, displayHeight / 2 + 315);
    button3.style("font-family", "Berlin Sans FB");
    button3.style("background-color", "crimson");
    button3.style("color", "#000000");
    button3.style("width", "160px");
    button3.style("height", "30px");
    button3.style("font-size", "22px");

    button.mousePressed(() => {
        text34.html("Enter your plot area(in sq.ft) : ");
        text34.position(displayWidth / 2 - 280, displayHeight / 2 + 360);
        text34.style("font-family", "Courier New");
        text34.style("textDecoration", "underline");

        input.position(displayWidth / 2 + 90, displayHeight / 2 + 380);
        input.style("font-family", "Comic Sans MS");
        input.style("background-color", "#cd00cd");
        input.style("color", "#000000");

        button4.position(displayWidth / 2 - 125, displayHeight / 2 + 410);
        button4.style("font-family", "Berlin Sans FB");
        button4.style("background-color", "crimson");
        button4.style("color", "#000000");
        button4.style("width", "200px");
        button4.style("height", "40px");
        button4.style("font-size", "22px");

        button4.mousePressed(() => {
            if (input.value()) {
                text36.html("Foundation Cost(including excavation and construction upto plinth) : Rs." + input.value() * 195);
                text36.position(displayWidth / 2 - 350, displayHeight / 2 + 450);
                text36.style("font-family", "Courier New");
                text36.style("textDecoration", "underline");

                text37.html("Superstructure in brickwork : Rs." + input.value() * 375);
                text37.position(displayWidth / 2 - 170, displayHeight / 2 + 470);
                text37.style("font-family", "Courier New");
                text37.style("textDecoration", "underline");

                text38.html("Roofing including water proofing : Rs." + input.value() * 255);
                text38.position(displayWidth / 2 - 200, displayHeight / 2 + 490);
                text38.style("font-family", "Courier New");
                text38.style("textDecoration", "underline");

                text39.html("Flooring : Rs." + input.value() * 90);
                text39.position(displayWidth / 2 - 120, displayHeight / 2 + 510);
                text39.style("font-family", "Courier New");
                text39.style("textDecoration", "underline");

                text40.html("Wood Work : Rs." + input.value() * 195);
                text40.position(displayWidth / 2 - 125, displayHeight / 2 + 530);
                text40.style("font-family", "Courier New");
                text40.style("textDecoration", "underline");

                text41.html("Internal Finishes : Rs." + input.value() * 90);
                text41.position(displayWidth / 2 - 120, displayHeight / 2 + 550);
                text41.style("font-family", "Courier New");
                text41.style("textDecoration", "underline");

                text42.html("External Finishes : Rs." + input.value() * 45);
                text42.position(displayWidth / 2 - 140, displayHeight / 2 + 570);
                text42.style("font-family", "Courier New");
                text42.style("textDecoration", "underline");

                text43.html("Water Supply : Rs." + input.value() * 60);
                text43.position(displayWidth / 2 - 140, displayHeight / 2 + 590);
                text43.style("font-family", "Courier New");
                text43.style("textDecoration", "underline");

                text44.html("Sanitary Work : Rs." + input.value() * 120);
                text44.position(displayWidth / 2 - 140, displayHeight / 2 + 610);
                text44.style("font-family", "Courier New");
                text44.style("textDecoration", "underline");

                text45.html("Electrification : Rs." + input.value() * 75);
                text45.position(displayWidth / 2 - 150, displayHeight / 2 + 630);
                text45.style("font-family", "Courier New");
                text45.style("textDecoration", "underline");

                total = input.value() * 195 + input.value() * 375 + input.value() * 255 + input.value() * 90 + input.value() * 195 + input.value() * 90 + input.value() * 45 + input.value() * 60 + input.value() * 120 + input.value() * 75;

                text46.html("Total Cost : Rs." + total);
                text46.position(displayWidth / 2 - 150, displayHeight / 2 + 670);
                text46.style("font-family", "Courier New");
                text46.style("textDecoration", "underline");
                text46.style("background-color", "#8e6bbd");
            }
        })
    })

    button2.mousePressed(() => {
        text34.html("Enter your plot area(in sq.ft) : ");
        text34.position(displayWidth / 2 - 280, displayHeight / 2 + 360);
        text34.style("font-family", "Courier New");
        text34.style("textDecoration", "underline");

        input.position(displayWidth / 2 + 90, displayHeight / 2 + 380);
        input.style("font-family", "Comic Sans MS");
        input.style("background-color", "#cd00cd");
        input.style("color", "#000000");

        button4.position(displayWidth / 2 - 125, displayHeight / 2 + 410);
        button4.style("font-family", "Berlin Sans FB");
        button4.style("background-color", "crimson");
        button4.style("color", "#000000");
        button4.style("width", "200px");
        button4.style("height", "40px");
        button4.style("font-size", "22px");

        button4.mousePressed(() => {
            if (input.value()) {
                text36.html("Foundation Cost(including excavation and construction upto plinth) : Rs." + input.value() * 156);
                text36.position(displayWidth / 2 - 350, displayHeight / 2 + 450);
                text36.style("font-family", "Courier New");
                text36.style("textDecoration", "underline");

                text37.html("Superstructure in brickwork : Rs." + input.value() * 300);
                text37.position(displayWidth / 2 - 170, displayHeight / 2 + 470);
                text37.style("font-family", "Courier New");
                text37.style("textDecoration", "underline");

                text38.html("Roofing including water proofing : Rs." + input.value() * 204);
                text38.position(displayWidth / 2 - 200, displayHeight / 2 + 490);
                text38.style("font-family", "Courier New");
                text38.style("textDecoration", "underline");

                text39.html("Flooring : Rs." + input.value() * 72);
                text39.position(displayWidth / 2 - 120, displayHeight / 2 + 510);
                text39.style("font-family", "Courier New");
                text39.style("textDecoration", "underline");

                text40.html("Wood Work : Rs." + input.value() * 156);
                text40.position(displayWidth / 2 - 125, displayHeight / 2 + 530);
                text40.style("font-family", "Courier New");
                text40.style("textDecoration", "underline");

                text41.html("Internal Finishes : Rs." + input.value() * 72);
                text41.position(displayWidth / 2 - 120, displayHeight / 2 + 550);
                text41.style("font-family", "Courier New");
                text41.style("textDecoration", "underline");

                text42.html("External Finishes : Rs." + input.value() * 36);
                text42.position(displayWidth / 2 - 140, displayHeight / 2 + 570);
                text42.style("font-family", "Courier New");
                text42.style("textDecoration", "underline");

                text43.html("Water Supply : Rs." + input.value() * 48);
                text43.position(displayWidth / 2 - 140, displayHeight / 2 + 590);
                text43.style("font-family", "Courier New");
                text43.style("textDecoration", "underline");

                text44.html("Sanitary Work : Rs." + input.value() * 96);
                text44.position(displayWidth / 2 - 140, displayHeight / 2 + 610);
                text44.style("font-family", "Courier New");
                text44.style("textDecoration", "underline");

                text45.html("Electrification : Rs." + input.value() * 60);
                text45.position(displayWidth / 2 - 150, displayHeight / 2 + 630);
                text45.style("font-family", "Courier New");
                text45.style("textDecoration", "underline");

                total = input.value() * 156 + input.value() * 300 + input.value() * 204 + input.value() * 72 + input.value() * 156 + input.value() * 72 + input.value() * 36 + input.value() * 48 + input.value() * 96 + input.value() * 60;

                text46.html("Total Cost : Rs." + total);
                text46.position(displayWidth / 2 - 150, displayHeight / 2 + 670);
                text46.style("font-family", "Courier New");
                text46.style("textDecoration", "underline");
                text46.style("background-color", "#8e6bbd");
            }
        })
    })

    button3.mousePressed(() => {
        text34.html("Enter your plot area(in sq.ft) : ");
        text34.position(displayWidth / 2 - 280, displayHeight / 2 + 360);
        text34.style("font-family", "Courier New");
        text34.style("textDecoration", "underline");

        input.position(displayWidth / 2 + 90, displayHeight / 2 + 380);
        input.style("font-family", "Comic Sans MS");
        input.style("background-color", "#cd00cd");
        input.style("color", "#000000");

        button4.position(displayWidth / 2 - 125, displayHeight / 2 + 410);
        button4.style("font-family", "Berlin Sans FB");
        button4.style("background-color", "crimson");
        button4.style("color", "#000000");
        button4.style("width", "200px");
        button4.style("height", "40px");
        button4.style("font-size", "22px");

        button4.mousePressed(() => {
            if (input.value()) {
                text36.html("Foundation Cost(including excavation and construction upto plinth) : Rs." + input.value() * 104);
                text36.position(displayWidth / 2 - 350, displayHeight / 2 + 450);
                text36.style("font-family", "Courier New");
                text36.style("textDecoration", "underline");

                text37.html("Superstructure in brickwork : Rs." + input.value() * 200);
                text37.position(displayWidth / 2 - 170, displayHeight / 2 + 470);
                text37.style("font-family", "Courier New");
                text37.style("textDecoration", "underline");

                text38.html("Roofing including water proofing : Rs." + input.value() * 136);
                text38.position(displayWidth / 2 - 200, displayHeight / 2 + 490);
                text38.style("font-family", "Courier New");
                text38.style("textDecoration", "underline");

                text39.html("Flooring : Rs." + input.value() * 48);
                text39.position(displayWidth / 2 - 120, displayHeight / 2 + 510);
                text39.style("font-family", "Courier New");
                text39.style("textDecoration", "underline");

                text40.html("Wood Work : Rs." + input.value() * 104);
                text40.position(displayWidth / 2 - 125, displayHeight / 2 + 530);
                text40.style("font-family", "Courier New");
                text40.style("textDecoration", "underline");

                text41.html("Internal Finishes : Rs." + input.value() * 48);
                text41.position(displayWidth / 2 - 120, displayHeight / 2 + 550);
                text41.style("font-family", "Courier New");
                text41.style("textDecoration", "underline");

                text42.html("External Finishes : Rs." + input.value() * 24);
                text42.position(displayWidth / 2 - 140, displayHeight / 2 + 570);
                text42.style("font-family", "Courier New");
                text42.style("textDecoration", "underline");

                text43.html("Water Supply : Rs." + input.value() * 32);
                text43.position(displayWidth / 2 - 140, displayHeight / 2 + 590);
                text43.style("font-family", "Courier New");
                text43.style("textDecoration", "underline");

                text44.html("Sanitary Work : Rs." + input.value() * 64);
                text44.position(displayWidth / 2 - 140, displayHeight / 2 + 610);
                text44.style("font-family", "Courier New");
                text44.style("textDecoration", "underline");

                text45.html("Electrification : Rs." + input.value() * 40);
                text45.position(displayWidth / 2 - 150, displayHeight / 2 + 630);
                text45.style("font-family", "Courier New");
                text45.style("textDecoration", "underline");

                total = input.value() * 104 + input.value() * 200 + input.value() * 136 + input.value() * 48 + input.value() * 104 + input.value() * 48 + input.value() * 24 + input.value() * 32 + input.value() * 64 + input.value() * 40;

                text46.html("Total Cost : Rs." + total);
                text46.position(displayWidth / 2 - 150, displayHeight / 2 + 670);
                text46.style("font-family", "Courier New");
                text46.style("textDecoration", "underline");
                text46.style("background-color", "#8e6bbd");
            }
        })
    })
}