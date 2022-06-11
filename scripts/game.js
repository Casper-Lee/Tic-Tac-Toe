function startNewGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert('Please set custom player names for both players!')
        return;
    }
    gameAreaElement.style.display = 'block'
}

function selectGameField(event){
    event.target.text = 
}