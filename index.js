
let drums = document.querySelectorAll(".drum");

drums.forEach(drum => drum.addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;

    switchDrum(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    setTimeout(buttonAnimationRemove, 350, buttonInnerHTML);    
}));

document.addEventListener("keydown", event => 
{
    switchDrum(event.key);
    buttonAnimation(event.key);
    setTimeout(buttonAnimationRemove, 350, event.key);
});

function switchDrum(eventCase) {
    switch (eventCase) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey)
{
    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add("pressed");
}

function buttonAnimationRemove(currentKey)
{
    let inactiveButton = document.querySelector(`.${currentKey}`);
    inactiveButton.classList.remove("pressed");
}