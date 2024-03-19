const wordList = [
    {
      word: 'galaxy',
      hint: 'A vast collection of stars, planets, and other celestial bodies.',
    },
    {
      word: 'adventure',
      hint: 'Exciting and daring experience filled with risks and challenges.',
    },
    {
      word: 'lantern',
      hint: 'A portable light source, often used outdoors or during power outages.',
    },
    {
      word: 'avalanche',
      hint: 'A rapid flow of snow down a slope, often triggered by various factors.',
    },
    {
      word: 'symphony',
      hint: 'A musical composition typically involving multiple instruments and movements.',
    },
    {
      word: 'serenade',
      hint: 'A piece of music performed to someone as a token of affection.',
    },
    {
      word: 'harmony',
      hint: 'A pleasing arrangement of elements, often referring to musical notes or interpersonal relationships.',
    },
    {
      word: 'saffron',
      hint: 'A spice derived from the flower of Crocus sativus, known for its distinct flavor and color.',
    },
    {
      word: 'tundra',
      hint: 'A vast, treeless Arctic region with low-growing vegetation.',
    },
    {
      word: 'mirage',
      hint: 'An optical illusion caused by atmospheric conditions, often seen in deserts.',
    },
    {
      word: 'echo',
      hint: 'Reflection of sound waves, resulting in repetition of a sound.',
    },
    {
      word: 'cascade',
      hint: 'A small waterfall or a series of steps or stages.',
    },
    {
      word: 'firefly',
      hint: 'A small insect known for its bioluminescence, producing light.',
    },
    {
      word: 'blossom',
      hint: 'The flowering part of a plant, often associated with spring and renewal.',
    },
    {
      word: 'bonsai',
      hint: 'The art of cultivating miniature trees, often associated with Japanese culture.',
    },
    {
      word: 'quasar',
      hint: 'A distant celestial object emitting large amounts of energy.',
    },
    {
      word: 'monsoon',
      hint: 'A seasonal wind pattern causing heavy rainfall in certain regions.',
    },
    {
      word: 'horizon',
      hint: 'The apparent line that separates the earth from the sky.',
    },
    {
      word: 'citadel',
      hint: 'A fortress, typically on high ground, used for military defense.',
    },
    {
      word: 'enigma',
      hint: 'A mysterious or puzzling situation or person.',
    },
    {
      word: 'aurora',
      hint: 'A natural light display in the sky, predominantly seen in polar regions.',
    },
    {
      word: 'tempest',
      hint: 'A violent storm with strong winds and heavy rain.',
    },
    {
      word: 'nebula',
      hint: 'A cloud of gas and dust in outer space, often the birthplace of stars.',
    },
    {
      word: 'rhapsody',
      hint: 'A free-flowing instrumental composition expressing intense emotions.',
    },
    {
      word: 'frostbite',
      hint: 'Injury to skin and tissues caused by extreme cold.',
    },
    {
      word: 'solstice',
      hint: 'Either of the two times a year when the sun reaches its highest or lowest point in the sky.',
    },
    {
      word: 'archipelago',
      hint: 'A group or chain of islands.',
    },
    {
      word: 'illusion',
      hint: 'A false impression or perception of reality.',
    },
    {
      word: 'elysium',
      hint: 'A place or state of perfect happiness; paradise.',
    },
    {
      word: 'luminary',
      hint: 'A person who inspires or influences others, often in a particular field.',
    },
    {
      word: 'odyssey',
      hint: 'A long and eventful journey, often with significant experiences or adventures.',
    },
    {
      word: 'radiance',
      hint: 'Brightness or light emitted, often with warmth and positivity.',
    },
    {
      word: 'solace',
      hint: 'Comfort or consolation in a time of distress or sadness.',
    },
    {
      word: 'celestial',
      hint: 'Relating to the sky or outer space.',
    },
    {
      word: 'zenith',
      hint: 'The highest point reached by a celestial or other object.',
    },
    {
      word: 'thunderbolt',
      hint: 'A flash of lightning accompanied by thunder, often associated with storms.',
    },
    {
      word: 'arboretum',
      hint: 'A botanical garden devoted to trees.',
    },
    {
      word: 'reverie',
      hint: 'A state of daydreaming or pleasant thoughts.',
    },
    {
      word: 'eclipse',
      hint: 'The partial or complete blocking of one celestial body by another.',
    },
    {
      word: 'mirage',
      hint: 'An optical illusion caused by atmospheric conditions, often seen in deserts.',
    },
    {
      word: 'euphoria',
      hint: 'A feeling of intense excitement and happiness.',
    },
    {
      word: 'whirlwind',
      hint: 'A rapidly rotating column of air, often seen in tornadoes.',
    },
    {
      word: 'serenity',
      hint: 'The state of being calm, peaceful, and untroubled.',
    },
    {
      word: 'panorama',
      hint: 'An unbroken view of the entire surrounding area.',
    },
    {
      word: 'ember',
      hint: 'A small piece of burning or glowing coal or wood.',
    },
    {
      word: 'oasis',
      hint: 'A fertile spot in a desert where water is found.',
    },
    {
      word: 'horizon',
      hint: 'The apparent line that separates the earth from the sky.',
    },
    {
      word: 'gossamer',
      hint: 'Delicate and light, typically referring to fabric or wings.',
    },
    {
      word: 'crestfallen',
      hint: 'Disappointed or dejected, often after a failure or setback.',
    },
  ];
  

