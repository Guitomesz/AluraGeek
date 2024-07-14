import axios from 'axios'

axios.get('https://alura-geek-nine-psi.vercel.app/api/produtos')
    .then(resposta => console.log(resposta.data))

axios.get('https://alura-geek-nine-psi.vercel.app/api/produtos')
    .then(resposta => console.log(resposta.data))

axios.post('https://alura-geek-nine-psi.vercel.app/api/produtos/1', {
    nome: 'Novo projeto incrivel'
})
    .then(resposta => console.log(resposta.data))

axios.put('https://alura-geek-nine-psi.vercel.app/api/produtos/1', {
    id: 1,
    nome: 'Novo projeto incrivel'
})
    .then(resposta => console.log(resposta.data))

axios.delete('https://alura-geek-nine-psi.vercel.app/api/produtos/1')
    .then(resposta => console.log(resposta.data))