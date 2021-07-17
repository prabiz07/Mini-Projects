window.addEventListener('keydown', playSound);

// Function playSound 
function playSound(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    if(!audio){
        alert(`No assigned sound on letter ${e.key}.`);
    } else{
        audio.play();
        audio.currentTime = 0 // Rewind to start
        key.classList.add('playing'); // Add Class of playing
    }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// Function removeTransition init
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing'); // Remove class playing    
}