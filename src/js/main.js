const btn = document.querySelector('#send');
const result = document.querySelector('#result');
let enviado = false; // Controle de envio

btn.addEventListener("click", function(e) {
    e.preventDefault();
    /**
     * @function @description 
     * Função anônima que recebe um parâmetro de evento click.
     * 
     * @event e.preventDefault(); @description
     * Método que cancela o envio do formúlario, com o objetivo
     * de manipular o comportamento de envio padrão do navegador.
     * */ 

    if (!enviado) { // Verificação do envio ...
        const altura = document.querySelector('#altura');
        const peso = document.querySelector('#peso');
        /**
        * @constant peso, altura => chamando input do formúlario, e salvando em variáveis
        */

        const valuePeso = peso.value;
        const valueAltura = altura.value;
        /**
        * @constant extraindo das variáveis, o valor do input
        */

        const calculoIMC = valuePeso / (valueAltura * valueAltura);
        const imc = calculoIMC.toFixed(2);
        /**
        * @constant Caulcula os valores da variavel, e amarzena em imc o valor final,
        * utilizando o método que define quantas casa decimais terá.
        */

        function nivelIMC(imc) {
            const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
                'Obesidade grau Ⅰ', 'Obesidade grau Ⅱ', 'Obesidade grau Ⅲ'
            ];

            if (imc >= 39.9) return nivel[5];
            else if (imc >= 34.9) return nivel[4];
            else if (imc >= 29.9) return nivel[3];
            else if (imc >= 24.9) return nivel[2];
            else if (imc >= 18.5) return nivel[1];
            else if (imc < 18.5) return nivel[0];
            else if (isNaN(imc)) return 'inválido!';
        /**
        * @function nivelIMC @description
        * Função com array com os niveis de imc, possui um estrutura de fluxo 
        * com operadores de comparação que retorna o o nive de imc do usuario.
        */
        }

        result.innerHTML += `<h2>Seu IMC é ${imc} <br></br> ${nivelIMC(imc)}</h2>`;
        enviado = true; // Atualiza o envio para true
    }
});

document.getElementById("reset_button").addEventListener("click", function() {
    location.reload();
    /**
     * @function @description 
     * Função anônima que recebe o btn do type reset, que possui um evento
     * de click, location.reload(); que recarrega a URL atual.
     * */ 
});
