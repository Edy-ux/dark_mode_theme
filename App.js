
document.querySelector('#theme-toggle') .addEventListener('click',
 (elem)=>{
     elem.preventDefault();
     toggleTheme('dark')    
            
})  

function toggleTheme(theme) {
    document.body.classList.toggle(theme) 
}

const cast = [
    'Keanu Reeves', 
    'Carrie-Anne Moss',
    'Laurence Fishburre',
    'Hugo Weaving'
]

const castList = document.querySelector('.cast')

    cast.forEach(person => {
        const item = document.createElement('li')
        //TODO createTextNode
        const personName = document.createTextNode(person)
    
         item.appendChild(personName)
    
         castList.appendChild(item)
    })


