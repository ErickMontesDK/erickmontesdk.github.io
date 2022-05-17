const text=document.getElementById("text");
const palabras=["Web developer","Mechanical Engineer","Erick Montes","Batman"];
const Npalabras=palabras.length;
const ciclos=13;

//Funciones
const sleep=(ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const add=(palabra) => {

    for (let i=0; i<palabra.length; i++){
        let letter=document.createElement("span");
        letter.innerText=`${palabra[i]}`;
        
        sleep(150*(i+1)).then(() =>{
            text.append(letter);
        }) 
    
        if(i==(palabra.length-1)){
            sleep((200*i)+2000).then(() =>{
                remove(palabra);
            }) 
        }
    }
}

const remove = (palabra) => {
    for (let e=palabra.length; e>0; e--){ 
        sleep(50*(e)).then(() =>{
            
            text.removeChild(text.lastChild);
        }) 
    }
}

const send= () => {
    for(let i=0; i<palabras.length; i++) {
        let palabra=palabras[i];
    
        sleep(7200*(i)).then(() =>{
            add(palabra);
        })
    }
}

//Run
for(let i=0; i<ciclos; i++) {
    sleep(7200*(i)*Npalabras).then(() =>{
        send();
    })
}

