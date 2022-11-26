function playSong (elementId) {
    document.querySelector(elementId).play();
}

const keyList = document.querySelectorAll('.tecla');

//para
for (let counter = 0; counter < keyList.length; counter++) {

    const tecla = keyList[counter];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        playSong(idAudio);
    }

    tecla.onkeydown = (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('active')
        }
    }

}
