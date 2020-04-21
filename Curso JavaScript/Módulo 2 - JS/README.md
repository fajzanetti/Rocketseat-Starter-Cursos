[Link](https://skylab.rocketseat.com.br/api/files/1566499161406.pdf)

# Exercícios: Módulo 02

## 1º exercício

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve aparecer na tela.

## 2º exercício

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

```js
function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0
```
## 3º exercício

A partir do seguinte vetor:
```js
var nomes = ["Diego", "Gabriel", "Lucas"];
```

Preencha uma lista (`<ul>`) no HTML com os itens da seguinte forma:
* Diego
* Gabriel
* Lucas

## 4º exercício

Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
```js
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
```
Ao clicar no botão, a função `adicionar()` deve ser disparada adicionando um novo item a lista de nomes baseado no nome preenchido no input e  renderizando o novo item em tela juntos aos demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.

# [gerandoCores.html](https://github.com/fajzanetti/Rocketseat-Starter-Cursos/blob/master/Curso%20JavaScript/M%C3%B3dulo%202%20-%20JS/gerandoCores.html)

É apenas um código simples para descontrair, no qual aproveitando-se do exercício anterio [02](https://github.com/fajzanetti/Rocketseat-Starter-Cursos/blob/master/Curso%20JavaScript/M%C3%B3dulo%202%20-%20JS/ex02.html).

Foi feito um código para ver a quantidade e as cores geradas de `1px` por `1px` que o navegador conseguiria renderizar;

> (Dica) Para aumentar ou diminuir a quantidade de cores, basta alterar a variável do código `REP`:

```html
...
function COLOR() {
                let quant = 0, REP = 2;
                for (let RED=0; RED<256; RED+=REP){
                    for (let GREEN=0; GREEN<256; GREEN+=REP){
                        for (let BLUE=0; BLUE<256; BLUE+=REP){
...
```