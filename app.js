// add, subtract, multiply, divide

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

//create operate()

function operate(a,b,c)
{
    /*switch((a)){
        case '+':
            add(b,c);
            break;
        case '-':
            subtract(b,c);
            break;
        case '* ':
            multiply(b,c);
            break;
        case '/':
            divide(b,c);
            break;
    }*/

    if(a=="+"){return add(b,c);}
    if(a=="-"){return subtract(b,c);}
    if(a=="*"){return multiply(b,c);}
    if(a=="/"){return divide(b,c);}
}
//console.log(operate('-',3,4));
//buttons, display, and clear button.