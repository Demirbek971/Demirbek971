let lastKey;

window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.add('playing');
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    if (lastKey === e.keyCode) {
        if (!audio.paused) {
            audio.pause();
        } else {
            audio.currentTime = 0; // qayta o'ynashni boshlash
            audio.play(); // audio faylni ijro etish
        }
    } else {
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => audio.pause());
        audio.currentTime = 0; // qayta o'ynashni boshlash
        audio.play(); // audio faylni ijro etish
    }
    lastKey = e.keyCode;
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));