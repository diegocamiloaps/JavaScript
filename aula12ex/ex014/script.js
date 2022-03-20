function carregar () {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
      msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12){
        //bom dia!
        img.src = 'imagens/manha2.png'
        document.body.style.background = '#FFC346'
    } else if (hora >= 12 && hora <=18) {
        //boa tarde!
        img.src = 'imagens/tarde2.png'
        document.body.style.background = '#FD925D'
    }else {
        //boa noite!
        img.src = 'imagens/noite2.png'
        document.body.style.background = '#0D0A0A'
    }
}


