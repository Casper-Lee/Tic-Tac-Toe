function openPlayerConfig (event) {
    editedPlayer = +event.target.dataset.playerid //+'1' => 1
    playerConfigOverlayElement.style.display ='block'
    backdropElement.style.display = 'block'
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display ='none'
    backdropElement.style.display = 'none'
    formElement.firstElementChild.classList.remove('error')
    errorOutputElement.textContent = ''
    formElement.firstElementChild.lastElementChild.value = ''
}

function savePlayerConfig(event){
    event.preventDefault() //prevents the browser default behavior of sending a request automatically
    const formData = new FormData(event.target)
    const enteredPlayername = formData.get('playername').trim() //'    Max boi' => 'Max boi'

    if(!enteredPlayername) { //enteredPlayername === ''
        event.target.firstElementChild.classList.add('error')
        errorOutputElement.textContent = 'Please enter a valid name!'
        return
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data')
    updatedPlayerDataElement.children[1].textContent = enteredPlayername

    players[editedPlayer - 1].name = enteredPlayername

    closePlayerConfig();
}