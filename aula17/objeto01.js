let amigo = {Nome: 'Diego',
 Sobrenome: 'Camilo Chiarelotto',
 Sexo: 'M',
 Peso: 75.4,//Peso fora das aspas para a soma correta
engordar(p=0){
    console.log('Engordou')
    this.Peso += p}   
}
amigo.engordar(2)
console.log(`O aluno ${amigo.Nome,amigo.Sobrenome} pesou ${amigo.Peso} Kg`)

