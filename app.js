const containerCard  = document.getElementById("containerCard")
const search = document.getElementById("search")

window.addEventListener('DOMContentLoaded', () => {
    loadGif()
});

function loadGif(){
    

    fetch('https://tenor.googleapis.com/v2/search?q=festival&key=AIzaSyAbm8PL6v82q19mK2xWRrMArrqkvoZB5lk')
    .then(response => response.json())
    .then(data => { 
        
    
        data.results.forEach(element => {
            
            createCard(element)
            
        });       
    })  
}

search.addEventListener('keyup', ()=>{
    
    if(search.value==""){
        
        createCard(element)

    }else{

        containerCard.innerHTML= '';
        fetch('https://tenor.googleapis.com/v2/search?q='+search.value+'&key=AIzaSyAbm8PL6v82q19mK2xWRrMArrqkvoZB5lk')
        .then(response =>response.json())
        .then(data => { 
            
            data.results.forEach(element => {
                
                createCard(element)
                
            }); 
            
        })
    }
})



function createCard(element){

    const gif = document.createElement('img')
    gif.className +="gif"
    gif.src = element.media_formats.gif.url

    containerCard.appendChild(gif);
}