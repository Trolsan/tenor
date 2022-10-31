const containerCart = document.getElementById("containerCart")
const Search = document.getElementById("Search")

window.addEventListener('DOMContentLoaded', () => {
    renderGif()
});

function renderGif(){
    

    fetch('https://tenor.googleapis.com/v2/search?q=festival&key=AIzaSyAbm8PL6v82q19mK2xWRrMArrqkvoZB5lk')
    .then(response => response.json())
    .then(data => { 
        
    
        data.results.forEach(element => {
            
            createCart(element)
            
        });       
    })  
}

Search.addEventListener('keyup', ()=>{
    
    if(Search.value==""){
        
        createCart(element)

    }else{

        containerCart.innerHTML= '';
        fetch('https://tenor.googleapis.com/v2/search?q='+Search.value+'&key=AIzaSyAbm8PL6v82q19mK2xWRrMArrqkvoZB5lk')
        .then(response =>response.json())
        .then(data => { 
            
            data.results.forEach(element => {
                
                createCart(element)
                
            }); 
            
        })
    }
})



function createCart(element){

    const gif = document.createElement('img')
    gif.className +="gif"
    gif.src = element.media_formats.gif.url

    containerCart.appendChild(gif);
}