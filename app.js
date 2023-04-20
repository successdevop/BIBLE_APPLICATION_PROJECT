const bibleDatabase = {
  oldTestament: [
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Job",
    "Psalms",
    "Proverbs",
    "Ecclesiastes",
    "Song of Solomon",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
  ],
  newTestament: [
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation",
  ],
  chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  verses: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  versesText: [
    {
      id: 1,
      text: "Now the serpent was more subtle than any animal of the field which Yahweh God had made. He said to the woman, 'Yes, has God said, 'You shall not eat of any tree of the garden?'",
    },
    {
      id: 2,
      text: "The woman said to the serpent, 'Of the fruit of the trees of the garden we may eat',",
    },
    {
      id: 3,
      text: "but of the fruit of the tree which is in the midst of the garden, God has said, 'You shall not eat of it, neither shall you touch it, lest you die.'",
    },
    {
      id: 4,
      text: "The serpent said to the woman, 'You won't surely die,'",
    },
    {
      id: 5,
      text: "for God knows that in the day you eat it, your eyes will be opened, and you will be like God, knowing good and evil.'",
    },
    {
      id: 6,
      text: "When the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise, she took of the fruit of it, and ate; and she gave some to her husband with her, and he ate.",
    },
    {
      id: 7,
      text: "Both of their eyes were opened, and they knew that they were naked. They sewed fig leaves together, and made themselves aprons.",
    },
    {
      id: 8,
      text: "They heard the voice of Yahweh God walking in the garden in the cool of the day, and the man and his wife hid themselves from the presence of Yahweh God among the trees of the garden.",
    },
    {
      id: 9,
      text: "Yahweh God called to the man, and said to him, 'Where are you?'",
    },
    {
      id: 10,
      text: "The man said, 'I heard your voice in the garden, and I was afraid, because I was naked; and I hid myself.'",
    },
    {
      id: 11,
      text: "God said, 'Who told you that you were naked? Have you eaten from the tree that I commanded you not to eat from?'",
    },
    {
      id: 12,
      text: "The man said, 'The woman whom you gave to be with me, she gave me of the tree, and I ate.'",
    },
    {
      id: 13,
      text: "Yahweh God said to the woman, 'What is this you have done?' The woman said, 'The serpent deceived me, and I ate.'",
    },
    {
      id: 14,
      text: "Yahweh God said to the serpent, 'Because you have done this, cursed are you above all cattle, and above every animal of the field. On your belly shall you go, and you shall eat dust all the days of your life.'",
    },
    {
      id: 15,
      text: "I will put enmity between you and the woman, and between your offspring and her offspring. He will bruise your head, and you will bruise his heel.",
    },
    {
      id: 16,
      text: "To the woman he said, 'I will greatly multiply your pain in childbirth. In pain you will bring forth children. Your desire will be for your husband, and he will rule over you.'",
    },
    {
      id: 17,
      text: "To Adam he said, 'Because you have listened to your wife's voice, and have eaten of the tree, of which I commanded you, saying, 'You shall not eat of it,' cursed is the ground for your sake. In toil you will eat of it all the days of your life'",
    },
    {
      id: 18,
      text: "Thorns also and thistles will it bring forth to you; and you will eat the herb of the field.",
    },
    {
      id: 19,
      text: "By the sweat of your face will you eat bread until you return to the ground, for out of it you were taken. For you are dust, and to dust you shall return.",
    },
    {
      id: 20,
      text: "The man called his wife Eve, because she was the mother of all living.",
    },
  ],
};

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

function init() {
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
