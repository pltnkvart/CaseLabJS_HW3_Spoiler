let button = document.getElementById('myBtn');
let spoiler = document.getElementById('spoiler');

button.addEventListener("click", open);
button.addEventListener("keydown", keyPress);

function open(){
    spoiler.classList.toggle("closed");
}

function keyPress(e){
    if(e.keyCode == 27){
        spoiler.classList.add("closed");
    }
}