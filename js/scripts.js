document.addEventListener("DOMContentLoaded", function() {
    // Scroll Suave para a navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Validação básica do formulário da newsletter
    const newsletterForm = document.querySelector('#newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value.includes('@') && emailInput.value.includes('.')) {
                alert('Obrigado por subscrever a nossa newsletter!');
                emailInput.value = '';
            } else {
                alert('Por favor, insira um endereço de e-mail válido.');
            }
        });
    }

    // Funcionalidade adicional para a página de vendas (simulação)
    if (document.body.id === 'pagina-vendas') {
        const btnComprar = document.querySelector('.btn-comprar');
        if (btnComprar) {
            btnComprar.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Redirecionando para a plataforma de pagamento...');
                // Aqui seria a lógica para redirecionar para o Hotmart ou outra plataforma.
            });
        }
    }
});
