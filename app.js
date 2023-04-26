// Selecting elements
const testament = document.querySelectorAll(".testament");
const booksContainer = document.querySelectorAll(".booksContainer");
const generalContainer = document.querySelector(".generalContainer");
const chaptersContainer = document.querySelector(".chaptersContainer");
const versesContainer = document.querySelector(".versesContainer");
const versesTextContainer = document.querySelector(".versesTextContainer");
const displayBibleInfo = document.querySelector(
  ".generalContainer .testamentNavBar"
);

// temporary info
const info = [];

// implementing app functionalities
window.addEventListener("load", init);

async function init() {
  // fetch data from json Data base
  const response = await fetch("./database.json");
  const bibleDatabase = await response.json();

  // 1. Load and display books of the bible
  const oldTestamentBibleBooks = bibleDatabase.oldTestament
    .map((book) => `<button class="book">${book}</button>`)
    .join("");

  const newTestamentBibleBooks = bibleDatabase.newTestament
    .map((book) => `<button class="book">${book}</button>`)
    .join("");

  booksContainer.forEach((container) => {
    if (container.classList.contains("second")) {
      container.innerHTML = newTestamentBibleBooks;
    } else {
      container.innerHTML = oldTestamentBibleBooks;
    }
  });

  // 2. Load and display book chapters
  const bookChapters = bibleDatabase.chapters
    .map((chapter) => `<button class="book">${chapter}</button>`)
    .join("");
  chaptersContainer.innerHTML = bookChapters;

  // 3. Load and display chapter verses
  const chapterVerses = bibleDatabase.verses
    .map((verse) => `<button class="book">${verse}</button>`)
    .join("");
  versesContainer.innerHTML = chapterVerses;

  // 4. Load and display verse content/text
  const verseText = bibleDatabase.versesText
    .map(
      (verseText) => `<p class="verseText">
    <span class="verseNumber">${verseText.id}</span> ${verseText.text}</p>`
    )
    .join("");
  versesTextContainer.innerHTML = verseText;

  // 5. Display Contents of Old Testament and New Testament
  testament.forEach((testaments) => {
    const btn = testaments.querySelector(".navContainer");
    const booksContainer = testaments.querySelector(".booksContainer");

    // button click to see the books of the testament
    btn.addEventListener("click", function (e) {
      booksContainer.classList.toggle("active");
      e.currentTarget.classList.toggle("active");
    });

    // book click to see chapters of the book
    // display the chapters when a book is clicked
    booksContainer.addEventListener("click", function (e) {
      const target = e.target;
      info.push(target.textContent);

      if (target.classList.contains("book")) {
        booksContainer.classList.remove("active");
        testament.forEach((item) => {
          item.classList.add("active");
        });

        generalContainer.classList.add("displayBlock");
        displayBibleInfo.textContent = `Chapters for ${target.textContent}`;
        chaptersContainer.classList.add("active");
      }
    });
  });
}
// end of init function

// 6. Display The verses When A book is clicked
chaptersContainer.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("book")) {
    displayBibleInfo.textContent = `Verses for ${info[0]} Chapter ${target.textContent}`;
    chaptersContainer.classList.remove("active");
    versesContainer.classList.add("active");
    info.push(target.textContent);
  }
});

// 7. Display The Verse Content when a verse is clicked
versesContainer.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("book")) {
    displayBibleInfo.textContent = `${info.join(" ")}`;
    versesContainer.classList.remove("active");
    versesTextContainer.classList.add("active");
  }
  info.splice(0, info.length);
});
