const axios = require('axios')

async function getUserFromGithub(user) {
    try {
        const res = await axios.get(`https://api.github.com/users/${user}`)
        console.log(res.data);
    } catch (error){
        console.log('Usuário não existe');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');