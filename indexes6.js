console.log('This is ES6 version of project 2');

class Book{
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{
    add(book){
        console.log('Adding to UI');
        let tableBody = document.getElementById('tableBody');
        let uistring = `  <tr>
                          <td>${book.name}</td>
                          <td>${book.author}</td>
                          <td>${book.type}</td>
                        </tr> `
        tableBody.innerHTML += uistring;
    }

    clear(){
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    
    show(type,dismsg) {
        let msg = document.getElementById("message");
        msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message : </strong>${dismsg} 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`
    
        setTimeout(() => {
            msg.innerHTML =``
        }, 2000);
    }
    
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("you have submited");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let other = document.getElementById('other');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }
    else if (other.checked) {
        type = other.value
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('Success','Your book has been successfully added..');
    }
    else {
        display.show('danger','Sorry you cannot add this book..!');
    }
    e.preventDefault();
}