const addCarrinho = document.getElementsByClassName('carrinho')[0]
const addCarrinhoOne = document.getElementsByClassName('carrinho')[1]
const addCarrinhoTwo = document.getElementsByClassName('carrinho')[2]
const produtosCarrinho = document.getElementsByClassName('lista-carrinho')[0]
const closeCar = document.querySelector('#close')
let spanQtdItem = document.getElementsByTagName('span')[2];
let spanQtdItemOne = document.getElementsByTagName('span')[4];
let spanQtdItemTwo = document.getElementsByTagName('span')[6];
let qtdItem = document.getElementById('qtditens');


const camisa = {nome : "Camisa",preço : 150,}
const calca = {nome : "Calça",preço : 20,}
const sapato = {nome : "Sapato",preço : 40,}

function decrement(){
  if(spanQtdItem.textContent > 0){
      spanQtdItem.textContent--;
      removeCamisa();
      attLista();
    } 
}
function increment(){
     spanQtdItem.textContent++; 
     addCamisa();
     attLista();
}
function decrementOne(){
  if(spanQtdItemOne.textContent > 0){
      spanQtdItemOne.textContent--;
      attLista();
      removeCalca();
    } 
}
function incrementOne(){
     spanQtdItemOne.textContent++;
     attLista();
     addCalca();
}
function decrementTwo(){
  if(spanQtdItemTwo.textContent > 0){
      spanQtdItemTwo.textContent--;
      attLista();
      removeSapato();
    } 
}
function incrementTwo(){
     spanQtdItemTwo.textContent++;
     attLista();
     addSapato();
}

function attLista(){
   produtosCarrinho.style.display = 'none';
   qtdItem.style.display = 'none';
}

// addCarrinho.addEventListener('click',()=>{
//     if(spanQtdItem.textContent == 0) return;
//     qtdItem.style.display = 'block';
//     qtdItem.textContent = Number(qtdItem.textContent) + Number(spanQtdItem.textContent);
//     spanQtdItem.textContent = 0;
// })
// addCarrinhoOne.addEventListener('click',()=>{
//     if(spanQtdItemOne.textContent == 0) return;
//     qtdItem.style.display = 'block';
//     qtdItem.textContent = Number(qtdItem.textContent) + Number(spanQtdItemOne.textContent);
//     spanQtdItemOne.textContent = 0;
// })
// addCarrinhoTwo.addEventListener('click',()=>{
//     if(spanQtdItemTwo.textContent == 0) return;
//     qtdItem.style.display = 'block';
//     qtdItem.textContent = Number(qtdItem.textContent) + Number(spanQtdItemTwo.textContent);
//     spanQtdItemTwo.textContent = 0;
// })
var listaCarrinho= [];


let temCamisa = false;
function addCamisa(){
    
    if(temCamisa) return atualizaCamisa();
    
    const novaCamisa = document.createElement('p');
    novaCamisa.classList.add('novaCamisa')
    produtosCarrinho.appendChild(novaCamisa);
    novaCamisa.innerHTML = `<p> Adicionado: </p> <p> Produto : 1 ${camisa.nome} </p>
    <p> Total : R$ ${camisa.preço},00 <hr /><br /> </p>`
    temCamisa = true;
}


let qtdCamisa = 1;
let camisaTotal = camisa.preço;

function atualizaCamisa(){
    qtdCamisa++;
    camisaTotal = camisaTotal + camisa.preço;
    atualizaQtdCamisa();
}

function removeCamisa() {
    if (!temCamisa) return; 
    qtdCamisa--;
    camisaTotal = camisaTotal - camisa.preço;
    atualizaQtdCamisa();
}

function atualizaQtdCamisa(){
    let novaCamisa = document.getElementsByClassName('novaCamisa')[0];
    if (qtdCamisa == 0){
        novaCamisa.style.display = 'none';
    }
    novaCamisa.innerHTML = `<p> Adicionado: </p> <p> Produto : ${qtdCamisa} ${camisa.nome}s </p>
    <p> Total : R$ ${camisaTotal},00 </p><hr /><br />`;
}


let temCalca = false;
function addCalca(){
    if(temCalca) return atualizaCalca();
    
    const novaCalca = document.createElement('p');
    novaCalca.classList.add('novaCalca')
    produtosCarrinho.appendChild(novaCalca);
    novaCalca.innerHTML = `<p> Adicionado: </p> <p> Produto : 1 ${calca.nome} </p>
    <p> Total : R$ ${calca.preço},00 </p><hr /><br />`
    temCalca = true;
}

let qtdCalca =1;
let calcaTotal = calca.preço;

function atualizaCalca(){
    qtdCalca++;
    calcaTotal = calcaTotal + calca.preço;
    atualizaQtdCalca();
}

function removeCalca() {
    if (!temCalca) return; 
    qtdCalca--;
    calcaTotal = calcaTotal - calca.preço;
    atualizaQtdCalca();
}

function atualizaQtdCalca(){
    let novaCalca = document.getElementsByClassName('novaCalca')[0];
    if (qtdCalca == 0){
        novaCalca.style.display = 'none';
    }
    novaCalca.innerHTML = `<p> Adicionado: </p> <p> Produto : ${qtdCalca} ${calca.nome}s </p>
    <p> Total : R$ ${calcaTotal},00 </p><hr /><br />`;
}


let temSapato = false;
function addSapato(){
    if(temSapato) return atualizaSapato();
    
    const novoSapato = document.createElement('p');
    novoSapato.classList.add('novoSapato')
    produtosCarrinho.appendChild(novoSapato);
    novoSapato.innerHTML = `<p> Adicionado: </p> <p> Produto : 1 ${sapato.nome} </p>
    <p> Total : R$ ${sapato.preço},00 </p><hr /><br />`
    temSapato = true;
}

let qtdSapato = 1;
let sapatoTotal = sapato.preço;

function atualizaSapato(){
    qtdSapato++;
    sapatoTotal = sapatoTotal + sapato.preço;
    atualizaQtdSapato();
}

function removeSapato() {
    if (!temSapato) return; 
    qtdSapato--;
    sapatoTotal = sapatoTotal - sapato.preço;
    atualizaQtdSapato();
}

function atualizaQtdSapato(){
    let novoSapato = document.getElementsByClassName('novoSapato')[0];
    if (qtdSapato == 0){
        novoSapato.style.display = 'none';
    }
    novoSapato.innerHTML = `<p> Adicionado: </p> <p> Produto : ${qtdSapato} ${sapato.nome}s </p>
    <p> Total : R$ ${sapatoTotal},00 </p><hr /> <br />`;
}

// qtdItem.addEventListener('click', () => {
//     produtosCarrinho.style.display = 'block';
// })

// closeCar.addEventListener('click', () => {
// const calcaLista = document.getElementsByClassName('novaCalca')[0];
// const sapatoLista = document.getElementsByClassName('novoSapato')[0];
// const camisaLista = document.getElementsByClassName('novaCamisa')[0];

//     qtdCamisa = 1;
//     camisaTotal = camisa.preço;
//     if(camisaLista) camisaLista.remove();
//     temCamisa = false;
//     qtdCalca = 1;
//     calcaTotal = calca.preço;
//     temCalca = false;
//     if(calcaLista) calcaLista.remove();
//     qtdSapato = 1;
//     sapatoTotal = sapato.preço;
//     temSapato = false;
//     if(sapatoLista) sapatoLista.remove();
//     qtdItem.textContent = 0;
//     attLista();
// })