// showProducts.js

import { productsList, deleteProduct } from "./conection.js";

const list = document.querySelector("[data-list]");

function createCard(image, title, price, id) {
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
        <img src="${image}" alt="${title}">
        <div class="cardParagraph">
            <p>${title}</p>
            <div class="cardPrice">
                <p>$ ${price}</p>
                <button data-id="${id}" class="delete-button">
                    <img src="./assets/images/shoppingBagEdited.svg" class="shopping" alt="Ícone">
                </button>
            </div>
        </div>
    `;

    // Adicionar evento de clique para o botão de exclusão
    const deleteButton = card.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => handleDelete(id));

    return card;
}

async function showProducts() {
    try {
        const productListData = await productsList();
        console.log(productListData); // Adicione este console.log para depuração
        productListData.forEach(product => {
            const card = createCard(product.image, product.title, product.price, product.id);
            list.appendChild(card);
        });
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}



async function handleDelete(productId) {
    if (confirm("Tem certeza que deseja deletar este produto?")) {
        await deleteProduct(productId);
        alert("Produto deletado com sucesso!");
        location.reload();
    }
}

showProducts();
