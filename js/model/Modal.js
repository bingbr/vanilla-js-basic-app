function template(mensagem) {
    const { titulo, conteudo, btnClass, btn } = mensagem;
    return `
      <div class="modal" tabindex="-1" id="myInput">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${titulo}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">${conteudo}</div>
            <div class="modal-footer">
              <button type="button" class="btn ${btnClass}" data-bs-dismiss="modal" id="modal-btn">${btn}</button>
            </div>
          </div>
        </div>
      </div>`;
};

const defaultMensagem = {
    alerta: {
        titulo: 'Alerta',
        conteudo: '',
        btn: 'Voltar',
        btnClass: 'btn-secondary'
    },
    info: {
        titulo: 'Informação',
        conteudo: '',
        btn: 'OK',
        btnClass: 'btn-primary'
    }
};

function show() {
    const meuModal = document.getElementById('myInput');
    if (meuModal) {
        const modal = new bootstrap.Modal(meuModal);
        modal.show();
    } else {
        console.error('Show modal error: Elemento não encontrado.');
    };
};

export default function modal(tipo, texto) {
    defaultMensagem[tipo].conteudo = texto;
    document.querySelector('body').insertAdjacentHTML('afterbegin', template(defaultMensagem[tipo]));
    show();
};
