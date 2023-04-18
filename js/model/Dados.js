export default class Dados {
    getNextId() {
        const despesas = this.load();
        return despesas.length > 0 ? Math.max(...despesas.map((despesa) => despesa.id)) + 1 : 1;
    }

    load() {
        const data = localStorage.getItem("dados");
        return data ? JSON.parse(data) : [];
    }

    save(despesa) {
        const despesas = this.load();
        despesa.id = this.getNextId();
        despesas.push(despesa);
        localStorage.setItem("dados", JSON.stringify(despesas));
    }

    delete(id) {
        let despesa = this.load();
        despesa = despesa.filter((despesa) => despesa.id !== id);
        localStorage.setItem("dados", JSON.stringify(despesa));
    }
}