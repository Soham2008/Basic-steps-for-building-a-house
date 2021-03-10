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
    text8 = createElement('h2');
    text9 = createElement('h2');
    text10 = createElement('h2');
    text11 = createElement('h2');
    text12 = createElement('h2');
    text13 = createElement('h2');
    text14 = createElement('h2');
    text15 = createElement('h2');
    text16 = createElement('h2');
    text17 = createElement('h2');
    text18 = createElement('h2');
    text19 = createElement('h2');
    text20 = createElement('h2');
    text21 = createElement('h2');
    text22 = createElement('h2');
    text23 = createElement('h2');
    text24 = createElement('h2');
    text25 = createElement('h2');

    input = createInput('0');
    input2 = createInput('0');
    input3 = createInput('0');
    input4 = createInput('0');
    input5 = createInput('0');
    input6 = createInput('0');
    input7 = createInput('0');
    input8 = createInput('0');
}

function draw() {
    text.html("Conversions");
    text.position(displayWidth / 2 - 100, displayHeight / 2 + 230);
    text.style("font-family", "Berlin Sans FB");
    text.style("textDecoration", "underline");

    text2.html("1) Centigrade(℃)--->Fahrenheit(℉)");
    text2.position(displayWidth / 2 - 500, displayHeight / 2 + 370);
    text2.style("font-family", "Berlin Sans FB");
    text2.style("textDecoration", "underline");

    text3.html("Celsius(℃) : ");
    text3.position(displayWidth / 2 - 400, displayHeight / 2 + 455);
    text3.style("font-family", "Roboto");

    input.position(displayWidth / 2 - 245, displayHeight / 2 + 475);
    input.style("font-family", "Comic Sans MS");
    input.style("background-color", "transparent");

    var total = input.value() * 9 / 5;
    var total17 = total.toFixed(3);
    var total2 = total17 + 32;

    text4.html("Fahrenheit(℉)(Approx.) : " + total2 + "℉");
    text4.position(displayWidth / 2 - 400, displayHeight / 2 + 490);
    text4.style("font-family", "Roboto");



    text5.html("2) Fahrenheit(℉)--->Centigrade(℃)");
    text5.position(displayWidth / 2 - 500, displayHeight / 2 + 590);
    text5.style("font-family", "Berlin Sans FB");
    text5.style("textDecoration", "underline");

    text6.html("Fahrenheit(℉) : ");
    text6.position(displayWidth / 2 - 400, displayHeight / 2 + 675);
    text6.style("font-family", "Roboto");

    input2.position(displayWidth / 2 - 230, displayHeight / 2 + 695);
    input2.style("font-family", "Comic Sans MS");
    input2.style("background-color", "transparent");

    var total3 = input2.value() - 32;
    var total4 = total3 * 5 / 9;
    var total16 = total4.toFixed(3);

    text7.html("Celsius(℃)(Approx.) : " + total16 + "℃");
    text7.position(displayWidth / 2 - 400, displayHeight / 2 + 720);
    text7.style("font-family", "Roboto");



    text8.html("3)Centimeter(cm)--->Inch(in)");
    text8.position(displayWidth / 2 - 500, displayHeight / 2 + 820);
    text8.style("font-family", "Berlin Sans FB");
    text8.style("textDecoration", "underline");

    text9.html("Centimetre(cm) : ");
    text9.position(displayWidth / 2 - 400, displayHeight / 2 + 905);
    text9.style("font-family", "Roboto");

    input3.position(displayWidth / 2 - 215, displayHeight / 2 + 925);
    input3.style("font-family", "Comic Sans MS");
    input3.style("background-color", "transparent");

    var total5 = input3.value() / 2.54;
    var total18 = total5.toFixed(3);

    text10.html("Inch(in)(Approx.) : " + total18 + " in");
    text10.position(displayWidth / 2 - 400, displayHeight / 2 + 950);
    text10.style("font-family", "Roboto");



    text11.html("4)Inch(in)--->Centimeter(cm)");
    text11.position(displayWidth / 2 - 500, displayHeight / 2 + 1050);
    text11.style("font-family", "Berlin Sans FB");
    text11.style("textDecoration", "underline");

    text12.html("Inch(in) : ");
    text12.position(displayWidth / 2 - 375, displayHeight / 2 + 1135);
    text12.style("font-family", "Roboto");

    input4.position(displayWidth / 2 - 245, displayHeight / 2 + 1155);
    input4.style("font-family", "Comic Sans MS");
    input4.style("background-color", "transparent");

    var total6 = input4.value() * 2.54;
    var total15 = total6.toFixed(3);

    text13.html("Centimetre(cm)(Approx.) : " + total15 + " cm");
    text13.position(displayWidth / 2 - 400, displayHeight / 2 + 1180);
    text13.style("font-family", "Roboto");



    text14.html("5)Metre(m)--->Foot(ft)");
    text14.position(displayWidth / 2 - 500, displayHeight / 2 + 1280);
    text14.style("font-family", "Berlin Sans FB");
    text14.style("textDecoration", "underline");

    text15.html("Metre(m) : ");
    text15.position(displayWidth / 2 - 375, displayHeight / 2 + 1365);
    text15.style("font-family", "Roboto");

    input5.position(displayWidth / 2 - 245, displayHeight / 2 + 1385);
    input5.style("font-family", "Comic Sans MS");
    input5.style("background-color", "transparent");

    var total7 = input5.value() * 3.281;
    var total14 = total7.toFixed(3);

    text16.html("Foot(ft)(Approx.) : " + total14 + " ft");
    text16.position(displayWidth / 2 - 375, displayHeight / 2 + 1410);
    text16.style("font-family", "Roboto");



    text17.html("6)Foot(ft)--->Metre(m)");
    text17.position(displayWidth / 2 - 500, displayHeight / 2 + 1510);
    text17.style("font-family", "Berlin Sans FB");
    text17.style("textDecoration", "underline");

    text18.html("Foot(ft) : ");
    text18.position(displayWidth / 2 - 375, displayHeight / 2 + 1595);
    text18.style("font-family", "Roboto");

    input6.position(displayWidth / 2 - 245, displayHeight / 2 + 1615);
    input6.style("font-family", "Comic Sans MS");
    input6.style("background-color", "transparent");

    var total8 = input6.value() / 3.281;
    var total13 = total8.toFixed(3);

    text19.html("Metre(m)(Approx.) : " + total13 + " m");
    text19.position(displayWidth / 2 - 375, displayHeight / 2 + 1640);
    text19.style("font-family", "Roboto");



    text20.html("7)Metre(m)--->Yard(yd)");
    text20.position(displayWidth / 2 - 500, displayHeight / 2 + 1740);
    text20.style("font-family", "Berlin Sans FB");
    text20.style("textDecoration", "underline");

    text21.html("Metre(m) : ");
    text21.position(displayWidth / 2 - 375, displayHeight / 2 + 1825);
    text21.style("font-family", "Roboto");

    input7.position(displayWidth / 2 - 245, displayHeight / 2 + 1845);
    input7.style("background-color", "transparent");

    var total9 = input7.value() * 1.094;
    var total12 = total9.toFixed(3);

    text22.html("Yard(yd)(Approx.) : " + total12 + " yd");
    text22.position(displayWidth / 2 - 400, displayHeight / 2 + 1870);
    text22.style("font-family", "Roboto");



    text23.html("8)Yard(yd)--->Metre(m)");
    text23.position(displayWidth / 2 - 500, displayHeight / 2 + 1970);
    text23.style("font-family", "Berlin Sans FB");
    text23.style("textDecoration", "underline");

    text24.html("Yard(yd) : ");
    text24.position(displayWidth / 2 - 375, displayHeight / 2 + 2055);
    text24.style("font-family", "Roboto");

    input8.position(displayWidth / 2 - 245, displayHeight / 2 + 2075);
    input8.style("background-color", "transparent");

    var total10 = input8.value() / 1.094;
    var total11 = total10.toFixed(3);

    text25.html("Metre(m)(Approx.) : " + total11 + " m");
    text25.position(displayWidth / 2 - 375, displayHeight / 2 + 2100);
    text25.style("font-family", "Roboto");

}