document.addEventListener("DOMContentLoaded", function () {
    const botaoContato = document.getElementById("botao_contato");

    botaoContato.addEventListener("click", function () {
        const nome = document.getElementById("input_contato").value.trim();
        const telefone1 = document.getElementById("input_telefone").value.trim();
        const telefone2 = document.getElementById("input_telefone2").value.trim();

        if (!nome || !telefone1) {
            alert("Por favor, preencha ao menos o nome e o telefone principal.");
            return;
        }

        const tabela = document.getElementById("tabela_contato");
        const novaLinha = tabela.insertRow();

        const celulaNome = novaLinha.insertCell(0);
        const celulaTelefone1 = novaLinha.insertCell(1);
        const celulaTelefone2 = novaLinha.insertCell(2);

        celulaNome.textContent = nome;
        celulaTelefone1.textContent = telefone1;
        celulaTelefone2.textContent = telefone2;

        // Limpar os campos após adicionar
        document.getElementById("input_contato").value = "";
        document.getElementById("input_telefone").value = "";
        document.getElementById("input_telefone2").value = "";
    });
});