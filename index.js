const display = document.querySelector(".calculator-display");
const buttons = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    if(display.innerHTML === "0"){
      display.innerHTML = "";
    }
    if(buttons[i].innerHTML != "=" && buttons[i].innerHTML != "%" && buttons[i].innerHTML !="+/-"){
      display.innerHTML += buttons[i].innerHTML;
    } else if (buttons[i].innerHTML === "="){
      display.innerHTML = parseFloat(eval(display.innerHTML));
    } else if(buttons[i].innerHTML === "%"){
      display.innerHTML = display.innerHTML / 100;
    } else if(buttons[i].innerHTML === "+/-"){
      if(display.innerHTML[0] != "-"){
        display.innerHTML = "-" + display.innerHTML;
      } else {
        display.innerHTML = display.innerHTML.slice(1);
      }
    }
    if(buttons[i].innerHTML === "c"){
      display.innerHTML = "0";
    }

  })
}


document.addEventListener("keydown", function(e) {
  if (display.innerHTML === "0") {
    display.innerHTML = "";
  }
  if (e.key >= '0' && e.key <= '9' || e.key === "." || e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    display.innerHTML += e.key;
  }
  if(e.keyCode === 13){
    display.innerHTML = parseFloat(eval(display.innerHTML));
  }
  if(e.keyCode === 8){
    display.innerHTML = display.innerHTML.slice(0,-1);
    if(display.innerHTML === ""){
      display.innerHTML = "0";
    }
  }
});
