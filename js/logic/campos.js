export default function campo(id, opcoes) {
    const elemento = document.querySelector(id);
    dados(elemento, opcoes);
};

function dados(elemento, opcoes) {
    opcoes.forEach((optionText, index) => {
        const novo_elemento = document.createElement("option");
        novo_elemento.textContent = optionText;
        novo_elemento.value = index + 1;
        elemento.appendChild(novo_elemento);
    });
};