// main.js - inicialização geral e handlers (formulário simulado)
document.addEventListener('DOMContentLoaded', function () {
    // Simula envio do formulário de contato (visual)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                btn.disabled = true;
                btn.textContent = 'Enviando...';
                setTimeout(() => {
                    btn.textContent = 'Enviar (simulação)';
                    btn.disabled = false;
                    alert('Formulário enviado (simulação). Use um backend ou serviço de e-mail para envios reais.');
                    form.reset();
                }, 900);
            }
        });
    }
});
