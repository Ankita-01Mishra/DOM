document.getElementById("text").innerText="ID-TEXT"
document.getElementsByTagName("h1").innerHTML="TAG-TEXT";
document.querySelector(".box").innerText="CLASS-TEXT"

document.getElementById("header").innerHTML="Hello World";

document.querySelector("#btn").addEventListener("click",()=>{
    let cards=document.querySelector("#cards");
    if(cards.style.flexDirection=="row")
   document.querySelector("#cards").style.flexDirection="column";
   else
   cards.style.flexDirection="row"
})


let ele=document.querySelector("#text1")
ele.style.color="red"
ele.setAttribute("id","heading");

document.querySelector("#changeBtn").addEventListener("click",()=>{
    document.querySelector("#changeTxt").innerHTML="Welcome to Elevation Academy"
})

setInterval(()=>{
let dt=new Date();
let hr=dt.getHours();
let mi=dt.getMinutes();
let se=dt. getSeconds();

document.getElementById("min").innerHTML=mi;
document.getElementById("sec").innerHTML=se;
if(hr>12){
    hr=hr-12;
}
document.getElementById("hrs").innerHTML=hr;
},1000)

document.querySelector("#year").addEventListener('change',()=>{
let output = document.querySelector('#year').value;
        document.querySelector('#showYr').textContent = output;
    })