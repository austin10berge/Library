/*
Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”. It might 
help for now to manually add a few books to your array so you can see the display. */

let myLibrary = [];

const Book = (title, pages) => {
    // constructor
    return {title, pages};
};

function addBooktoLibrary() {
    // do stuff here
    //let userTitle = window.prompt("What is the title of the book?", "Title");
    //let userPages = window.prompt("How many pages?", "Pages");
    userTitle = "Book title";
    userPages = "27";
    let tempBook = Book(userTitle, userPages);
    let tempBook2 = Book(userTitle, userPages);
    console.log(tempBook);
    myLibrary.push({tempBook});
    myLibrary.push({tempBook2});
}

addBooktoLibrary();

for (let i=0; i<myLibrary.length; i++) {
    console.log(myLibrary[i]);
}

console.log("Library size: " + myLibrary.length);

