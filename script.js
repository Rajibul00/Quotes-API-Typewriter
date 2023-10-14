/*setInterval(function(){
 if(index==50){
    getquote()
 }
   },3000)*/
 

let p = document.querySelector('p');
let index = 1
async function getquote(){
    let response = await fetch('https://api.quotable.io/quotes/random?limit=1');
    let result = await response.json();
    let quotes = result[0].content;
    let author = result[0].author
setInterval(() => {
    p.innerText = `${quotes.slice(0,index++)} `;
    console.log(index);
 if(index>quotes.length){
 
   setTimeout(function(){
    index=0
    window.location.reload()
   },3000)
 }

},300);

}
window.addEventListener('load',function(){
    getquote()
})

