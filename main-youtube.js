const books = document.querySelector('.bookContainer')

let myLibrary = [
    {
        title: 'Book1',
        authoer: 'me',
        pages: 500,
        read: true

    },
    {
        title: 'Book2',
        authoer: 'you',
        pages: 5000,
        read: false
    }

];

function createBookElement(el, content, className){
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
}

function createBookItem(book, index){
    const bookItem = document.createElement('div')
    bookItem.setAttribute('id', index)
    bookItem.setAttribute('key', index)
    bookItem.setAttribute('class', 'card book')
    bookItem.appendChild(
        createBookElement("h1", `Title: ${book.title}`, "book-title")
    )
    bookItem.appendChild(
        createBookElement("h1", `Author: ${book.author}`, "book-author")
    )
    bookItem.appendChild(
        createBookElement("h1", `Pages: ${book.pages}`, "book-pages")
    );
    books.insertAdjacentElement("afterbegin", bookItem)
}


function renderBook(){
    myLibrary.map((book, index)=>{
        createBookItem(book, index)
    })
}

renderBook();


