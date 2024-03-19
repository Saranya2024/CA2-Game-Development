const wordList = [
  {
    word: 'basketball',
    hint: 'A popular team sport played with a ball and hoop.',
  },
  {
    word: 'pizza',
    hint: 'A savory dish consisting of a round, flattened base topped with cheese, tomatoes, and various other ingredients.',
  },
  {
    word: 'unicorn',
    hint: 'A mythical creature typically represented as a horse with a single straight horn projecting from its forehead.',
  },
  {
    word: 'ocean',
    hint: "A large body of saltwater that covers most of the Earth's surface.",
  },
  {
    word: 'bicycle',
    hint: 'A human-powered or motor-powered vehicle with two wheels.',
  },
  {
    word: 'moon',
    hint: 'The natural satellite of the Earth, visible chiefly at night by reflected light from the sun.',
  },
  {
    word: 'chocolate',
    hint: 'A sweet food made from roasted and ground cacao seeds, typically sweetened and flavored.',
  },
  {
    word: 'dragon',
    hint: 'A mythical creature resembling a giant reptile, typically depicted with wings, a long tail, and breathing fire.',
  },
  {
    word: 'camera',
    hint: 'An optical instrument used for recording or capturing images.',
  },
  {
    word: 'garden',
    hint: 'A piece of ground, often near a house, used for growing flowers, fruit, or vegetables.',
  },
  {
    word: 'rainbow',
    hint: 'A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light in water droplets.',
  },
  {
    word: 'beach',
    hint: 'A sandy or pebbly shore, especially by the ocean between high- and low-water marks.',
  },
  {
    word: 'robot',
    hint: 'A machine capable of carrying out a complex series of actions automatically, especially one programmable by a computer.',
  },
  {
    word: 'butterfly',
    hint: 'An insect with two pairs of large wings that are covered with tiny scales, typically brightly colored, and typically held erect when at rest.',
  },
  {
    word: 'mountain',
    hint: "A large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill.",
  },
  {
    word: 'fireworks',
    hint: 'A device containing gunpowder and other combustible chemicals that causes a spectacular explosion when ignited, used typically for display or in celebrations.',
  },
  {
    word: 'rainforest',
    hint: 'A dense forest rich in biodiversity, found typically in tropical areas with consistently heavy rainfall.',
  },
  {
    word: 'superhero',
    hint: 'A fictional hero having extraordinary or superhuman powers, such as Superman or Spiderman.',
  },
  {
    word: 'volcano',
    hint: "A mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are being or have been erupted from the earth's crust.",
  },
  {
    word: 'cake',
    hint: 'An item of soft sweet food made from a mixture of flour, sugar, and other ingredients, typically baked and sometimes decorated.',
  },
  {
    word: 'umbrella',
    hint: "It keeps you dry when it's raining.",
  },
  {
    word: 'book',
    hint: 'You read it to gain knowledge or entertain yourself.',
  },
  {
    word: 'sunflower',
    hint: 'A tall plant with a large yellow flower that turns to face the sun.',
  },
  {
    word: 'music',
    hint: 'It can lift your mood and soothe your soul.',
  },
  {
    word: 'cookie',
    hint: 'A sweet baked food that you can dunk in milk.',
  },
  {
    word: 'cloud',
    hint: 'A visible mass of condensed water vapor floating in the atmosphere.',
  },
  {
    word: 'puzzle',
    hint: 'A game or problem designed to test ingenuity or knowledge.',
  },
  {
    word: 'painting',
    hint: 'A picture or design made using paint colors on a canvas or surface.',
  },
  {
    word: 'candle',
    hint: 'A stick of wax with a wick in the middle that is lit to produce light.',
  },
  {
    word: 'treasure',
    hint: 'Valuable items or wealth hidden or buried underground.',
  },
  {
    word: 'sunglasses',
    hint: 'Eyewear designed to protect the eyes from sunlight or glare.',
  },
  {
    word: 'dolphin',
    hint: 'A highly intelligent marine mammal known for its playful behavior and communication skills.',
  },
  {
    word: 'rocket',
    hint: 'A cylindrical device propelled by burning fuel, used for space travel or launching satellites.',
  },
  {
    word: 'sandcastle',
    hint: 'A structure made of sand, typically built by children at the beach.',
  },
  {
    word: 'soccer',
    hint: 'A team sport played between two teams of eleven players, using a spherical ball.',
  },
  {
    word: 'ghost',
    hint: 'The spirit or soul of a deceased person believed to appear to the living.',
  },
  {
    word: 'icecream',
    hint: 'A frozen dessert made from cream, sugar, and flavorings.',
  },
  {
    word: 'carousel',
    hint: 'A rotating platform with seats for riders, often found at amusement parks.',
  },
  {
    word: 'tornado',
    hint: 'A violently rotating column of air extending from a thunderstorm to the ground.',
  },
  {
    word: 'keyboard',
    hint: 'A set of keys or buttons used to input data into a computer or electronic device.',
  },
  {
    word: 'lighthouse',
    hint: 'A tall tower with a bright light at the top, located near hazardous areas to guide ships at sea.',
  },
  {
    word: 'penguin',
    hint: 'A flightless seabird found in the Southern Hemisphere, known for its black and white plumage.',
  },
  {
    word: 'whale',
    hint: 'A large marine mammal with a streamlined body and a blowhole for breathing air.',
  },
  {
    word: 'waterfall',
    hint: 'A cascade of water falling from a height, often found in rivers or streams.',
  },
  {
    word: 'magic',
    hint: 'The use of supernatural powers or rituals to achieve desired outcomes.',
  },
  {
    word: 'jungle',
    hint: 'A dense tropical forest with lush vegetation and abundant wildlife.',
  },
  {
    word: 'diamond',
    hint: 'A precious gemstone made of crystallized carbon, prized for its brilliance and clarity.',
  },
  {
    word: 'map',
    hint: 'A diagrammatic representation of an area, typically showing geographical features and political boundaries.',
  },
  {
    word: 'kite',
    hint: 'A toy consisting of a light frame with a thin material stretched over it, flown in the wind at the end of a long string.',
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
