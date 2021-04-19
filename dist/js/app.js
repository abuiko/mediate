const text = document.getElementById("text");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const hold = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerHTML = "Breath In";

    setTimeout(() => {
        text.innerHTML = "Hold";

        setTimeout(() => {
            text.innerHTML = "Breath Out";
        }, hold);
    }, breathTime)
}

setInterval(breathAnimation, totalTime);