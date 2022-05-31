const coverHome=document.getElementById("home");
const coverAbout=document.getElementById("about");
const sheetHome=document.getElementById("homeSheet");
const sheetAbout=document.getElementById("aboutSheet");
const sheetPortfolio=document.getElementById("portfolioSheet");
const stateHome=true;

const About=()=>{
    coverHome.style.transform="rotateZ(3deg) translate(-92%,5%)"; 
    coverAbout.style.transform=" rotateZ(-3deg) translate(-3%,3%)";

    sheetHome.style.transform="rotateZ(-030deg) translate(90%,-45%)";
    sheetAbout.style.transform="rotateZ(-3deg) translateY(3%)";
    sheetPortfolio.style.transform="rotateZ(-25deg) translate(93%,-53%)";
}

const Home=()=>{
    coverHome.style.transform="rotateZ(3deg) translateX(3%)"; 

    sheetHome.style.transform="rotateZ(-3deg) translateY(3%)";
    sheetAbout.style.transform="rotateZ(-030deg) translate(90%,-45%)";
    sheetPortfolio.style.transform="rotateZ(-25deg) translate(93%,-53%)";
}

const Portfolio=()=>{
    coverAbout.style.transform="rotateZ(-2deg) translate(-65%,90%)"; 
    coverHome.style.transform="rotateZ(-7deg) translate(-112%,5%)";

    sheetHome.style.transform="rotateZ(-25deg) translate(93%,-53%)";
    sheetAbout.style.transform="rotateZ(-030deg) translate(90%,-45%)";
    sheetPortfolio.style.transform="rotateZ(-3deg) translateY(3%)";
}

function copyEmail() {
    /* Get the text field */
    var copyText = "erickmontesdk@gmail.com";
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
  
    /* Alert the copied text */
    alert("Se ha copiado el correo a su portapapeles");
  }