// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// save Bookmarks

function saveBookmark(e) {
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteUrl').value;

    if (!siteName || !siteURL) {
        alert("Please fill in the details");
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteURL.match(regex)) {
        alert("Please enter a valid URl.");
        return false;
    }

    var bookmark = {
        name: siteName,
        url: siteURL
    }

    /*
    // Local Storage Test
    localStorage.setItem("test", 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */

    // Saving the data in the local storage 
    // Checking for any previous bookmarks 
    if (localStorage.getItem('bookmarks') === null) {
        //Creating a array for storing bookmarks
        var bookmarks = [];

        // Adding the value
        bookmarks.push(bookmark);

        // Saving the bookmark
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Getting the array
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        //Adding the freshly created bookmark
        bookmarks.push(bookmark);

        //Saving the array again
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // Refeching the datastore
    fetchBookMarks();

    document.getElementById('myForm').reset();

    // Prevent form from submiting
    e.preventDefault();

}

// Deleting the bookmark
function deleteBookmark(url) {
    // Fetching the bookmark
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Loop through all the bookmarks 
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            bookmarks.splice(i, 1);
        }
    }
    //Resaving the bookmarks 
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Refeching the datastore
    fetchBookMarks();
}

function fetchBookMarks() {
    // Getting the array
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Get the place you want to store the data 
    var bookmarkResults = document.getElementById('bookmarkresults')

    // Build output
    bookmarkResults.innerHTML = '';

    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarkResults.innerHTML += '<div class="well">' +
            '<h3>' + name +
            ' <a class="btn btn-default" target="_blank" href="' + url + '"> Visit</a>' +
            ' <a onclick= "deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#"> Delete</a>' +
            '</h3>' +
            '</div>';
    }
}