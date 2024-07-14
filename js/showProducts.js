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
    deleteButton.addEventListener('click', async () => {
        try {
            if (confirm("Tem certeza que deseja deletar este produto?")) {
                await deleteProduct(id);
                alert("Produto deletado com sucesso!");
                location.reload(); // Recarrega a página após exclusão
            }
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
            alert('Não foi possível excluir o produto. Tente novamente mais tarde.');
        }
    });

    return card;
}

async function showProducts() {
    try {
        const productListData = await productsList();

        if (!Array.isArray(productListData)) {
            throw new Error('A lista de produtos não é um array.');
        }

        list.innerHTML = ''; // Limpa a lista antes de adicionar os novos cards

        productListData.forEach(product => {
            const card = createCard(product.image, product.title, product.price, product.id);
            list.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao exibir produtos:', error);
        alert('Não foi possível carregar a lista de produtos. Tente novamente mais tarde.');
    }
}

showProducts();
