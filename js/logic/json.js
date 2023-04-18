import { tabela } from "../model/Elementos.js";
import modal from "../model/Modal.js";
import carregar from "./carregar.js";

window.download = download;
export function download() {
    let uri = 'data:application/json;charset=utf-8,' + encodeURIComponent(localStorage.getItem("dados"));
    let exportar = 'dados.json';
    let elemento = document.createElement('a');
    elemento.setAttribute('href', uri);
    elemento.setAttribute('download', exportar);
    elemento.click();
}

window.upload = upload;
export function upload() {
    let input = document.getElementById('inputGroupFile');
    let arquivo = input.files[0];
    if (arquivo) {
        let ler = new FileReader();
        ler.onload = function (evento) {
            try {
                let dados = JSON.parse(evento.target.result);
                if (dados.length != 0) {
                    localStorage.setItem("dados", JSON.stringify(dados, null, 4));
                    tabela.style.display = "block";
                    carregar();
                    modal('info', 'Dados carregados com sucesso!');
                } else {
                    modal('alerta', 'Escolha um arquivo válido!');
                }
            } catch (error) {
                modal('alerta', 'Escolha um arquivo válido!');
            }
        };
        ler.readAsText(arquivo);
    } else {
        modal('alerta', 'Escolha um arquivo!');
    }
};