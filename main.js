let myLibrary = [];



function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;

}

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



// let users add a maximum of 10 books

let clicks = 0;
let clickLimit = 8; 

function maxClicks(){ 
    if(clicks <= clickLimit){
        clicks+= 1;

    } else if(clicks > clickLimit){
        saveBook.disabled = true;
    }
}


//create the book

function createBook (){
    let bookContainer = document.querySelector('.bookContainer')
    let bookCard = document.createElement('div')
    let bookTitle = document.createElement('p')
    let bookAuthor = document.createElement('p')
    let bookPages = document.createElement('p')

    bookCard.classList.add('book-card')
    bookContainer.appendChild(bookCard)

    bookTitle.classList.add('innerBook')
    bookAuthor.classList.add('innerBook')
    bookPages.classList.add('innerBook')
    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookPages)

    let titleOnly = title.value;
    let authorOnly = author.value;
    let pagesOnly = pages.value;

    bookTitle.innerHTML  = titleOnly;
    bookAuthor.innerHTML   = authorOnly;
    bookPages.innerHTML  = pagesOnly;
    console.log(bookTitle)

    
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

        /*
        let bookContainer = document.querySelector('.bookContainer')
        bookContainer.style.display = 'block'
        bookContainer.style.transition = '0.5s linear' */


       
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
    

    // log the stored book into the console
    // log library
  
    console.log(myLibrary)
   

})


















// change label color when user hovers over input
//loop thorugh inputs
for(let j = 0; j < inputs.length; j++){
   
   /* console.log("j= " + j)*/
    let input = inputs[j];
    /*console.log(input)*/

  
    //when theres a hover on input loop through labels

    input.addEventListener('mouseover', () =>{
        for(let k = 0; k < labels.length; k++){
            /*console.log("k= " + k)*/
            
            let label = labels[k];
            label.style.color = 'rgba(165, 42, 42, 0.5)';
        }       
    })


}

