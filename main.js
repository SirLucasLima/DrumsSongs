function playSong (audioSelector) {
    //audio selector - prop para selecionar a classname do audio
    const element = document.querySelector(audioSelector);
    
    //if e else - para caso alguém use a function 'playSong' de maneira inapropriada
    if  (element != null && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('Element is not found or invalid selector.')
    }
}

//querySelectorAll('.key') - para selecionar todos com classname 'key'
const keyList = document.querySelectorAll('.key');

//contador para repedir o codigo até chegar no 'length/tamanho' máximo de intens 
for (let counter = 0; counter < keyList.length; counter++) {

    const key = keyList[counter];
    const instrumento = key.classList[1];
    const idAudio = `#song_${instrumento}`; //template string

    key.onclick = function () {
        playSong(idAudio);
    }

    //para usar o app com teclas space e enter
    key.onkeydown = (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            key.classList.add('active')
        }
    }
    
    key.onkeyup = (e) => {
        key.classList.remove('active')
    }

}
