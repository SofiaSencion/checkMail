// 1) Se precisa un algoritmo que reciba por prompt el mail del usuario y que valide si este mail contiene un "@". Para ello se precisará un bucle que pueda recorrer cada caracter de este valor y que en base a una condición, refleje como alerta si "Es un mail válido" o "Es un mail inválido", en el caso de que no contenga "@".

let mail = prompt("Escriba su mail")
let accArrobas = 0

for(let i = 0; i < mail.length; i++){
    if(mail[i] === "@"){
        accArrobas++
    }
}

if(accArrobas === 1){
    alert("Es un mail válido")
} else {
    alert ("Es un mail inválido")
}