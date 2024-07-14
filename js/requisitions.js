import axios from 'axios';

axios.get('/api/produtos')
    .then(resposta => console.log(resposta.data))
    .catch(error => console.error('Erro ao obter produtos:', error));

axios.post('/api/produtos', {
    id: 9,  // Certifique-se de passar um ID único
    title: 'Novo projeto incrivel',
    price: 100,
    image: '../assets/images/novaImagem.jpg'
})
    .then(resposta => console.log(resposta.data))
    .catch(error => console.error('Erro ao criar produto:', error));

axios.put('/api/produtos/1', {
    id: 1,
    title: 'Projeto incrível atualizado',
    price: 120,
    image: '../assets/images/novaImagemAtualizada.jpg'
})
    .then(resposta => console.log(resposta.data))
    .catch(error => console.error('Erro ao atualizar produto:', error));

axios.delete('/api/produtos/1')
    .then(resposta => console.log(resposta.data))
    .catch(error => console.error('Erro ao deletar produto:', error));
