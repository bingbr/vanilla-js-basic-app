import Despesa from '../model/Despesa.js';
import Dados from '../model/Dados.js';
import verificar from './verificar.js';
import { descricao, data, tipo, valor } from '../model/Elementos.js';
import modal from '../model/Modal.js';

window.gravar = gravar;
export default function gravar() {
    if (verificar('gravar')) {
        new Dados().save(new Despesa(data.value, tipo.value, descricao.value, valor.value));
        modal('info', 'Salvo com sucesso!');
        limpar();
    };
};

export function limpar() {
    data.value = '';
    tipo.value = '';
    descricao.value = '';
    valor.value = '';
};