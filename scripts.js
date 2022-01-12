var red=document.querySelector('.red')
var yellow=document.querySelector('.yellow')
var green=document.querySelector('.green')
var clack=document.querySelector('.black')

const getBGColor =( selectedElement)=>{
  return window.getComputedStyle(selectedElement).backgroundColor;
}

console.log(getBGColor(yellow));
