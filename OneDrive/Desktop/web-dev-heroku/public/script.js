$(document).ready(function () {

$("#btn").on("click",function(){
    $("h1").removeClass("bg-warning")
    $("h1").addClass("bg-danger text-white")
});

const bookList = $('#book-list'); 

    // Get books using jquery AJAX
    $.ajax({
        url: 'http://localhost:3000/books', 
        method: 'GET',
        success: function (books) {
            console.log(books)
            books.data.forEach(book => {
                bookList.append(`<li class='list-group-item'>${book.title} by ${book.author} (${book.publish})</li>`);
            });
        },
        error: function (error) {
            console.error('Error fetching books:', error);
            bookList.append(`<li class='list-group-item'>Error loading books.</li>`);
        }
    });
});
