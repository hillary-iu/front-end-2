const lcond = document.querySelector('#lcond');
const input = document.querySelector('input');
const p = document.querySelector('p');
const prodAdd = document.querySelector('#prodAdd');
const lista = document.querySelectorAll('li');
const prodComp = document.querySelector('#prodComp');


lcond.addEventListener('mauseover', () => {
    //alert('clicou no nome laura!');
    lcond.style.backgraundColor = 'amarelo';
});
//faça a laura ficar com a cor padrao 

lcond.addEventListener('mouseout', () => {
    lcond.style.backgraundColor = '';
});

input.addEventListener('change',() =>  {
    console.log(input.value);
    p.textContent = "sua busca: " + input.value;
})

prodAdd.addEventListener('mousemove' , () => {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255 );
    let b = parseInt(Math.random() * 255);
    let cor = `rgb(${r}, ${g}, ${b})`
    console.log(cor);
    document.body.style.backgraundColor = cor;
    prodAdd.style.backgraundColor = cor;
})

lista.forEach((item)  => {
    //console.log(item)
    item.addEventListener( 'click', (ev) => {
        console.log(ev.target.innerText)
        console.log(ev.target.parentElement)
        pai = ev.target.parantElement;
        filho = ev.target;
        if (pai === prodComp){
            prodAdd.appendChild(filho);
        }
        
    })
})