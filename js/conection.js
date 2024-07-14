// conection.js
const BASE_URL = 'https://alura-geek-nine-psi.vercel.app/api'; // Atualizar para a URL correta do backend

async function productsList() {
    try {
        const response = await fetch(`${BASE_URL}/produtos`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const productList = await response.json();
        return productList;
    } catch (error) {
        console.error('Erro ao obter a lista de produtos:', error);
        throw error;
    }
}

async function createProduct(title, price, image) {
    try {
        const response = await fetch(`${BASE_URL}/produtos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                price: price,
                image: image
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const createdProduct = await response.json();
        return createdProduct;
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        throw error;
    }
}

async function deleteProduct(productId) {
    try {
        const response = await fetch(`${BASE_URL}/produtos/${productId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const deletedProduct = await response.json();
        return deletedProduct;
    } catch (error) {
        console.error('Erro ao excluir produto:', error);
        throw error;
    }
}

export { productsList, createProduct, deleteProduct };
