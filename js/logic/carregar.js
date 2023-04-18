import Dados from '../model/Dados.js';
import Despesa from '../model/Despesa.js';
import { tabela } from '../model/Elementos.js';

window.carregar = carregar;
export default function carregar() {
    const despesas = new Dados().load();
    carregaTabela(despesas);
};

function carregaTabela(dados) {
    dados.length === 0 ? tabela.style.display = "none" : linha(dados);
}

export function recarregar(filtro) {
    carregaTabela(filtro);
};

function botaoExcluir(id) {
    let botao = document.createElement("button");
    botao.className = "btn btn-danger";
    botao.innerHTML = '<i class="fas fa-ban"></i>';
    botao.id = `item_${id}`;
    botao.addEventListener("click", () => {
        let id = botao.id.replace("item_", "");
        new Dados().delete(parseInt(id, 10));
        carregar();
    });
    return botao;
};

function linha(despesas) {
    const listaDespesas = document.querySelector("#lista-despesas");
    listaDespesas.innerHTML = "";
    despesas.forEach(function (dado) {
        let despesa = new Despesa(dado.data, dado.tipo, dado.descricao, dado.valor, dado.id)
        let linha = listaDespesas.insertRow();
        linha.insertCell(0).textContent = despesa.getData();
        linha.insertCell(1).textContent = despesa.getTipo();
        linha.insertCell(2).textContent = despesa.getDescricao();
        linha.insertCell(3).textContent = despesa.getValor();
        linha.insertCell(4).append(botaoExcluir(despesa.getId()));
        linha.style.textAlign = "center";
    });
};