import axios from 'axios'

axios.get('http://alura-geek-4a8pbp2wb-guitomeszs-projects.vercel.app/produtos')
    .then(resposta => console.log(resposta.data))

axios.get('http://alura-geek-4a8pbp2wb-guitomeszs-projects.vercel.app/produtos')
    .then(resposta => console.log(resposta.data))

axios.post('http://alura-geek-4a8pbp2wb-guitomeszs-projects.vercel.app/produtos', {
    nome: 'Novo projeto incrivel'
})
    .then(resposta => console.log(resposta.data))

axios.put('http://alura-geek-4a8pbp2wb-guitomeszs-projects.vercel.app/produtos', {
    id: 1,
    nome: 'Novo projeto incrivel'
})
    .then(resposta => console.log(resposta.data))

axios.delete('http://alura-geek-4a8pbp2wb-guitomeszs-projects.vercel.app/produtos')
    .then(resposta => console.log(resposta.data))