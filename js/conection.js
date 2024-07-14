// conection.js

async function productsList() {
    try {
        const connection = await fetch("https://alura-geek-khaki.vercel.app/");

        if (!connection.ok) {
            throw new Error(`HTTP error! Status: ${connection.status}`);
        }

        const productList = await connection.json();
        return productList;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Rethrow the error to be handled elsewhere
    }
}


async function createProduct(title, price, image) {
    const connection = await fetch("https://alura-geek-khaki.vercel.app/produtos", {
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
    const connection = await fetch(`https://alura-geek-khaki.vercel.app/produtos/${productId}`, {
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
