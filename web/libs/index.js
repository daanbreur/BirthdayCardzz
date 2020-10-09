let urlParams, options;

let fireworks = [];
let gravity;
let wind;

function setup() {

    urlParams = new URLSearchParams(location.search);
    options = JSON.parse(urlParams.get('options'));
    console.log(options)

    createCanvas(windowWidth, windowHeight);


    colorMode(RGB);
    stroke(255);
    strokeWeight(4);
    background(0);

    wind = createVector(0, 0);
    gravity = createVector(0, 0.2);
    
}

function draw() {
    background(0, 50);


    // Fireworks
    if (random(1) < 0.075) {
        fireworks.push(new Firework(options.heartOnly));
    }
    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].isSpent()) {
            fireworks.splice(i, 1);
        }
    }

}