// _____________ Script Calculadora _____________
let hipotenusa = 0, ladoA = 0, ladoB = 0


// Função referente aos calculos simples da calculadora
let calcualarValor = (tipo, valor) =>{
	if(tipo == 'acao'){
		if(valor == 'c'){
			document.getElementById('resultado').value = ''
			hipotenusa = 0
			ladoA = 0
			ladoB = 0
		}

		if(valor == '+' || valor == '/' || valor == '*' || valor == '-' || valor == '.'){
			document.getElementById('resultado').value += valor
		}

		if(valor == '='){
			var campo_resultado = eval(document.getElementById('resultado').value)
			document.getElementById('resultado').value = campo_resultado
		}
	}
	else if(tipo == 'valor'){
		document.getElementById('resultado').value += valor
	}
}


// Função de verificação e calculo do teorema de Pitágoras
let teoremaPitagoras = (tipo, valor) =>{
	let result = 0

	switch(valor){
		case 'hip':
			hipotenusa = document.getElementById('resultado').value
			document.getElementById('resultado').value = ''
			break
		case 'A':
			ladoA = document.getElementById('resultado').value
			document.getElementById('resultado').value = ''
			break
		case 'B':
			ladoB = document.getElementById('resultado').value
			document.getElementById('resultado').value = ''
			break
		case 'calcular':
			if(((hipotenusa == '' || hipotenusa == 0) && (ladoA == '' || ladoA == 0)) || ((hipotenusa == '' || hipotenusa == 0) && (ladoB == '' || ladoB == 0)) || ((ladoA == '' || ladoA == 0) && (ladoB == '' || ladoB == 0))){
				document.getElementById('aviso').style.opacity = "1"
				setTimeout(function(){
					document.getElementById('aviso').style.opacity = "0"
				}, 4000)
			}
			else{
				if(hipotenusa == '' || hipotenusa == 0){
					result = Math.pow(ladoA, 2) + Math.pow(ladoB, 2)
					result = Math.sqrt(result)
					document.getElementById('resultado').value = result.toFixed(2)
				}
				else if(ladoA == '' || ladoA == 0){
					result = Math.pow(hipotenusa, 2) + Math.pow(ladoB, 2)
					result = Math.sqrt(result)
					document.getElementById('resultado').value = result.toFixed(2)
				}
				else if(ladoB == '' || ladoB == 0){
					result = Math.pow(ladoA, 2) + Math.pow(hipotenusa, 2)
					result = Math.sqrt(result)
					document.getElementById('resultado').value = result.toFixed(2)
				}
			}
			break
	}
}


