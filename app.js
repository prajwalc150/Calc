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

const container = document.querySelector('.dig1')
for(i = 2;i>-1;i--){
    //m = 800/n;
    let content = document.createElement('div');
    content.id = `digRow${i}`;
    //content.classList.add("test");
    container.appendChild(content);
    //document.getElementById(`test${i}`).style.height = `${m}px`;
    for( j = 1;j<4;j++){
      const container2 = document.querySelector(`#digRow${i}`);
      let content2 = document.createElement('button');
      content2.id= `jest${i},${j}`;
      content2.classList.add("jest");
      content2.textContent = i*3+j;
      container2.appendChild(content2);
      //document.getElementById(`jest${i},${j}`).style.width = `${m}px`;
      
    } 
  }