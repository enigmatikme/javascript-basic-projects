const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  //get random num b/t 0 - 3
  const randomNumber = getRandomNumber();
  console.log("hello")
  console.log(randomNumber);
  document.body.style.backgroundColor= colors[randomNumber];
  color.textContent = colors[randomNumber];
})

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
}