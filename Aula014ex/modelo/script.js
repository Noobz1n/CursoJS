function gerartabu() {
    let num = document.getElementById('numtab')
    let sel = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('[ERRO] Por favor digite um numero!')
    } else {
        let n = Number(num.value)
        let c = 1
        sel.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            sel.appendChild(item)
            c++
        }
    }
}