import Despesa from "../model/Despesa.js";
import verificar from "./verificar.js";
import carregar, { recarregar } from "./carregar.js";
import { data, tipo, descricao, valor } from "../model/Elementos.js";
import Dados from "../model/Dados.js";
import modal from "../model/Modal.js";

window.procurar = procurar;
export default function procurar() {
    if (verificar('procurar')) {
        let despesa = new Despesa(data.value, tipo.value, descricao.value, valor.value);
        pesquisar(despesa);
    };
};

function pesquisar(despesa) {
    let filtrar = new Dados().load();
    const keys = ['data', 'tipo', 'descricao', 'valor'];
    keys.forEach(key => {
        if (despesa[key] != '') {
            filtrar = filtrar.filter(d => {
                if (key == 'descricao') {
                    return d[key].toLowerCase() == despesa[key].toLowerCase();
                } else {
                    return d[key] == despesa[key];
                }
            });
        };
    });
    if (filtrar.length != 0) {
        recarregar(filtrar);
    } else {
        carregar();
        modal('alerta', 'Ops! Não foi possível encontrar a despesa.');
    }
};