let currentLight = 0;
let lights = ["red", "yellow", "green"];
let messages = ["STOP", "WAIT", "GO"];
let time = 5;
let interval = null;

function changeLight() {

    lights.forEach(function(light) {
        document.getElementById(light).classList.remove("active");
    });

    document.getElementById(lights[currentLight]).classList.add("active");

    document.getElementById("message").innerText =
        messages[currentLight];
        // Control car movement

let road = document.getElementById("road");

if (currentLight === 2) {
    road.classList.add("go");
} else {
    road.classList.remove("go");
}

    time = 5;
    document.getElementById("timer").innerText = time;
}

function startSignal() {

    if (interval !== null) return;

    changeLight();

    interval = setInterval(function() {

        time--;

        document.getElementById("timer").innerText = time;

        if (time <= 0) {
            currentLight = (currentLight + 1) % 3;
            changeLight();
        }

    }, 1000);
}

function stopSignal() {
    clearInterval(interval);
    interval = null;
}

function resetSignal() {
    stopSignal();
    currentLight = 0;
    changeLight();
}