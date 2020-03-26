class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


// UI Constructor 
class UI {
    constructor() { }
    // Add Book TO List
    addBookToList(book) {
        const list = document.getElementById('book-list');
        //Create tr element
        const row = document.createElement('tr');
        //insert cols
        row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;
        list.appendChild(row);
    }
    // SHOW ALERT
    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 2500);
    }
    // Delete book
    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
    // Clear Fields
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}


// Event Listeners to add book
document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value


    const book = new Book(title, author, isbn);

    const ui = new UI();



    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
        ui.showAlert('Book Added!!!', 'success');

        // CLEAR FIEDS
        ui.clearFields();
    }



    e.preventDefault();
});

// EVENT LISTENER FOR DELETE

document.getElementById('book-list').addEventListener('click', function (e) {

    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed!!!', 'success');
    e.preventDefault();
});



// // THIS CAN BE WRITTEN WITH ES5 AS SHOWED BELOW

// // Book Constructor
// function Book(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
// }


// // UI Constructor 
// function UI() { }

// // Add Book TO List
// UI.prototype.addBookToList = function (book) {
//     const list = document.getElementById('book-list');
//     //Create tr element
//     const row = document.createElement('tr');
//     //insert cols
//     row.innerHTML = `
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.isbn}</td>
//     <td><a href="#" class="delete">X<a></td>
//   `;

//     list.appendChild(row);


// }

// // SHOW ALERT
// UI.prototype.showAlert = function (message, className) {
//     const div = document.createElement('div');
//     div.className = `alert ${className}`;
//     div.appendChild(document.createTextNode(message));
//     const container = document.querySelector('.container');
//     const form = document.querySelector('#book-form');

//     container.insertBefore(div, form);

//     setTimeout(function () {
//         document.querySelector('.alert').remove();
//     }, 2500);
// }

// // Delete book

// UI.prototype.deleteBook = function (target) {
//     if (target.className === 'delete') {
//         target.parentElement.parentElement.remove();
//     }
// }

// // Clear Fields
// UI.prototype.clearFields = function () {
//     document.getElementById('title').value = '';
//     document.getElementById('author').value = '';
//     document.getElementById('isbn').value = '';
// }






// // Event Listeners to add book
// document.getElementById('book-form').addEventListener('submit', function (e) {
//     const title = document.getElementById('title').value,
//         author = document.getElementById('author').value,
//         isbn = document.getElementById('isbn').value


//     const book = new Book(title, author, isbn);

//     const ui = new UI();



//     if (title === '' || author === '' || isbn === '') {
//         ui.showAlert('Please fill in all fields', 'error');
//     } else {
//         ui.addBookToList(book);
//         ui.showAlert('Book Added!!!', 'success');

//         // CLEAR FIEDS
//         ui.clearFields();
//     }



//     e.preventDefault();
// });

// // EVENT LISTENER FOR DELETE

// document.getElementById('book-list').addEventListener('click', function (e) {

//     const ui = new UI();
//     ui.deleteBook(e.target);
//     ui.showAlert('Book Removed!!!', 'success');
//     e.preventDefault();
// });
