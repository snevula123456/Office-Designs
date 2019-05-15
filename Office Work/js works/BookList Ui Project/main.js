// Book Constructor
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
// Creation of UI constructor
function UI(){}
//Adding Books to List with Prototype

UI.prototype.addBookToList = function(book){
    const List = document.getElementById('book-list');

    //creation of row element
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
`;
    List.appendChild(row);
};
//creating validation prototypr showalert
UI.prototype.showalert = function(message,className){
 const div = document.createElement('div');
 div.className = `alert ${className}`;
 div.appendChild(document.createTextNode(message));

 //get container
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    container.insertBefore(div,form);

    //The message will disappear after few seconds
    setTimeout(function(){
        document.querySelector('.alert').remove()
    },3000);
};
// Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
};
// Clear fields
UI.prototype.clearfields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};
//when U submit values should be taken
document.getElementById('book-form').addEventListener('submit',
    function(e){
    const title = document.getElementById('title').value;
      author = document.getElementById('author').value;
      isbn = document.getElementById('isbn').value;

      //now we want initiate the book object
        const book = new Book(title,author,isbn);

        //initialization of ui function
        const ui = new UI();

        //validation part
    if(title === '' || author === '' || isbn === ''){
        ui.showalert('Please fill the fields','error');
    }else {
        //Calling prototype function with inititlazed object
        ui.addBookToList(book);
        ui.showalert('Book Added','success');
        ui.clearfields();
    }
        //used to prevent default functions of roolback functions
            e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    // Instantiate UI
    const ui = new UI();
    // Delete book
    ui.deleteBook(e.target);

    // Show message
    ui.showalert('Book Removed!', 'success');

    e.preventDefault();
});