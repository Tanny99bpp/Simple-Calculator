let screen1 = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = "";
for (item of buttons) {
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ',buttonText);
        if(buttonText=='X'){
            buttonText='*';
            screenValue += buttonText;
            screen1.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen1.value = screenValue;
        }
        else if(buttonText == '='){
            screen1.value = eval(screenValue);
        }
        else if(buttonText == 'sqrt'){
            screenValue = Math.sqrt(screenValue)
            screen1.value = screenValue;
        }
        else if(buttonText == 'DEL'){
            screenValue = screenValue.slice(0,-1);
            screen1.value = screenValue;
        }
        else if(buttonText == '%'){
            // let n = screenValue.slice(0,-1);
            screenValue = screenValue/100;
            screen1.value = screenValue;
        }
        else if(buttonText == 'x^2'){
            screen1.value = eval(screenValue)*eval(screenValue);
        }
        else if(buttonText == 'sinx'){
            screenValue = Math.sin(screenValue);
            screen1.value = screenValue;
        }
        else if(buttonText == 'cosx'){
            screenValue = Math.cos(screenValue);            
            screen1.value = screenValue;
        }
        else if(buttonText == 'tanx'){
            screenValue = Math.tan(screenValue);            
            screen1.value = screenValue;
        }
        else if(buttonText == 'logx'){
            screenValue = Math.log(screenValue);            
            screen1.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen1.value = screenValue;
        }
    })  
}

//Disable inspect
document.onkeydown = function (e) { 
    if (event.keyCode == 123) { 
        return false; 
    } 
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { 
        return false; 
    } 
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { 
        return false; 
    } 
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { 
        return false; 
    } 
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { 
        return false; 
    } 
} 
