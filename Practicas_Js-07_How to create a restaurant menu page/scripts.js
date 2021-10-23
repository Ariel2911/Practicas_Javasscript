// La variable global
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add (bookList, bookName) {

  var list=bookList.concat(bookName);
  return list;

  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove (bookList, bookName) {
  var book_index = bookList.indexOf(bookName);  
  if (book_index >= 0) {

    var list=bookList.filter(n => n != bookList[book_index]);
    return list;

    // Cambia el código encima de esta línea
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);
// console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