const inputs = document.querySelector('.inputs'),
  hintTag = document.querySelector('.hint span'),
  guessLeft = document.querySelector('.guess-left span'),
  wrongLetter = document.querySelector('.wrong-letter span'),
  resetBtn = document.querySelector('.reset-btn'),
  typingInput = document.querySelector('.typing-input'),
  scoreElement = document.querySelector('.score'),
  gameOverScreen = document.getElementById('gameOverScreen'),
  playAgainBtn = document.querySelector('.play-again-btn');

let word,
  maxGuesses,
  incorrectLetters = [],
  correctLetters = [];
let score = 0;

const winPhrases = [
  'Congratulations! You won!',
  'Well done! You guessed the word!',
  "You're a word-guessing champion!",
  'Bravo! Victory is yours!',
  'Amazing! You cracked the word!',
  "Outstanding! You've conquered the challenge!",
  "Impressive! You've mastered the game!",
  "Fantastic! You're a winner!",
  'Marvelous! Victory is sweet!',
  "Exemplary! You've achieved success!",
];

const losePhrases = [
  'Game over! Better luck next time.',
  'You ran out of guesses. Try again!',
  "Don't give up! Try one more time.",
  "Tough luck! You'll get it next time.",
  'Better luck next round!',
  'Keep trying! Success is around the corner.',
  'Not quite there yet. Try again!',
  "You're almost there! One more shot.",
  "It's not over yet! Keep pushing.",
  'Persistence pays off. Try again for victory.',
];

// Array of background music URLs
const backgroundMusicUrls = [
  'https://dw.zobj.net/download/v1/bQylneLbeCEx0uo5upICnq0U-2FNjJNBsdDAxbmKPcT-kWn-KG6o9hIVuRyTzeYMFeLOZXqx-6Ym18kaItGzKwK1po0r80nQru1situkHg0TSiufKwcvzUdj203Q/?a=&c=72&f=alan_walker_fade.mp3&special=1710862624-UQ5oFs4wL3yMah%2FQs76Yt0CtKgm3baz6fya%2FNRqQens%3D',
  'https://dw.zobj.net/download/v1/bgobfTOFeJ08eUpl7bPRtxGp7oRCen5mVtG5PAABwdfji8aBP0v703rcO-2LBpcaguVwcfTt3yMkrgJs7UTwPxU0vYtjuCqexMiiM24eiSxKIw6Nr1QtmZRJ7H1E/?a=&c=72&f=friends.mp3&special=1710863443-b1wLWXAF%2B%2BedOI72CdVbDAZZzgKDbsxKVoexFz2Rh4k%3D',
  'https://dw.zobj.net/download/v1/bPFnpo9e99FmSqjnqIvEPg0BzfK4uaJVa4dqVIIDvg1hytADEbBtntBnU5a0vp-XYklk4sOP9kwHQThXS68FsIxBbnhknl_J3FoGp0DsdDBM20cgSh7cx0j-MJPM/?a=&c=72&f=eyes_on_u_x_zara_zara.mp3&special=1710865312-i4ZqTaBFLHyL2rTi6juwOdO9Qzmmj5nx1Eo3x66GRnE%3D'
  
];

