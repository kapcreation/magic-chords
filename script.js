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

const audios = []

for (let i = 0; i < notes.length; i++) {
  var audio = new Audio(`assets/${i + 28}.mp3`)
  audios.push(audio)
}

const tip = document.querySelector("#tip")
const form = document.querySelector('#form')
const chordInput = document.querySelector('#chord-input')
const volumeSlider = document.querySelector("#volume-slider");
let audioVolume = 0.5

//tip
tip.innerText = `Songs: https://chordify.net/ \n Available Chords: ${chords.map(obj => obj.key).join(", ")} \n Keys: Space = Bass | ; = Play | y = kick | h = snare | n = hihat`

let currentChord = null

function chordIsExist(chord) {
  return chords.some(item => item.key === chord)
}

function playAudio(index) {
  var audio = audios[index]
  audios[index] = new Audio(`assets/${index + 28}.mp3`)
  audio.volume = volumeSlider.value / 100
  audio.play()
}

function playBass(chord) {
  if (!chord) return

  const note = chord[0].toUpperCase() + "3"
  
  const index = notes.indexOf(note)
  playAudio(index)
}

function play() {
  let chord = chordInput.value

  if (chord) playBass(chord)
  
  if (chord) chord = chord.charAt(0).toUpperCase() + chord.slice(1)
  
  if (!chord || !chordIsExist(chord)) {
    if (!chord && currentChord) {
      chord = currentChord
    } else {
      form.reset()
      return
    }
  }
  
  const chordNotes = chords.find(item => item.key === chord).notes

  for (let note of chordNotes) {

    const index = notes.indexOf(note)

    playAudio(index)
  }
  
  currentChord = chord
  
  form.reset()
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  play()
});

document.addEventListener('keydown', function(event) {
  // press space to play bass
  if (event.keyCode === 32) {
    event.preventDefault(); // Prevent the default spacebar behavior (e.g., scrolling down the page)
    playBass(chordInput.value || currentChord)
  }

  // press ; to play chord
  if (event.keyCode === 186 || event.which === 186) {
    event.preventDefault();
    play()
  }

  // press 3 to change to #
  if (event.key === "3") {
    event.preventDefault()
    chordInput.value += "#"
  }

  // press left arrow to decrease vol
  if (event.key === "ArrowDown") {
    event.preventDefault()
    if (volumeSlider.value < 10) volumeSlider.value = 10
    volumeSlider.value = parseInt(volumeSlider.value) - 10
  }
  // press right arrow to increase vol
  if (event.key === "ArrowUp") {
    event.preventDefault()
    const vol = volumeSlider.value
    if (volumeSlider.value > 90) volumeSlider.value = 90
    volumeSlider.value = parseInt(volumeSlider.value) + 10
  }

  
  // press y to play "kick" drum
  if (event.key === "y") {
    event.preventDefault()
    const audio = new Audio("assets/drum/kick.wav")
    audio.volume = volumeSlider.value / 100
    audio.play()
  }
  // press h to play "snare" drum
  if (event.key === "h") {
    event.preventDefault()
    const audio = new Audio("assets/drum/snare.wav")
    audio.volume = volumeSlider.value / 100
    audio.play()
  }
  // press n to play "hihat" drum
  if (event.key === "n") {
    event.preventDefault()
    const audio = new Audio("assets/drum/hihat.wav")
    audio.volume = volumeSlider.value / 100
    audio.play()
  }

});