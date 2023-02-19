//encontrar el numero mayor de una lista de numeros en un array

let numeros = [5,10,15,60,8]
let numeromaximo = 0
let tamano = numeros.length

for (let i=0; i<tamano; i++){
if (numeromaximo < numeros[i]) {
  numeromaximo = numeros[i]
 }
}

console.log(numeromaximo)

let maximo = Math.max(5,10,15,60,8)
console.log(maximo)