const bibleVerseOfTheDay = document.querySelector(".bible-verse");

// fetching data from Bible.org API
async function getDailyVerse() {
  let response = await fetch(
    "https://labs.bible.org/api/?passage=random&type=json"
  );

  return await response.json();
}

async function displayDailyBibleVerse() {
  let verse = await getDailyVerse();
  const htmlCode = `
          <p>
            ${verse[0].text}
          </p>
          <span>${verse[0].bookname} ${verse[0].chapter}:${verse[0].verse}</span>`;

  bibleVerseOfTheDay.innerHTML = htmlCode;
}
displayDailyBibleVerse();
