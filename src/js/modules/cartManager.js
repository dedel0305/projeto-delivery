let cartItems = [];

function updateCartDisplay() {
    const cartContent = document.querySelector('.carrinho-conteudo');
    const cartTotalElement = document.querySelector('.carrinho-total h3');

    if (!cartContent || !cartTotalElement) {
        console.error('Cart display elements not found.');
        return;
    }

    cartContent.innerHTML = ''; 
    let total = 0;

    if (cartItems.length === 0) {
        cartContent.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <span>${item.name} (x${item.quantity})</span>
                <span>R$ ${(item.price * item.quantity).toFixed(2)}</span>
            `;
            cartContent.appendChild(itemElement);
            total += item.price * item.quantity;
        });
    }

    cartTotalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

export function setupAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.dataset.id;
            const name = event.target.dataset.name;
            const price = parseFloat(event.target.dataset.price);

            addItemToCart({ id, name, price });
        });
    });
}

function addItemToCart(item) {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ ...item, quantity: 1 });
    }
    updateCartDisplay();
}


updateCartDisplay();
