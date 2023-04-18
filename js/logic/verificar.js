import { descricao, data, tipo, valor } from "../model/Elementos.js";
import modal from "../model/Modal.js";
import carregar from "./carregar.js";

export default function verificar(type) {
    if (type === 'gravar') {
        if ([data, descricao, tipo, valor].some(campo => campo.value.length === 0)) {
            modal('alerta', 'Preencha todos os campos!');
            return false;
        } else if (valor.value.charAt(0) === '0') {
            modal('alerta', 'O valor não pode começar com 0!');
            return false;
        } else {
            return true;
        };
    };
    if (type === 'procurar') {
        if ([data, tipo, descricao, valor].every(campo => campo.value.length === 0)) {
            carregar();
            modal('alerta', 'Preencha algum campo.');
            return false;
        } else {
            return true;
        };
    };
};