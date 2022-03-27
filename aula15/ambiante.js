let num = [5, 8, 2, 6, 3];
num.sort()
console.log (num)
console.log(`A array tem ${num.length} posições`)
console.log(`O primeiro valor do vector e ${num[0]} e o ultimo valor e ${num[4]}`)

let pos = num.indexOf(3)

if (pos == -1) {
    console.log(`Valor nao encontrado`)
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}

