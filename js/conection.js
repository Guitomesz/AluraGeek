const BASE_URL = 'https://alura-geek-nine-psi.vercel.app/api/produtos';

async function productsList() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Log para verificar o que está sendo retornado
        console.log('Data retornada do servidor:', data);

        // Verifica se 'data' é um array
        if (!Array.isArray(data)) {
            throw new Error('A lista de produtos não é um array válido.');
        }

        return data; // Retorna a lista de produtos diretamente
    } catch (error) {
        console.error('Erro ao obter a lista de produtos:', error);
        throw error;
    }
}

async function createProduct(title, price, image) {
    try {
        const response = await fetch(BASE_URL, {
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
        const response = await fetch(`${BASE_URL}/${productId}`, {
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
        console.error('Erro ao deletar produto:', error);
        throw error;
    }
}

export { productsList, createProduct, deleteProduct };
