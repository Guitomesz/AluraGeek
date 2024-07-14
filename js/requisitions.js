import axios from 'axios'

axios.get('http://localhost:3000/produtos')
    .then(resposta => console.log(resposta.data))

axios.get('http://localhost:3000/produtos/1')
    .then(resposta => console.log(resposta.data))

axios.post('http://localhost:3000/produtos', {
    nome: 'Novo projeto incrivel'
})
    .then(resposta => console.log(resposta.data))

axios.put('http://localhost:3000/produtos/1', {
    id: 1,
    nome: 'Novo projeto incrivel'
})
    .then(resposta => console.log(resposta.data))

axios.delete('http://localhost:3000/produtos/1')
    .then(resposta => console.log(resposta.data))