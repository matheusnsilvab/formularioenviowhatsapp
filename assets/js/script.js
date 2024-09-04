document.getElementById('meu-formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const formulario = new FormData(this);
    const nome = formulario.get('nome');
    const email = formulario.get('email') || '';
    const mensagem = formulario.get('mensagem');

    // Monta o texto da mensagem com todas as informações
    const textoWhatsApp = `*Nome:* ${nome}\n*E-mail:* ${email}\n*Mensagem:* ${mensagem}`;
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=seutelefoneaqui&text=${encodeURIComponent(textoWhatsApp)}`;

    // Abre a janela do WhatsApp
    window.open(urlWhatsApp, '_blank'); 
});
