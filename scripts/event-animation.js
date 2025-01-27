// animations.js
const fadeElements = () => {
    // Seleciona todos elementos com a classe 'fade'
    const elements = document.querySelectorAll('.fade');
    
    // Função para verificar se elemento está visível na viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Função para adicionar animação
    const handleScroll = () => {
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Configuração inicial dos elementos
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);
    // Executa uma vez para elementos já visíveis
    handleScroll();
}

// Inicia as animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', fadeElements);