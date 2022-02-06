const colors = ["red","green","blue","yellow","#f1f5f8"];

const color = document.querySelector('.color');
const btn  = document.getElementById('btn');

btn.addEventListener('click',function(){

    const randomNumber = getRandomNumber();

    console.log(randomNumber)

    document.body.style.backgroundColor =colors[randomNumber];

    color.textContent = colors[randomNumber];
      
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}