function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('ano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
       alert('[ERROR] Verifique os dados novamente')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           genero = 'Homem'
           if (idade >= 0 && idade <= 10) {
               //criança
               img.setAttribute('src', 'foto-bebe-m.png') 
           }
            else if (idade >= 11 && idade <= 17) {
                //adolescente
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if (idade >= 18 && idade <= 59) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else {
               //idoso
               img.setAttribute('src', 'foto-idoso-m.png') 
            }
       } else {
            genero = 'Feminino'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }
             else if (idade >= 11 && idade <= 17) {
                 //adolescente
                 img.setAttribute('src', 'foto-jovem-f.png')
             }
             else if (idade >= 18 && idade <= 59) {
                 //adulto
                 img.setAttribute('src', 'foto-adulto-f.png')
             }
             else {
                //idoso 
                img.setAttribute('src', 'foto-idoso-f.png')
             }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
       res.appendChild(img)
   }
}