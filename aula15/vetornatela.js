let valores = [8, 4, 2, 9, 7, 1]
valores.sort()

//Estrutura normal
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)   
}
*/

//Estrutura Simplificada ecmaScript
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
}




