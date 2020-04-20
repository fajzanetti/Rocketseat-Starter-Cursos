// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
// e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
    // código aqui
    console.log(skills.indexOf("Javascript")!=-1? true : false)
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false