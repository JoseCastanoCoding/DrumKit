
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyPressed = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // this will stop the function from running.
    audio.currentTime = 0; // this will rewind the audio.
    audio.play();
    keyPressed.classList.add("playing");
}

function removeTransition(e) {
    if(e.propertyName != "transform") { // skip it if it's not a transform
        return;
    }
    this.classList.remove("playing");
}

const keysPressed = this.document.querySelectorAll(".key");
keysPressed.forEach(keyPressed => keyPressed.addEventListener("transitionend", removeTransition)) /* listening 
                                                                                                   for all keys */     
window.addEventListener("keydown", playSound)