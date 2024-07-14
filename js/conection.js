const BASE_URL = 'https://alura-geek-nine-psi.vercel.app/api';

async function productsList() {
    try {
        const response = await fetch(`${BASE_URL}/produtos`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const productList = await response.json();
        console.log('Resposta da API:', productList);
        return productList;
    } catch (error) {
        console.error('Erro ao obter a lista de produtos:', error);
        throw error;
    }
}

async function createProduct(id, title, price, image) {
    const connection = await fetch(`${BASE_URL}/produtos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            title: title,
            price: price,
            image: image
        })
    });

    if (!connection.ok) {
        throw new Error(`HTTP error! Status: ${connection.status}`);
    }

    const createdProduct = await connection.json();
    return createdProduct;
}

async function deleteProduct(id) {
    try {
        const connection = await fetch(`${BASE_URL}/produtos/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!connection.ok) {
            const errorData = await connection.json();
            throw new Error(`HTTP error! Status: ${connection.status}. Message: ${errorData.error}`);
        }

        return connection.json();
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        throw error;
    }
}

export { productsList, createProduct, deleteProduct };
