const audios = ["Ab","Bbm","Cm","Db","Eb","Eb7","Fm","E","A","F#m","Eb-G","E-G#","D"]

const songs = [
  {
    name: "Rubia",
    src: "https://www.youtube.com/embed/wKVJi-FLvak",
    waves: [
      {
        chord: "Fm",
        p: "Life blooms"
      },
      {
        chord: "Db",
        p: "like a flower"
      },
      {
        chord: "Eb",
        p: "far away or"
      },
      {
        chord: "Ab",
        p: "by the road"
      },
      {
        chord: "Fm",
        p: "waiting for"
      },
      {
        chord: "Db",
        p: "the one to"
      },
      {
        chord: "Eb",
        p: "find the way back"
      },
      {
        chord: "Ab",
        p: "home"
      },
      {
        chord: "Fm",
        p: "Rain falls a"
      },
      {
        chord: "Db",
        p: "thousand times"
      },
      {
        chord: "Eb",
        p: "no footprints of"
      },
      {
        chord: "Ab",
        p: "come-and-go"
      },
      {
        chord: "Fm",
        p: "You who"
      },
      {
        chord: "Db",
        p: "once went by"
      },
      {
        chord: "Eb",
        p: "where will you"
      },
      {
        chord: "Ab",
        p: "belong? I feel your"
      },
      {
        chord: "Db",
        p: "sigh and breath in the last"
      },
      {
        chord: "Fm",
        p: "blow of wind not"
      },
      {
        chord: "Bbm",
        p: "yet for the story"
      },
      {
        chord: "Cm",
        p: "on the last page"
      },
      {
        chord: "Db",
        p: "it's not the"
      },
      {
        chord: "Eb",
        p: "end"
      },
      {
        chord: "Fm",
        p: "Life blooms"
      },
      {
        chord: "Db",
        p: "like a flower"
      },
      {
        chord: "Eb",
        p: "far away or"
      },
      {
        chord: "Ab",
        p: "by the road"
      },
      {
        chord: "Eb/G",
        p: ""
      },
      {
        chord: "Fm",
        p: "waiting for"
      },
      {
        chord: "Db",
        p: "the one to"
      },
      {
        chord: "Eb",
        p: "find the way back"
      },
      {
        chord: "Ab",
        p: "home"
      },
      {
        chord: "Eb/G",
        p: ""
      },
      {
        chord: "Fm",
        p: "time flows"
      },
      {
        chord: "Db",
        p: "across the world"
      },
      {
        chord: "Db",
        p: "there is always a"
      },
      {
        chord: "Ab",
        p: "longer"
      },
      {
        chord: "Eb/G",
        p: "way to"
      },
      {
        chord: "Fm",
        p: "go 'Till I"
      },
      {
        chord: "Db",
        p: "reach your arms A"
      },
      {
        chord: "Eb",
        p: "madder there for"
      },
      {
        chord: "Ab",
        p: "you"
      },
      {
        chord: "Fm",
        p: "Up against the"
      },
      {
        chord: "Db",
        p: "stream"
      },
      {
        chord: "Eb",
        p: "waterways will"
      },
      {
        chord: "Ab",
        p: "join as one"
      },
      {
        chord: "Eb/G",
        p: ""
      },
      {
        chord: "Fm",
        p: "tracing"
      },
      {
        chord: "Db",
        p: "to the source"
      },
      {
        chord: "Eb",
        p: "no more strayed or"
      },
      {
        chord: "Ab",
        p: "lost You"
      },
      {
        chord: "Eb/G",
        p: "will see"
      },
      {
        chord: "Db",
        p: "petals fly when lament"
      },
      {
        chord: "Fm",
        p: "becomes carol could"
      },
      {
        chord: "Bbm",
        p: "you please hear my"
      },
      {
        chord: "Cm",
        p: "voice that hungers"
      },
      {
        chord: "Db",
        p: "for a"
      },
      {
        chord: "Eb",
        p: "duo?"
      },
      {
        chord: "Fm",
        p: "Life blooms"
      },
      {
        chord: "Db",
        p: "like a flower"
      },
      {
        chord: "Eb",
        p: "far away or by"
      },
      {
        chord: "Ab",
        p: "the road"
      },
      {
        chord: "Eb/G",
        p: ""
      },
      {
        chord: "Fm",
        p: "waiting for"
      },
      {
        chord: "Db",
        p: "the one to"
      },
      {
        chord: "Eb",
        p: "find the way back"
      },
      {
        chord: "Ab",
        p: "home"
      },
      {
        chord: "Eb/G",
        p: ""
      },
      {
        chord: "Fm",
        p: "time flows"
      },
      {
        chord: "Db",
        p: "across the world"
      },
      {
        chord: "Eb",
        p: "there is always a"
      },
      {
        chord: "Ab",
        p: "longer"
      },
      {
        chord: "Eb/G",
        p: "way to"
      },
      {
        chord: "F#m",
        p: "go 'Till I"
      },
      {
        chord: "Db",
        p: "reach your arms A"
      },
      {
        chord: "Eb",
        p: "madder there for"
      },
      {
        chord: "Ab",
        p: "you"
      },
      {
        chord: "Ab",
        p: "you"
      },
      {
        chord: "Ab",
        p: "you"
      },
      {
        chord: "F#m",
        p: "Life blooms"
      },
      {
        chord: "D",
        p: "like a flower"
      },
      {
        chord: "E",
        p: "far away or"
      },
      {
        chord: "A",
        p: "by the road"
      },
      {
        chord: "E/G#",
        p: ""
      },
      {
        chord: "F#m",
        p: "waiting for"
      },
      {
        chord: "D",
        p: "the one to"
      },
      {
        chord: "E",
        p: "find the way back"
      },
      {
        chord: "A",
        p: "home"
      },
      {
        chord: "E/G#",
        p: ""
      },
      {
        chord: "F#m",
        p: "time flows"
      },
      {
        chord: "D",
        p: "across the world"
      },
      {
        chord: "E",
        p: "there is always a"
      },
      {
        chord: "A",
        p: "longer"
      },
      {
        chord: "E/G#",
        p: "way to"
      },
      {
        chord: "F#m",
        p: "go 'Till I"
      },
      {
        chord: "D",
        p: "reach your arms A"
      },
      {
        chord: "E",
        p: "madder there for"
      },
      {
        chord: "A",
        p: "you"
      },
      {
        chord: "D",
        p: ""
      },
      {
        chord: "E",
        p: ""
      },
      {
        chord: "A",
        p: ""
      },
    ]
  },
  {
    name: "Da Capo",
    waves: [
      {
        chord: "Ab",
        p: "When good old friends"
      },
      {
        chord: "Db",
        p: "like a flower"
      }
    ]
  },
]



const video = document.querySelector("#video")
const form = document.querySelector('#form');
const chordInput = document.querySelector('#chord-input');

video.classList.add("hidden")

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let chord = chordInput.value
  if (chord) chord = chord.charAt(0).toUpperCase() + chord.slice(1)
  
  if (!chord || !audios.includes(chord)) chord = songs[selectedSongIndex].waves[wave].chord
  
  
  chord = chord.replace(/\//g, "-");
  if (chord.includes("#")) chord = encodeURIComponent(chord)
  // console.log(chord)
  var audio = new Audio(`assets/${chord}.mp3`);
  audio.play()
  
  form.reset()

  wave++
  changeSheet(selectedSongIndex)
});


const sheetIsOpen = false
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
  })
  
  songList.append(songEl)
}