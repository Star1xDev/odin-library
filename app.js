// array to hold all the books
let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibary(title, author, pages, read){
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function showBooks(){
  for(let book of myLibrary){
    let div = document.createElement("div");
    div.classList.add("book");
    let template = `<h2>${book.title}</h2>
                    <h3>${book.author}</h3>
                    <p>${book.pages}</p>
                    <p>${book.read}</p>` ;
    div.innerHTML = template;
    container.appendChild(div);
  }
}

const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".newbook");
const closeModal = document.querySelector(".closeModal");

// open modal

addBookBtn.addEventListener("click", () => {
  modal.classList.remove("hide");
});

//close modal

closeModal.addEventListener("click", () => {
  modal.classList.add("hide");
});

// add book

const add = modal.querySelector(".add");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

add.addEventListener("click", () => {
   let title = titleInput.value;
   let author = authorInput.value;
   let pages = pagesInput.value;
   let read = readInput.value;
   addBookToLibary(title, author, pages, read);
   // showBooks();
   console.table(myLibrary);
});





addBookToLibary("harry potter", "jk rolling", 231, true);
addBookToLibary("one piece", "echiro oda", 33333, false);
addBookToLibary("one piece", "echiro oda", 33333, false);
addBookToLibary("one piece", "echiro oda", 33333, false);
addBookToLibary("one piece", "echiro oda", 33333, false);

showBooks();


