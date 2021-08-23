//Desafio: 
/*const idade = 17

//Verificar se a pessoa é maior que 18 anos
//se sim, deixar entrar, se não, bloquear a entrada.

if(idade >= 18){
    console.log('Deixe entrar')
} else{
    console.log('Bloquear entrada')
}

//se a pessoa tiver 17 anos

if(idade === 17)
  console.log('Voltar quando tiver 18 anos')



/*======================================
      OPERADORES LÓGICOS
      
    && "E" As duas condições devem ser verdadeiras
        para a condição final seja verdadeira.
    || "OU" Uma das condições deve ser verdadeira
        para que a condição final seja verdadeira.
    !   "NÃO" nega uma condição.    
 ==================================================*/   
    
 /*const idade = 18

 //Verificar se a pessoa é maior que 18 anos
 //se sim, deixar entrar, se não, bloquear a entrada.
 
 if(!(idade >= 18) || idade === 17) {
    console.log('Bloquear entrada')

 } else{
     console.log('Deixe entrar')
}

=====================================================
     DESAFIO 1
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa*/

/*const nome = 'Gabriel'
const peso = 90
const altura = 1.87

const imc = peso / (altura*altura);

//SE o IMC maior ou igual a 30: Carlos você está acima do peso;

if(imc >= 30 ){
    console.log('Gabriel, voce está acima do peso')
} else{
    console.log('Gabriel, voce não está acima do peso')

}
 
*/

//                  DESAFIO 2

//Cálculo de aposentadoria
//Crie um programa para calcular a aposentadoria de uma pessoa.
//Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)
//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;

/*const nome = 'Silvana'
const sexo = 'F'
const idade = 48;
const contribuição = 23;

//Utilizando a regra 85-95  a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, 
//e da mulher de no mínimo 85 anos na soma;
//No caso, é uma mulher, então:

if(idade + contribuição >=85){
    console.log('Silvana, voce pode se aposentar!')
}else{
    console.log('Silvana, voce não pode se aposentar!')
} */

//DESAFIO 3============================================

const nome = 'Silvana'
const sexo = 'F'
const idade = 48;
const contribuicao = 23;

const CalculoContribuicao = idade + contribuicao


const HomempodeAposentar = sexo == 'M' && constribuicao >= 35 && CalculoContribuicao >=95
const MulherpodeAposentar = sexo == 'F' && contribuicao >= 25 && CalculoContribuicao >=85

if(HomempodeAposentar || MulherpodeAposentar){
    console.log(`${nome}, voce pode se aposentar!`)
} else{
    console.log(`${nome}, voce não pode se aposentar!`)
}
    




























/*console.log(5 == 5 && 6==6) //true
console.log(5 == 5 && 6 != 6) //false

console.log(5 == 5 || 6==6) //true
console.log(5 == 5 || 6 != 6) //true
 
console.log(!(5 > 6) ) //true
console.log(!(5 < 6) ) //false*/