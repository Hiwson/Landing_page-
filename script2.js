let bar = document.getElementById('bars');
let aside = document.getElementById('aside');
function showAside(){
  if(bar.classList.contains('fa-bars')){
    aside.style.display = 'none';
    window.alert('page still under development please be patient');
    bar.classList.remove('fa-bars');
    bar.classList.add('fa-xmark');
  }
  else{
    aside.style.display = 'none';
    bar.classList.remove('fa-xmark');
    bar.classList.add('fa-bars');
  }
}  
document.getElementById('user').onclick = () => {
  alert('page still under development please bear with us');
}
  
    const shoe = document.getElementById('color-img');
    const color = document.getElementById('color');
    const size = document.getElementById('size');
    const choices = document.querySelectorAll('.choice');
    
    function showOpt1(){
      if(choices[0].classList.contains('ch1')){
        choices[0].style.display = 'block'
      }
    }
    function showOpt2(){
      if(choices[1].classList.contains('ch2')){
        choices[1].style.display = 'block'
      }
    }
    
    let s1,s2,s3;
    s1 = document.getElementById('s1');
    s2 = document.getElementById('s2');
    s3 = document.getElementById('s3');
    size.style.width = '40px' ;
    s1.onclick = function (){
      if(s1.checked){
        choices[0].style.display = 'none';
        size.value = '34';
        s2.checked = false;
        s3.checked = false;
      }
    }
    s2.onclick = function (){
      if(s2.checked){
        choices[0].style.display = 'none';
        size.value = '43';
        s1.checked = false;
        s3.checked = false;
      }
    }
    s3.onclick = function (){
      if(s3.checked){
        choices[0].style.display = 'none';
        size.value = '38';
        s1.checked = false;
        s2.checked = false;
      }
    }
    
    let c1,c2,c3,c4;
    c1 = document.getElementById('black');
    c2 = document.getElementById('orange');
    c3 = document.getElementById('maroon');
    color.style.width = '90px';
    c1.onclick = function (){
      if(c1.checked){
        document.getElementById('color-img').src = 'N7.jpg';
        choices[1].style.display = 'none';
        color.value = 'black';
        c2.checked = false;
        c3.checked = false;
      }
    }
    c2.onclick = function (){
      if(c2.checked){
        document.getElementById('color-img').src = 'N3.jpg';
        choices[1].style.display = 'none';
        color.value = 'orange';
        c1.checked = false;
        c3.checked = false;
      }
    }
    c3.onclick = function (){
      if(c3.checked){
        document.getElementById('color-img').src = 'N6.jpg';
        choices[1].style.display = 'none';
        color.value = 'maroon';
        //color.style.backgroundColor = 'maroon';
        c1.checked = false;
        c2.checked = false;
      }
    }
    //document.getElementById('commodity-card').onmouseover = () => {choices[1].style.display = 'none'; choices[0].style.display = 'none';}
    let next =document.getElementById('next');
    next.onclick = function (){
      window.location.href = '#commodity-card';
    }
    