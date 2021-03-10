var sound;

function preload() {
    sound = loadSound("Music.mp3");
}

function setup() {
    sound.play();
}