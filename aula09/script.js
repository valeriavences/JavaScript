function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = 'fotos/fotomanha.jpg'
    document.body.style.backgroundColor = '#f1cc507a'
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'fotos/fototarde.jpg'
    document.body.style.backgroundColor = '#d48340'
  } else {
    //BOA NOITE!
    img.src = 'fotos/fotonoite.jpg'
    document.body.style.backgroundColor = '#535352'
  }
}
