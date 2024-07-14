// createProduct.js

import { createProduct } from "./conection.js";

const form = document.querySelector("[data-form]");

async function handleSubmit(event) {
    event.preventDefault();

    const title = document.querySelector("[data-title]").value;
    const price = document.querySelector("[data-price]").value;
    const fileInput = document.querySelector("[data-image]");
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = async function (event) {
            const image = event.target.result;

            try {
                const newProduct = await createProduct(title, price, image);
                alert("Produto criado com sucesso!");
                form.reset();
                location.reload(); // Para atualizar a lista de produtos
            } catch (error) {
                console.error('Erro ao criar produto:', error);
                alert("Erro ao criar o produto. Verifique o console para mais detalhes.");
            }
        };

        reader.readAsDataURL(file);
    }
}

form.addEventListener("submit", handleSubmit);
