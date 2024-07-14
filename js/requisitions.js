import axios from 'axios'

axios.get('https://alura-geek-4a8pbp2wb-guitomeszs-projects.vercel.app/produtos')
    .then(resposta => console.log(resposta.data))

axios.get('https://alura-geek-4a8pbp2wb-guitomeszs-projects.vercel.app/produtos')
    .then(resposta => console.log(resposta.data))

axios.post('https://alura-geek-4a8pbp2wb-guitomeszs-projects.vercel.app/produtos', {
    nome: 'Novo projeto incrivel'
})
    .then(resposta => console.log(resposta.data))

axios.put('https://alura-geek-4a8pbp2wb-guitomeszs-projects.vercel.app/produtos', {
    id: 1,
    nome: 'Novo projeto incrivel'
})
    .then(resposta => console.log(resposta.data))

axios.delete('https://alura-geek-4a8pbp2wb-guitomeszs-projects.vercel.app/produtos')
    .then(resposta => console.log(resposta.data))