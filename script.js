let cta = document.querySelectorAll('.cta');
cta[0].onclick = function shop() {
  window.location.href = 'shop.html';
}

console.log('hello');

let image = document.getElementById('img');
let imgloop = ['A1.jpg','A2.jpg','A3.jpg','A4.jpg'];
let i;
for( i = 0; i < imgloop.length;i++){
  console.log(imgloop[i]);
}
image.onclick = function changeImage(){
  image.src;
}

console.log('jambo');

document.getElementById('man').onclick = () => {
  window.location.href = 'shop.html#man';
}
document.getElementById('woman').onclick = () => {
  window.location.href = 'shop.html#woman';
}
document.getElementById('kid').onclick = () => {
  window.location.href = 'shop.html#kid';
}