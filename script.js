const notes = ["C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5"]

const chords = [
  {
    key: "Ab",
    notes: ["G#3","C4","D#4"]
  },
  {
    key: "A",
    notes: ["A3","C#4","E4"]
  },
  {
    key: "Abm",
    notes: ["G#3","B3","D#4"]
  },
  {
    key: "Bbm",
    notes: ["A#3","C#4","F4"]
  },
  {
    key: "B",
    notes: ["B3","D#4","F#4"]
  },
  {
    key: "Bbm7",
    notes: ["A#3","C#4","F4","G#4"]
  },
  {
    key: "Cm",
    notes: ["C4","D#4","G4"]
  },
  {
    key: "C#",
    notes: ["C#4","F4","G#4"]
  },
  {
    key: "C#m",
    notes: ["C#4","E4","G#4"]
  },
  {
    key: "C#m7",
    notes: ["C#4","E4","G#4","B4"]
  },
  {
    key: "Db",
    notes: ["C#4","F4","G#4"]
  },
  {
    key: "D",
    notes: ["D4","F#4","A4"]
  },
  {
    key: "D#",
    notes: ["D#4","G4","A#4"]
  },
  {
    key: "D#m",
    notes: ["D#4","F#4","A#4"]
  },
  {
    key: "Eb",
    notes: ["D#4","G4","A#4"]
  },
  {
    key: "Eb7",
    notes: ["D#4","G4","A#4","C#5"]
  },
  {
    key: "E",
    notes: ["E4","G#4","B4"]
  },
  {
    key: "Fm",
    notes: ["F4","G#4","C5"]
  },
  {
    key: "F#m",
    notes: ["F#4","A4","C#5"]
  },
  {
    key: "F#",
    notes: ["F#4","A#4","C#5"]
  },
  {
    key: "F",
    notes: ["F4","A4","C5"]
  },
  {
    key: "Fm7",
    notes: ["F4","G#4","C5","D#5"]
  },
  {
    key: "Gb",
    notes: ["F#3","A#3","C#4"]
  },
  {
    key: "G#",
    notes: ["G#3","C4","D#4"]
  },
  {
    key: "G#m",
    notes: ["G#3","B3","D#4"]
  },
  {
    key: "G#m7",
    notes: ["G#3","B3","D#4","F#4"]
  },
  {
    key: "Gbm7",
    notes: ["F#3","A3","C#4","E4"]
  }
]


const video = document.querySelector("#video")
const form = document.querySelector('#form');
const chordInput = document.querySelector('#chord-input');
let currentChord = null

video.classList.add("hidden")

function chordIsExist(chord) {
  return chords.some(item => item.key === chord)
}

function playBass() {
  if (!currentChord) return

  const note = currentChord[0] + "3"

  const index = notes.indexOf(note) + 28

  var audio = new Audio(`assets/${index}.mp3`);
  audio.play()
}

function play() {
  let chord = chordInput.value
  
  if (chord) chord = chord.charAt(0).toUpperCase() + chord.slice(1)
  
  if (!chord || !chordIsExist(chord)) {
    if (!sheetIsOpen) {
      if (!chord && currentChord) {
        chord = currentChord
      } else {
        form.reset()
        return
      }
    }
    else chord = songs[selectedSongIndex].waves[wave].chord
  }
  
  
  const chordNotes = chords.find(item => item.key === chord).notes

  for (let note of chordNotes) {

    const index = notes.indexOf(note) + 28

    var audio = new Audio(`assets/${index}.mp3`);
    audio.play()
  }



  chord = chord.replace(/\//g, "-");
  if (chord.includes("#")) chord = encodeURIComponent(chord)
  
  currentChord = chord
  
  // console.log(chord)
  // var audio = new Audio(`assets/${chord}.mp3`);
  // audio.play()
  
  form.reset()

  if (sheetIsOpen) {
    wave++
    changeSheet(selectedSongIndex)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  play()
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
    event.preventDefault(); // Prevent the default spacebar behavior (e.g., scrolling down the page)
    playBass()
  }

  if (event.keyCode === 186 || event.which === 186) {
    event.preventDefault();
    playBass()
    play()
  }

  if (event.key === "3") {
    event.preventDefault()
    chordInput.value += "#"
  }
});



let sheetIsOpen = false
const sheet = document.querySelector("#sheet")
const sheetChord = document.querySelector("#sheet-chord")
const sheetChordNext = document.querySelector("#sheet-chord-next")
const sheetP = document.querySelector("#sheet-p")
const waveEl = document.querySelector("#wave")

sheet.classList.add("hidden")

let wave = 0
let selectedSongIndex = 0;


function changeSheet() {
 
  let currentSheet = songs[selectedSongIndex].waves[wave]

  if (!currentSheet) {
    wave = 0
    currentSheet = songs[selectedSongIndex].waves[wave]
  }

  const nextSheet = songs[selectedSongIndex].waves[wave + 1]

  sheetChordNext.classList.remove("hidden")

  sheetChord.innerText = currentSheet.chord

  chordInput.placeholder = currentSheet.chord

  if (nextSheet) sheetChordNext.innerText = nextSheet.chord
  else sheetChordNext.classList.add("hidden")

  sheetP.innerHTML = currentSheet.p +( nextSheet ? `<span class="p-next" id="p-next"> ${nextSheet.p}</span>` : "")
  waveEl.innerText = wave
}


const songList = document.querySelector("#song-list")

for (let i = 0; i < songs.length; i++) {
  const songEl = document.createElement("button")
  songEl.classList.add("song-btn")
  songEl.innerText = songs[i].name
  songEl.addEventListener("click", (e)=> {
    //open a song
    sheet.classList.remove("hidden")
    wave = 0
    selectedSongIndex = i
    changeSheet()
    chordInput.focus()

    if (songs[i].src) {
      video.classList.remove("hidden")
      video.src = songs[i].src
    } else {
      video.classList.add("hidden")
    }

    sheetIsOpen = true
  })
  
  songList.append(songEl)
}