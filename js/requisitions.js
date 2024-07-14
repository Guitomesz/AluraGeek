import axios from 'axios'

axios.get('https://alura-geek-nine-psi.vercel.app/produtos')
    .then(resposta => console.log(resposta.data))
    .catch(error => console.error('Erro:', error));

axios.get('https://alura-geek-nine-psi.vercel.app/produtos/1')
    .then(resposta => console.log(resposta.data))

axios.post('https://alura-geek-nine-psi.vercel.app/produtos', {
    nome: 'Novo projeto incrivel'
})
    .then(resposta => console.log(resposta.data))

axios.put('https://alura-geek-nine-psi.vercel.app/produtos/1', {
    id: 1,
    nome: 'Novo projeto incrivel'
})
    .then(resposta => console.log(resposta.data))

axios.delete('https://alura-geek-nine-psi.vercel.app/produtos/1')
    .then(resposta => console.log(resposta.data))