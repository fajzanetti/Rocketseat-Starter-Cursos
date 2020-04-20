const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];


// MAP
const idades = usuarios.map(item => item.idade)
console.log(idades)

// FILTER
const filtro = usuarios.filter(item => {
    if (item.empresa === 'Rocketseat' && item.idade > 18){
        return item
    }
})
console.log(filtro)

// FIND
const find = usuarios.find(item => item.empresa === 'Google')
console.log(find)

// MAP e FILTER
const idade2x = usuarios.map(item => {
    item.idade *= 2
    return item
})
const filter2x = idade2x.filter(item => item.idade <= 50)
console.log(filter2x)