const BASE_URL = 'https://alura-geek-nine-psi.vercel.app';

async function productsList() {
    try {
        const response = await fetch(`${BASE_URL}/produtos`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data); // Verificar a resposta da API
        return data;
    } catch (error) {
        console.error('Erro ao buscar lista de produtos:', error);
        return [];
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
        console.error('Erro ao deletar produto:', error);
    }
}

export { productsList, createProduct, deleteProduct };
