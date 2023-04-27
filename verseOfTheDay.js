const bibleVerseOfTheDay = document.querySelector(".bible-verse");

// fetching data from Bible.org API
async function getDailyVerse() {
  let response = await fetch("verseOfTheDay.json");

  return await response.json();
}

async function displayDailyBibleVerse() {
  let data = await getDailyVerse();
  const randomBook = data.books[Math.floor(Math.random() * data.books.length)];
  const randomChapter =
    data.chapters[Math.floor(Math.random() * data.chapters.length)];
  const randomVerse =
    data.verses[Math.floor(Math.random() * data.verses.length)];
  const randomVerseText =
    data.versesText[Math.floor(Math.random() * data.versesText.length)];

  const htmlCode = `
          <p>
            ${randomVerseText.text}
          </p>
          <span>${randomBook} ${randomChapter}:${randomVerse}</span>`;

  bibleVerseOfTheDay.innerHTML = htmlCode;
}
displayDailyBibleVerse();
