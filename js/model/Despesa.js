export default class Despesa {
    constructor(data, tipo, descricao, valor, id) {
        this.data = data;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
        this.id = id;
    };

    tipos = {
        1: "Alimentação",
        2: "Educação",
        3: "Lazer",
        4: "Saúde",
        5: "Transporte"
    };

    getValor() {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(this.valor);
    };

    getData() {
        return this.data.substring(8, 10) + '/' + this.data.substring(5, 7) + '/' + this.data.substring(0, 4);
    };

    getDescricao() {
        return this.descricao;
    };

    getTipo() {
        return this.tipos[this.tipo];
    };

    getId() {
        return this.id;
    };

    getTipos() {
        return this.tipos;
    };
};