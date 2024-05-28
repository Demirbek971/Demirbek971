window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.add('playing');
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));