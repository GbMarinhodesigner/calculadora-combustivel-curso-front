const etanol = document.querySelector('#etanol');
const gasolina = document.querySelector('#gasolina');
const calcular = document.querySelector('#calcular');
const infoResultado = document.querySelector('#info-resultado');


//console.log(etanol);
//console.log(gasolina);
//console.log(calcular);
//console.log(resultado);

function calcularCombustivel() {
    //console.log('função');

    
    
    if (etanol.value != '' && gasolina.value != '') {
        
        let valorEtanol = parseFloat(etanol.value);
        let valorGasolina = parseFloat(gasolina.value);
        
        console.log(valorEtanol);
        console.log(valorGasolina);


        let resultado = valorEtanol / valorGasolina;
        let saida = '';
        console.log(resultado);

        if (resultado < 0.7) {
            //console.log('Abasteça com alcool');
            saida = 'Abasteça com álcool';

        }
        else {
            // console.log('Abasteça com gasolina');

            saida = 'Abasteça com gasolina'
        }

        infoResultado.innerHTML = saida;

    }
    else{
        alert('Preencha todos os campos')
    }
}

calcular.addEventListener('click', calcularCombustivel);