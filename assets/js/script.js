document.getElementById('meu-formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const formulario = new FormData(this);
    const nome = formulario.get('nome');
    const telefone = formulario.get('telefone');
    const mensagem = formulario.get('mensagem');

    // Monta a URL do WhatsApp com os dados
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

    // Abre a janela do WhatsApp
    window.open(urlWhatsApp, '_blank');
});