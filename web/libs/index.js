let settings;

let fireworks = [];
let gravity;
let wind;

function setup() {

    let urlParams = new URLSearchParams(location.search);
    let options = JSON.parse(urlParams.get('options'));
    settings = new Settings(options)
    console.log(settings)

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
    if (settings.get('fireworks', 'enabled')) {
        if (random(1) < 0.075) {
            fireworks.push(new Firework(settings.get('fireworks', 'heartOnly'), settings.get('fireworks', 'noHeart')));
        }
        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].show();
            if (fireworks[i].isSpent()) {
                fireworks.splice(i, 1);
            }
        }
    }

}