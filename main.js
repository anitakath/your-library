

// let myLibrary = JSON.parse(localStorage.getItem("books")) || []
// console.log(myLibrary)


const saveBook = document.getElementById('saveBook')

let library =  JSON.parse(localStorage.getItem("book")) || []
console.log(library)




function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}



function render(){

    let bookContainer = document.getElementById('bookContainer')
    bookContainer.innerHTML = " ";

   
    //loop over the library array to display your books
    for(let i = 0; i < library.length; i++){
        //console.log(library[i])
        let book = library[i]
        let bookDiv = document.createElement('div')
        bookDiv.setAttribute("class", "bookDiv")
        console.log(library)


        bookDiv.innerHTML = `
        <div class="bookTitle">
            <h3 class="title">${book.title}</h3>
            <h4 class="author"><em>by:</em> ${book.author}</h4>
            <p class="pages">${book.pages} pages</p>
        </div>
        <div class="deleteBookDiv"> 
               <button class="deleteBook" onclick="removeBook(${i})">X</button>
         </div>
        
        `
        
        bookContainer.appendChild(bookDiv)

       
    }

     //let users add a maximum of 10 books
     if(library.length === 10){
        saveBook.disabled = true;
        displaySignUp();
    }
    else{
        saveBook.disabled = false;
    }
}

render();



function removeBook(idx){
    library.splice(idx, 1)
    render();
    localStorage.setItem("book", JSON.stringify(library))

}




function displaySignUp () {
    // alert('moincito')
    const inputContainer = document.querySelector('.inputContainer')
    const inputField = document.querySelector('.inputField')
    const displayArea = document.getElementById('displayArea')
    const signUpContainer = document.createElement('div')

    signUpContainer.innerHTML = `
    <div class="signUpTitle">
       <h1> SIGN UP NOW </h1>
       <h4> and get 30 days of unlimited storage for free </h4> 
    </div>
    <div class="signUpBtn">
       <button> sign up </button>
    </div>

    `
    signUpContainer.setAttribute("class", "signUpContainer")
    inputContainer.appendChild(signUpContainer)

    inputField.style.display = 'none'
    inputField.style.transition = '1s ease'
    displayArea.style.display = 'none'
    displayArea.style.transition = '1s ease'

}



function addBookToLibrary(){
    // get the values from the inputs
    let title= document.getElementById('title').value
    let author= document.getElementById('author').value
    let pages= document.getElementById('pages').value

    let newBook = new Book(title, author, pages)
    console.log(newBook)
    library.push(newBook)
    console.log(library)

    localStorage.setItem("book", JSON.stringify(library))

}


saveBook.addEventListener('click', ()=>{
    let title= document.getElementById('title').value
    let author= document.getElementById('author').value
    let pages= document.getElementById('pages').value
    const displayBook = document.getElementById('displayBook')


    if(title && author && pages){

        addBookToLibrary();
        render();
        localStorage.setItem("book", JSON.stringify(library))
        

        displayBook.innerHTML = `You have just saved ${title} by ${author}, which has ${pages} pages. `

        
    } else{
        displayBook.innerHTML = 'please be sure to fill in all fields'
    }
   
})
















/*

let inputs = document.querySelectorAll('input') // how does inputs.addEventListener work?? :<
let labels = document.querySelectorAll('label')

console.log(inputs) //NodeList

//access all input fields

let title = document.getElementById('title')
let author = document.getElementById('author')
let pages = document.getElementById('pages')


//access the button and the field to display the input 

let saveBook = document.getElementById('saveBook')
let displayBook = document.getElementById('displayBook')

//create an array from input(s)



console.log('-------------------------');


//Access the bookshelf

let book = document.querySelectorAll('.book')
let enterTitle = document.querySelector('.enterTitle')
let enterAuthor = document.querySelectorAll('.enterAuthor')
let enterPages = document.querySelectorAll('.enterPages')



/*

//create the book

function createBook (){
    let bookContainer = document.querySelector('.bookContainer')
    let bookCard = document.createElement('div')
    let bookTitle = document.createElement('p')
    let bookAuthor = document.createElement('p')
    let bookPages = document.createElement('p')
    let deleteBook = document.createElement('button')
    deleteBook.innerHTML = 'X'
    deleteBook.classList.add('deleteBookBtn')

    bookCard.classList.add('bookCard')
    bookContainer.appendChild(bookCard)

    bookTitle.classList.add('innerBook')
    bookAuthor.classList.add('innerBook')
    bookPages.classList.add('innerBook')
    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookPages)
    bookCard.appendChild(deleteBook)

    let titleOnly = title.value;
    let authorOnly = author.value;
    let pagesOnly = pages.value;

    bookTitle.innerHTML  = titleOnly;
    bookAuthor.innerHTML   = authorOnly;
    bookPages.innerHTML  = pagesOnly;
    console.log(bookTitle)

    deleteBook.addEventListener('click', ()=>{
        bookContainer.removeChild(bookCard)
    })

 

    localStorage.setItem("bookDiv", JSON.stringify(myLibrary))

    


}




saveBook.addEventListener('click', ()=>{
    //access all input values
    let titleOnly = title.value;
    let authorOnly = author.value;
    let pagesOnly = pages.value;

    //create an array from the values
    bookArray = [title.value, author.value, pages.value]


    //check if user filled out every input
    // if yes push the bookArray to the library array && display the saved book in <p> && display bookContainer
    // if no only display error message
    if(titleOnly && authorOnly && pagesOnly){
        myLibrary.push(bookArray);
        displayBook.innerHTML = `saved: ${titleOnly} by ${authorOnly} with ${pagesOnly} pages :-)`

      
       
         for(let i = 0; i< book.length; i++){
           book[i].onclick = function(){
            this.style.backgroundColor = 'red'
            
           }
        }

        displayBook.style.color = 'green'
        displayBook.style.textShadow = '1px 1px 1px green'


        createBook ();
        maxClicks();



    } else{
        displayBook.innerHTML = 'please make sure you have filled in all fields'
        displayBook.style.color ='red'
        displayBook.style.textShadow = '1px 1px 1px red'
    }
    

  
    
   

})

console.log(myLibrary)


















// change label color when user hovers over input
//loop thorugh inputs
for(let j = 0; j < inputs.length; j++){
   
   /* console.log("j= " + j)*/
   // let input = inputs[j];
    /*console.log(input)*/





    /*

  
    //when theres a hover on input loop through labels

    input.addEventListener('mouseover', () =>{
        for(let k = 0; k < labels.length; k++){
           
            
            let label = labels[k];
            label.style.color = 'rgba(165, 42, 42, 0.5)';
        }       
    })
}


/* -------------------------------------MOBILE SCROLL DOWN TO BOOKSHELF-------------------------------- */

/*


const mobileScrollDown = document.getElementById('mobileScrollDown')

mobileScrollDown.addEventListener('click', ()=>{
    const bookContainer = document.getElementById('bookContainer')
    window.scrollTo({
        top: 750,
        behavior: 'smooth'
    })

})

*/