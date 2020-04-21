const axios = require('axios')

const buscaUsuario = async usuario => {
    try{
        const res = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(res.data)
    } catch{
        console.log('Usuário não existe')
    }
}

buscaUsuario('diego3g');
buscaUsuario('');