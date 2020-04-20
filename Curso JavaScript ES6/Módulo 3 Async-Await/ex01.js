// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay()
    console.log('1 segundo');
    await delay()
    console.log('2 segundos');
    await delay()
    console.log('3 segundos');
}
umPorSegundo();
