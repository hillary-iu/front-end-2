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

lista.forEach((item, i)  => {   //a lista é todos os li  foreath eçe vai receber td que esta em baixo
    console.log(i)
    item.addEventListener( 'click', (ev) => {// ev é o evento e o evento é o click
        console.log(ev);
        const li = ev.target;//target é o elemento li é o pai
        const ul = li.parentElement;//ul é o filho
        if (ul === prodComp){
            prodAdd.appendChild(li);
        }else{
            prodComp.appendChild(li)
        }
        
    })
})