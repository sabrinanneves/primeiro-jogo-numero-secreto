alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 10;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //parseInt tranforma em numero inteiro. Math randon gera numeros aleatorios.  * 10 + 1 para que ele tenha um numero inteiro e va ate 10
console.log(numeroSecreto);
let chute;
let tentativas = 1; //contador

// enquanto chute não for igual ao n.s.
while(chute != numeroSecreto) {
	chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

	// se chute for igual ao número secreto
	if(chute == numeroSecreto) {
		
		//se  chute for igual ao n.s PARA  e sai do bloco while, indo para o alert fora do bloco
		break;
	
	}

	else {
		if (chute > numeroSecreto) {
			alert(`O número secreto é menor que o ${chute}`);
		}
	else {
			alert(`O número secreto é maior que o ${chute}`);
		}
			tentativas++;
		}
	}

 // o operador ternário.
	let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
	alert(`Vc acertou! o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} `);

		//if(tentativas > 1) {
		
			//juntarmos textos com valores de variáveis e até com números diferentes, existem várias maneiras de fazer isso em Javascript , e nós vamos optar por uma que se chama Template Strings
			//alert(`Vc acertou! o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
		//}

		//else {
			//alert(`Vc acertou! o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
		//}

