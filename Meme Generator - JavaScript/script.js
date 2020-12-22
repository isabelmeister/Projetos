const imgContainer = document.getElementById('meme-image-container');
const textoInput = document.getElementById('meme-text');
const inputOrigem = document.getElementById('text-input');
const sendImg = document.getElementById('meme-image');

inputOrigem.addEventListener('keyup', function memeText() {
  textoInput.innerHTML = inputOrigem.value;
});

const primeiroMeme = document.getElementById('meme-1');
primeiroMeme.addEventListener('click', function memeum() {
  sendImg.src = primeiroMeme.src;
});

const segundoMeme = document.getElementById('meme-2');
segundoMeme.addEventListener('click', function memedois() {
  sendImg.src = segundoMeme.src;
});

const terceiroMeme = document.getElementById('meme-3');
terceiroMeme.addEventListener('click', function memetres() {
  sendImg.src = terceiroMeme.src;
});

const quartoMeme = document.getElementById('meme-4');
quartoMeme.addEventListener('click', function memequatro() {
  sendImg.src = quartoMeme.src;
});

const quintoMeme = document.getElementById('meme-5');
quintoMeme.addEventListener('click', function memecinco() {
  sendImg.src = quintoMeme.src;
});

const sextoMeme = document.getElementById('meme-6');
sextoMeme.addEventListener('click', function memeseis() {
  sendImg.src = sextoMeme.src;
});

const bordaAgua = document.getElementById('water');
bordaAgua.addEventListener('click', function borda1() {
  imgContainer.style.borderColor = 'blue';
  imgContainer.style.borderStyle = 'double';
  imgContainer.style.borderWidth = '5px';
});

const bordaFogo = document.getElementById('fire');
bordaFogo.addEventListener('click', function borda2() {
  imgContainer.style.borderColor = 'rgb(255, 0, 0)';
  imgContainer.style.borderStyle = 'dashed';
  imgContainer.style.borderWidth = '3px';
});

const bordaTerra = document.getElementById('earth');
bordaTerra.addEventListener('click', function borda3() {
  imgContainer.style.borderColor = 'rgb(0, 128, 0)';
  imgContainer.style.borderStyle = 'groove';
  imgContainer.style.borderWidth = '6px';
});

function setImage() {
  sendImg.src = URL.createObjectURL(event.target.files[0]);
}
