const paragrafo = window.document.querySelector('#pInicial');
const lista = document.querySelectorAll('li');

console.log(paragrafo.textContent);
paragrafo.textContent = 'novo conteudo';
console.log(lista.length);
console.log(link.getattribute('heref'));


link.setattribute('href','https://www.ifro.edu.br' );
link.setattribute('target', 'blank');

paragrafo.style.color = 'laranja';

addEventListener('click', (ev)=> {
    alert('clicou!');
    ev.target.style.backgraundcolor = 'roxo';
})



