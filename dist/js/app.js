const text = document.getElementById("text");
const container = document.getElementById("container");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const hold = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerHTML = "Breath In";
    container.className = "container grow";
    setTimeout(() => {
        text.innerHTML = "Hold";

        setTimeout(() => {
            text.innerHTML = "Breath Out";
            container.className = "container shrink";
        }, hold);
    }, breathTime)
}

setInterval(breathAnimation, totalTime);