const sounds = ['flamengo','palmeiras', 'corinthians', 'vasco', 'whataheeeeeel']
const link = document.querySelector('a')
const audios = document.querySelectorAll('audio')
const extension = document.querySelector('.extension')
const audioName = document.querySelector('.audio-name')
const conteudo = document.querySelector('.conteudo')


const tt = Array.from(audios)
tt.sort((a, b) => a.id.localeCompare(b.id));



function pararAudio(){
    audios.forEach(sound => {
        const audio = document.getElementById(sound.id)
        if (audio) {
            audio.pause()
            audio.currentTime = 0
        }
    })
}


tt.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    let audioName = sound.textContent.split('/')[0]
    btn.innerText = audioName
    btn.addEventListener('click', () => {
        pararAudio()
        document.getElementById(sound.id).play()
    })
    document.querySelector('.buttons').appendChild(btn)
})


audios.forEach(audioDownload => {
    audioDownload.onplay = (e) => {
         let alfa = e.target.src.split('.')
         let beta = alfa[alfa.length - 1]
         let gama = e.target.textContent.split('/')
         let omega = gama[0]
         console.log(beta, omega)
        // audioName.innerText = omega
        extension.innerText = beta

        // link.innerText = `Download ${omega} em ${beta}`
        audioName.innerText = omega
        conteudo.textContent = gama[1]

        link.href = e.target.src
        link.download = e.target.textContent
        link.classList.remove('disabled')
    }
})

conteudo.onclick = (e) => {
    const texto = document.querySelector('.qq')
    const textoConteudoInicial = texto.textContent
    if(e.target.textContent){
    navigator.clipboard.writeText(e.target.textContent);
    texto.textContent = "Copiado!"
    setTimeout(()=>{
        texto.textContent = textoConteudoInicial
    },500)
    }else{
        alert('eee')
    }
}