export function setupCarrinhoModal() {
    const carrinhoBtn = document.querySelector('.carrinho-btn .carrinho');
    const carrinhoModal = document.getElementById('carrinho-modal');
    const fecharCarrinhoBtn = document.getElementById('fechar-carrinho');

    console.log('carrinhoBtn:', carrinhoBtn);
    console.log('carrinhoModal:', carrinhoModal);
    console.log('fecharCarrinhoBtn:', fecharCarrinhoBtn);

    if (carrinhoBtn && carrinhoModal && fecharCarrinhoBtn) {
        console.log('All elements found. Attaching event listeners.');
        carrinhoBtn.addEventListener('click', () => {
            console.log('Carrinho button clicked!');
            carrinhoModal.classList.add('abrir');
        });

        fecharCarrinhoBtn.addEventListener('click', () => {
            console.log('Fechar carrinho button clicked!');
            carrinhoModal.classList.remove('abrir');
        });

        // Fechar o modal clicando fora dele
        carrinhoModal.addEventListener('click', (event) => {
            if (event.target === carrinhoModal) {
                console.log('Clicked outside modal.');
                carrinhoModal.classList.remove('abrir');
            }
        });
    } else {
        console.error('One or more elements for carrinhoModal not found!');
    }
}
