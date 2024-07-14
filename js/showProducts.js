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

    const deleteButton = card.querySelector('.delete-button');
    deleteButton.addEventListener('click', async () => {
        try {
            if (confirm("Tem certeza que deseja deletar este produto?")) {
                await deleteProduct(id);
                alert("Produto deletado com sucesso!");
                location.reload();
            }
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            alert("Erro ao deletar o produto. Verifique o console para mais detalhes.");
        }
    });

    return card;
}

async function showProducts() {
    try {
        const productListData = await productsList();

        // Limpa a lista antes de adicionar os novos itens
        list.innerHTML = '';

        // Itera sobre a lista de produtos e cria os cards
        productListData.forEach(product => {
            const card = createCard(product.image, product.title, product.price, product.id);
            list.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao carregar lista de produtos:', error);
        alert("Erro ao carregar a lista de produtos. Verifique o console para mais detalhes.");
    }
}

showProducts();
