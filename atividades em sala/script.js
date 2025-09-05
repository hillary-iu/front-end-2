const lcond = document.querySelector('#lcond');
const input = document.querySelector('input');
const p = document.querySelector('p');
const prodAdd = document.querySelector('#prodAdd');


lcond.addEventListener('mauseover', () => {
    //alert('clicou no nome laura!');
    lcond.style.backgraundColor = 'amarelo';
});
//faça a laura ficar com a cor padrao 

lcond.addEventListener('mouseout', () => {
    lcond.style.backgraundColor = '';
});

input.addEventListener('input',() =>  {
    console.log(input.value);
    p.textContent = "sua busca: " + input.value;
});

prodAdd.addEventListener('mousemove' , () => {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    let cor = `rgb(${r}, $(g), ${b})`
    console.log(cor);
})


Math.random