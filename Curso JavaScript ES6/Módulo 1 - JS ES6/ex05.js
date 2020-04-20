const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...params) => params.reduce((total, prox) => total + prox)
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const {nome, ...resto} = usuario
const usuario2 = {nome: 'Gabriel', ...resto}
console.log(usuario2)

const {endereco:{cidade, ...restoEnd},...resto1} = usuario
const usuario3 = {endereco:{cidade:'Lontras', ...restoEnd}, ...resto1}
console.log(usuario3)