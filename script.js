// setTimeout
let countdownTimeout;

startTimer = () => {
    const seconds = parseInt(document.getElementById('timeout').value);

    if (isNaN(seconds) || seconds <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    clearTimeout(countdownTimeout);
    document.getElementById('timeout').value = '';
    countdown = (remainingTime) => {
        if (remainingTime <= 0) {
            alert('Finish');
        } else {
            console.log(remainingTime);
            countdownTimeout = setTimeout(() => countdown(remainingTime - 1), 1000);
        }

    }

    countdown(seconds);
}

clearTimer = () => {
    clearTimeout(countdownTimeout);
    alert('Finish');
}

// setInterval
let animationInterval;

startAnimation = () => {
    const textElement = document.getElementById('animatedText');
    let visible = true;

    animationInterval = setInterval(() => {
        textElement.style.opacity = visible ? '0' : '1';
        visible = !visible;
    },1000);
}

clearAnimation = () => {
    clearInterval(animationInterval);
    document.getElementById("animatedText").style.opacity = '1';
}

window.onload = startAnimation;