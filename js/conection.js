// conection.js
const BASE_URL = 'https://alura-geek-nine-psi.vercel.app';

async function productsList() {
    const connection = await fetch(`${BASE_URL}/produtos`)
    const productList = await connection.json();
    return productList;
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

    const deletedProduct = await connection.json();
    return deletedProduct;
}

export { productsList, createProduct, deleteProduct };
