// conection.js
const BASE_URL = 'https://alura-geek-nine-psi.vercel.app'; // Substitua pelo seu domínio Vercel

async function deleteProduct(productId) {
    try {
        const response = await fetch(`${BASE_URL}/api/produtos/${productId}`, {
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

export { deleteProduct };
