function VerificarPorcentagem() {
    // 1. Pegar os valores que o usuário digitou
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultadoHTML = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num1) || isNaN(num2)) {
        resultadoHTML.innerText = "Por favor, digite números válidos! ❌";
        return;
    }

    // 3. Fazer o cálculo
    // Exemplo: quanto num1 representa de num2
    let porcentagem = (num1 / num2) * 100;

    if (porcentagem >= 50) {
        resultadoHTML.style.color="green";
    } else {
        resultadoHTML.style.color="orange"
    }

   // 4. Exibir a mensagem final
    resultadoHTML.innerText = `${num1} é ${porcentagem.toFixed(2)}% de ${num2}`;
    // .toFixed(2) serve para arredondar para 2 casas decimais (ex: 25.50)
}
function LimparCampos() {
    // Limpa os valores dos inputs
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    
    // Limpa o texto do resultado e volta a cor para o padrão (opcional)
    document.getElementById('resultado').innerText = "";
    document.getElementById('resultado').style.color = "black";
}