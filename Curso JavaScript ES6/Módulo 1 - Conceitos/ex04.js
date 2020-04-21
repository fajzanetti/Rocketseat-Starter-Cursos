// 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco:{ cidade, estado}} = empresa

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2
const mostraInfo = ({ nome, idade }) => `${nome} tem ${idade} anos!`
console.log(mostraInfo({ nome: 'Diego', idade: 23 }))