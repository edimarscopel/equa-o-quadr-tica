var valora = document.getElementById('a')
var valorb = document.getElementById('b')
var valorc = document.getElementById('c')
var res = document.getElementById('res')
var valordec = document.getElementById('dec')




//ao apertar enter, roda função addd
valorc.addEventListener('keyup', function(e){ 
    var key = e.which || e.keyCode;
    if (e.keyCode == 13){
        calcular()
    }
})

function passos(){
    var a = Number(valora.value)
    var b = Number(valorb.value)
    var c = Number(valorc.value)
    var dec = Number(valordec.value)
    var raiz = (b*b) - (4 * a * c)
    var d = Math.sqrt(raiz)
    var x1 = (- b + d) / (2 * a)
    var x2 = (- b - d) / (2 * a)

    var fourac = 4 * a * c
    var baixo = 2 * a

    var cimap = - b + d
    var ciman = - b - d

        if (valordec.value.length == 0) {
        res.innerHTML = `<p><strong>Equação:</strong>ax² + bx + c = 0</p>
        <p><strong>Fórmula Resolvente</strong>: x = <span class="frac"><sup>-b ± √b² - 4.a.c</sup><span></span><sub>2.a</sub></span></p>
        <p>x = <span class="frac"><sup>-(${b}) ± √(${b})² - 4.(${a}).(${c})</sup><span></span><sub>2.(${a})</sub></span></p>
        <p>x = <span class="frac"><sup>-(${b}) ± √${b * b} - (${fourac})</sup><span></span><sub>${baixo}</sub></span></p>
        <p>x = <span class="frac"><sup>-(${b}) ± √${raiz}</sup><span></span><sub>${baixo}</sub></span></p>
        <p>x' = <span class="frac"><sup>-(${b}) + ${d}</sup><span></span><sub>${baixo}</sub></span> ||  x'' = <span class="frac"><sup>-(${b}) - ${d}</sup><span></span><sub>${baixo}</sub></span></p>
        <p>x' = <span class="frac"><sup>${cimap}</sup><span></span><sub>${baixo}</sub></span> || x'' = <span class="frac"><sup>${ciman}</sup><span></span><sub>${baixo}</sub></span></p>
        <p><i>S</i>={${x1}, ${x2}}</p>
        </br>
        <p>Ao alterar algum valor, precione <i>Calcular</i> para gerar novo resultado</p> `
    } else {
        res.innerHTML = `<p><strong>Equação:</strong>ax² + bx + c = 0</p>
        <p><strong>Fórmula Resolvente</strong>: x = <span class="frac"><sup>-b ± √b² - 4.a.c</sup><span></span><sub>2.a</sub></span></p>
        <p>x = <span class="frac"><sup>-(${b}) ± √(${b})² - 4.(${a}).(${c})</sup><span></span><sub>2.(${a})</sub></span></p>
        <p>x = <span class="frac"><sup>-(${b}) ± √${b * b} - (${fourac})</sup><span></span><sub>${baixo}</sub></span></p>
        <p>x = <span class="frac"><sup>-(${b}) ± √${raiz}</sup><span></span><sub>${baixo}</sub></span></p>
        <p>x' = <span class="frac"><sup>-(${b}) + ${d}</sup><span></span><sub>${baixo}</sub></span> ||  x'' = <span class="frac"><sup>-(${b}) - ${d}</sup><span></span><sub>${baixo}</sub></span></p>
        <p>x' = <span class="frac"><sup>${cimap}</sup><span></span><sub>${baixo}</sub></span> || x'' = <span class="frac"><sup>${ciman}</sup><span></span><sub>${baixo}</sub></span></p>
        <p><i>S</i>={${x1.toFixed(dec)}, ${x2.toFixed(dec)}}</p>
        </br>
        <p>Ao alterar algum valor, precione <i>Calcular</i> para gerar novo resultado</p>`
    }
}





function calcular(){
    var a = Number(valora.value)
    var b = Number(valorb.value)
    var c = Number(valorc.value)
    var dec = Number(valordec.value)
    var raiz = (b*b) - (4 * a * c)
    var d = Math.sqrt(raiz)
    var x1 = (- b + d) / (2 * a)
    var x2 = (- b - d) / (2 * a)

    res.innerHTML = ''
    
    if(valora.value.length == 0 || valorb.value.length == 0 || valorc.value.length == 0){
        window.alert('ERRO - informe todosos valores para proseguir')
    } else if (raiz < 0){
        res.innerHTML = `O número informado não possui uma raiz real.`
    } else if (valordec.value.length == 0){
        res.innerHTML = `<i>S</i>={${x1}, ${x2}}`
        res.innerHTML += `</br><input type="button" value="ver passo a passo" onclick="passos()" class="bot">`
        res.innerHTML += `</br><p>Ao alterar algum valor, precione <i>Calcular</i> para gerar novo resultado</p>`

    } else {
        res.innerHTML = `<i>S</i>={${x1.toFixed(dec)}, ${x2.toFixed(dec)}}`
        res.innerHTML += `</br><input type="button" value="ver passo a passo" onclick="passos()" class="bot">`  
        res.innerHTML += `</br><p>Ao alterar algum valor, precione <i>Calcular</i> para gerar novo resultado</p>`

    }

}

function limpar(){
    valora.value = ''
    valorb.value = ''
    valorc.value = ''
    valordec.value = ''
    res.innerHTML = ''

}


