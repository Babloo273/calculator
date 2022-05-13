let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (y)=>{
    if(y.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(y.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(y.target)
    string = string + y.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})