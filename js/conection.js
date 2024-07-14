// conection.js
const BASE_URL = 'https://alura-geek-nine-psi.vercel.app';

async function productsList() {
    try {
        const response = await fetch(`${BASE_URL}/produtos`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const productList = await response.json();
        return productList.produtos; // Certifique-se de retornar apenas a lista de produtos
    } catch (error) {
        console.error('Erro ao obter a lista de produtos:', error);
        throw error; // ou trate o erro de outra forma, conforme necessário
    }
}


async function createProduct(title, price, image) {
    try {
        const response = await fetch("https://alura-geek-nine-psi.vercel.app/produtos", {
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
        throw error; // ou trate o erro de outra forma, conforme necessário
    }
}


async function deleteProduct(productId) {
    const connection = await fetch(`${BASE_URL}/produtos/${productId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!connection.ok) {
        throw new Error(`HTTP error! Status: ${connection.status}`);
    }

    const deletedProduct = await connection.json();
    return deletedProduct;
}

export { productsList, createProduct, deleteProduct };