// Function to play background music
function playBackgroundMusic() {
  const backgroundMusicIndex = Math.floor(
    Math.random() * backgroundMusicUrls.length
  );
  const selectedBackgroundMusic = new Audio(
    backgroundMusicUrls[backgroundMusicIndex]
  );
  selectedBackgroundMusic.loop = true;
  selectedBackgroundMusic.play();
}

// Load score from storage
if (localStorage.getItem('score')) {
  score = parseInt(localStorage.getItem('score'));
}

// Call the function to play background music when the game starts
playBackgroundMusic();
function randomWord() {
  let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranItem.word;
  maxGuesses = word.length >= 5 ? 8 : 6;
  correctLetters = [];
  incorrectLetters = [];
  hintTag.innerText = ranItem.hint;
  guessLeft.innerText = maxGuesses;
  wrongLetter.innerText = incorrectLetters;

  let html = '';
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
  }
  inputs.innerHTML = html;
}

function initGame(e) {
  let key = e.target.value.toLowerCase();
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrectLetters.includes(` ${key}`) &&
    !correctLetters.includes(key)
  ) {
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] == key) {
          correctLetters += key;
          inputs.querySelectorAll('input')[i].value = key;
        }
      }
    } else {
      maxGuesses--;
      incorrectLetters.push(` ${key}`);
    }
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;
  }
  typingInput.value = '';

  setTimeout(() => {
    if (correctLetters.length === word.length) {
      displayOutcomeMessage('win');
      // Increase score and update storage
      score += 3;
      localStorage.setItem('score', score);
    } else if (maxGuesses < 1) {
      displayOutcomeMessage('lose');
    }
  }, 100);
}

resetBtn.addEventListener('click', randomWord);
typingInput.addEventListener('input', initGame);
inputs.addEventListener('click', () => typingInput.focus());
document.addEventListener('keydown', () => typingInput.focus());

function displayOutcomeMessage(outcome) {
  const gameOverMessage = document.getElementById('gameOverMessage');
  const finalScore = document.getElementById('finalScore');

  if (outcome === 'win') {
    gameOverMessage.textContent =
      winPhrases[Math.floor(Math.random() * winPhrases.length)];
    finalScore.textContent = `Your Score: ${score}`;
    scoreElement.textContent = `Score: ${score}`;
    playAgainBtn.textContent = 'Next Word';
    gameOverScreen.style.display = 'block';
    scoreElement.style.display = 'block';
    playAgainBtn.style.display = 'block';
  } else {
    gameOverMessage.textContent =
      losePhrases[Math.floor(Math.random() * losePhrases.length)];
    score = 0;
    localStorage.setItem('score', score);
    finalScore.textContent = `Your Score: ${score}`;
    scoreElement.textContent = `Score: ${score}`;
    playAgainBtn.textContent = 'Play Again';
    gameOverScreen.style.display = 'block';
    scoreElement.style.display = 'block';
    playAgainBtn.style.display = 'block';
  }
}

playAgainBtn.addEventListener('click', () => {
  gameOverScreen.style.display = 'none';
  scoreElement.style.display = 'none';
  playAgainBtn.style.display = 'none';
  randomWord();
});

randomWord();
