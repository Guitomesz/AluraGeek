import axios from 'axios'

axios.get('https://alura-geek-khaki.vercel.app/produtos')
    .then(resposta => console.log(resposta.data))

axios.get('https://alura-geek-khaki.vercel.app/produtos/1')
    .then(resposta => console.log(resposta.data))

axios.post('https://alura-geek-khaki.vercel.app/produtos', {
    nome: 'Novo projeto incrivel'
})
    .then(resposta => console.log(resposta.data))

axios.put('https://alura-geek-khaki.vercel.app/produtos/1', {
    id: 1,
    nome: 'Novo projeto incrivel'
})
    .then(resposta => console.log(resposta.data))

axios.delete('https://alura-geek-khaki.vercel.app/produtos/1')
    .then(resposta => console.log(resposta.data))