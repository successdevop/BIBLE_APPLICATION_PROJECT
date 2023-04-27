# BIBLE APPLICATION

## How the bible application is expected to work are as follows

- When a user launches the application, a get request is made to "verseOfTheDay.json", which returns a resourse object. When this object is returned, the javascript method "Math.random()" is used to retrieve the bible book from the books array, the chapter, the verse and the verse content from their respective arrays from the resource object and displayed on the homepage as verse of the day.

* On the homepage, there is also a button with the word "READ", the button has an href that links to a page "./books.html", when the button is clicked it takes us to the books page on the application.

* The books page has two containers, the first container has a title "Old Testament" and a button. The second container also has a title "New Testament" and a button.

* Once the books page loads, a fetch request is made to my local json file "database.json" and the two containers are loaded with books of the bible according to their testament sorted alphabetically using the javascript method of sort but the books container are hidden using css value of display none

* Remember that each container has a button, now when that button is clicked, the css value of display none is removed and replaced with display grid using javascript

* To be able to click on each book of the testament, since the books would be added dynamically, an event listener is attached to each book container to detect any click on any of the books of the testament.

* When a click is detected on any of the books of the testament, the two books container for the testament are hidden using the javascript forEach method and the container for the clicked book chapters which was initially set to the css value of display none would be set to display flex using javascript and the chapters of the booked clicked would be displayed

* The same procedure also applies here, to be able to click on a chapter of a particular book to see it's verses, an event listener is also added to the container containing the chapters of a particular book clicked, and when a click happens, the chapters container is hidden using a css value of display none and the container for the chapter's verses is displayed showing all the verses of the chapter

* An event listener is also added to the verses container, detecting a click on any of the verses. When a click happens, the verses container is hidden using the css value of display none and the container for the versesContent is displayed as flex showing all the verses content of a particular book chapter

* Also note that for the purpose of this project, our json file has only ten chapters for each book, twenty verses for each chapter and each verse content is the same for all books of the testament and this is what will be displayed when we make a get or fetch request from our local json file

## Technologies used for this project includes:

- HTML
- CSS
- JAVASCRIPT
