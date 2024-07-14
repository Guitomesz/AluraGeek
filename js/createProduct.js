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

            // Chama a API para criar o produto
            const newProduct = await createProduct(title, price, image);
            alert("Produto criado com sucesso!");

            // Limpa o formulário após a criação do produto
            form.reset();
        };

        reader.readAsDataURL(file); // Lê o conteúdo do arquivo como Data URL
    }
}

form.addEventListener("submit", handleSubmit);
