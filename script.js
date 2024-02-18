let serch_book = document.getElementById("serch_book")
let Select_book = document.getElementById("Select_book")
let rowcontainer = document.getElementById("row-container")
let speaner  = document.getElementById("speaner")

let coutnum = 0
let booksnum = null
let url = null




function getAndAppend(jsondata){
    speaner.classList.add("d-none") 
    rowcontainer.textContent = ""
    
    
    if(jsondata.total === 0){
        let errormsgcontainer = document.createElement("div")
        errormsgcontainer.classList.add("col-12","text-center")
        rowcontainer.appendChild(errormsgcontainer)

        let errormsg = document.createElement("p")
        errormsg.textContent = "No Result Found"
        errormsg.classList.add("errormsg")
        errormsgcontainer.appendChild(errormsg)
    }
    else{
             for (let eachitem of jsondata.search_results){
                let {title,imageLink,author} = eachitem
        let bookcontainer = document.createElement("div")
        bookcontainer.classList.add("col-6","bookcontainer")
        rowcontainer.appendChild(bookcontainer)

        let imgcontainer = document.createElement("img")
        imgcontainer.src = imageLink
        bookcontainer.appendChild(imgcontainer)
        
        let paracontainer = document.createElement("p")
        paracontainer.textContent = author
        paracontainer.classList.add("paracontainer")
        bookcontainer.appendChild(paracontainer)
        
        if (coutnum === booksnum){
            alert(coutnum)
            break
        }
        coutnum += 1

        
       
        }
    } 

    

    
   
    
    

}

serch_book.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        url = "https://apis.ccbp.in/book-store?title="+serch_book.value

        let options = {
            method : "GET"
        }
        
        fetch(url,options)
        .then(response =>{
            return response.json()
        })
        .then(jsondata =>{
            getAndAppend(jsondata)
        })
        speaner.classList.remove("d-none") 
        
    }


})

Select_book.addEventListener("change",function(event){
    booksnum = parseInt(event.target.value)
    
})
