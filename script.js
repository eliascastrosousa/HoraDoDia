function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    
    if (hora < 12 ){
        imagem.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Agora são ${hora} Horas, Bom dia!`
    }
    else if (hora < 19) {
        imagem.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Agora são ${hora} Horas, Boa Tarde!`
    }
    else if (hora < 24) {
        imagem.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#515154'
        msg.innerHTML = `Agora são ${hora} Horas, Boa noite!`
    }
}