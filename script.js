let myLibrary = [];
class Book {
  constructor(bookName, author, pages, read) {
    this.bookName = bookName
    this.author = author
    this.pages = pages
    this.read = read
  }
  sayResult() {
    if (this.read === true) {
      return console.log(`${this.bookName} by ${this.author}, ${this.pages} pages. Book has been read.`)
    } else if (this.read === false) {
      console.log(`${this.bookName} by ${this.author}, ${this.pages} pages. Book has NOT been read.`)
    }
  }
}
  const book1 = new Book("PeterPan", "mikeJ", "293", false);
  const book2 = new Book("James and the Giant Peach", "JG wentworth", "877", true);


    console.log(book1.sayResult())

    // Get info from HTML form    
let title
let author
let pages
let bookBtn
let read
    bookBtn = document.getElementById("submit")
    bookBtn.addEventListener('click', getFormInfo);
function getFormInfo() {
  console.log(document.getElementById("title").value)
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  read = document.querySelector('input[name="read"]:checked').value;

  sendInfo()
}

// Send form info to a card and reset the info
let tag;
let text;
let x;
function sendInfo() {
  //Dont allow form submission if fields are empty. (prevent useless blank DIV's)
  x = document.getElementById("title").value;
  y = document.getElementById("author").value;
  z = document.getElementById("pages").value;
  alertBox = document.getElementById("alertBox");
  if (x == "" || y == "" || z == "") {
    alertBox.classList.remove("hidden");
      return false;
  } else {
    displayBook()
  }
} 
//Push example book into Array
myLibrary.push(["Call Sign Chaos", 'James Mattis', '1775', 'Yes']);
function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) { 
  //If form is filled out, create a div in the right section with Tailwind styling applied and variable text filled out.
  tag = document.createElement("book" + (myLibrary.length)); }
  tag.className = 
  'div relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 rounded-lg';

  tag.innerHTML = 
  `
  <h4 id="book=" class="text-xl font-medium text-gray-700">
  <span class="absolute top-0 bottom-0 right-3 px-4 py-3">
  <svg type="button" class="removeButton absolute fill-current h-4 w-4 text-black-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
</span>
  Book title: ${title} <br> 
  Author name: ${author} <br>
  Pages: ${pages} <br>
  Read: ${read}
  </h4>
  `;
  let newBook = document.getElementById('bookList').appendChild(tag);
  myLibrary.push([title, author, pages, read]);
  localStorage.setItem(newBook, myLibrary);
  // image = document.getElementById('output');
  alertBox.classList.add("hidden");
}

//Closing the alert box
function closeButton() {
  alertBox = document.getElementById("alertBox");
  alertBox.classList.toggle("hidden");
}
// Add DYNAMIC click event to class .deleteItem
$(document).on("click", ".removeButton", function() {
  // Move up DOM tree until first incidence of .item-wrapper and remove
  $(this).closest(".div").remove();
});


// Upload Image

// for (let i = 0; i < myLibrary.length; i++) { 
// let loadFile = function(event) {
// 	let image = document.getElementById('output');
// 	image.src = URL.createObjectURL(event.target.files[0]);
//   return image
// };
// }