function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#626e41'
    } else if ( hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#fe5d02'
    } else {
        // Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#152933'

    }
}








/*function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new data()
var hora = data.getH
}*/