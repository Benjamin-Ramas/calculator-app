const keys = document.querySelectorAll('.calcKey');
const display = document.querySelector('#numOutput');

let actualEquation = '';

for(let i = 0; i < keys.length; i++){
    switch (keys[i].textContent){
        case "DEL":
            keys[i].addEventListener('click', deleteText);
            break;
        case "RESET":
            keys[i].addEventListener('click', resetText);
            break;
        case "x":
            keys[i].addEventListener('click', multiply);
            break;
        case "=":
            keys[i].addEventListener('click', solve);
            break;
        default:
            keys[i].addEventListener('click', () =>{addKey(keys[i].textContent)});
            break;
    }
}

function checkError(){
    if(display.textContent == "_" ){
        actualEquation = '';
        display.textContent ='';
    }
    if(display.textContent == "ERROR"){
        display.textContent = '';
        actualEquation = '';
    }
}

function deleteText(){
    checkError();
    display.textContent = display.textContent.slice(0, -1);
    actualEquation = actualEquation.toString().slice(0, -1);
    if(actualEquation == '-'){
        display.textContent = '';
        actualEquation = '';
    }
    if(display.textContent == ''){
        display.textContent = '_';
    }
}

function resetText(){
    checkError();
    display.textContent = '_';
    actualEquation = '';
}

function multiply(){
    checkError();
    display.textContent += 'x';
    actualEquation += "*";
}

function solve(){
    try{
        display.textContent = eval(actualEquation);
        actualEquation = eval(actualEquation);
    } catch(e) {
        display.textContent = "ERROR";
    }
    if(display.textContent == "NaN"){
        display.textContent = "ERROR";
    }
}

function addKey(key){
    checkError();
    display.textContent += key;
    actualEquation += key;
}
