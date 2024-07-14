const BASE_URL = 'https://alura-geek-nine-psi.vercel.app';

async function productsList() {
    try {
        const response = await fetch(`${BASE_URL}/produtos`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const productList = await response.json();
        // Verifique a estrutura do objeto retornado
        console.log('Resposta da API:', productList);

        // Se a resposta não tiver a chave "produtos", retorne a resposta diretamente
        return productList.produtos || productList;
    } catch (error) {
        console.error('Erro ao obter a lista de produtos:', error);
        throw error; // ou trate o erro de outra forma, conforme necessário
    }
}

async function createProduct(title, price, image) {
    const connection = await fetch(`${BASE_URL}/produtos`, {
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

    if (!connection.ok) {
        throw new Error(`HTTP error! Status: ${connection.status}`);
    }

    const createdProduct = await connection.json();
    return createdProduct;
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

    return connection.json();
}

export { productsList, createProduct, deleteProduct };
