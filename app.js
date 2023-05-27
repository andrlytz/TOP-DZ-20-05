let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');

let out1 = document.getElementById('out1')

let but1 = document.getElementById('but1')

but1.onclick = f1

function f1() {
    if ( inp1.value && inp2.value && inp3.value) {
        let result = inp1.value * inp2.value * inp3.value
        out1.innerText = 'Стоимость фундамента составит '+result+' рублей' 
    }
    else {
        alert ('Не могу посчитать, заполните все строки')
    }
    console.log(inp1.value)
}

let inp4 = document.getElementById('inp4')

let out2 = document.getElementById('out2')

let but2 = document.getElementById('but2')

but2.onclick = f2 

function f2() {
    if (inp4.value) {
        let result = inp4.value * 1500
        if (inp4.value >= 100) {
            if (inp4.value >= 200) {
                if (inp4.value >= 300) {
                    out2.innerText = 'Стоимость досок за '+inp4.value+' штук составит: '+result*0.8+' рублей. Ваша скидка 20%. Цена без скидки: '+result+' рублей'
                }
                else {
                    out2.innerText = 'Стоимость досок за '+inp4.value+' штук составит: '+result*0.9+' рублей. Ваша скидка 10%. Цена без скидки: '+result+' рублей'
                }
            }
            else {
                out2.innerText = 'Стоимость досок за '+inp4.value+' штук составит: '+result*0.95+' рублей. Ваша скидка 5%. Цена без скидки: '+result+' рублей'
            }
        }
        else {
            out2.innerText = 'Стоимость досок за '+inp4.value+' штук составит: '+result+' рублей. Данное количество не подходит под условия акции!'
        }
    }
    else {
        alert ('Не могу посчитать, заполните все строки')
    }
}