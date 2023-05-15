const audios = ["Ab","Bbm","Cm","Db","Eb","Eb7","Fm","E","A","F#m","Eb-G","E-G#","D","B","C#","C#m","C#m7","D#","D#m","F#","G#","G#m","G#m7","F","Fm7","Bbm7","Gbm7","Abm"]

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
    name: "The Way of The Decision",
    src: "https://www.youtube.com/embed/-S5vANztLBM",
    waves: [
      {
        chord: "G#m",
        p: "-"
      },
      {
        chord: "F#",
        p: "-"
      },
      {
        chord: "B",
        p: "-"
      },
      {
        chord: "E",
        p: "-"
      },
      {
        chord: "F#",
        p: "-"
      },
      {
        chord: "G#m",
        p: "-"
      },
      {
        chord: "F#",
        p: "-"
      },
      {
        chord: "B",
        p: "-"
      },
      {
        chord: "E",
        p: "-"
      },
      {
        chord: "G#m",
        p: "I just want to reach to the"
      },
      {
        chord: "F#",
        p: "highest"
      },
      {
        chord: "B",
        p: "of my"
      },
      {
        chord: "E",
        p: "self"
      },
      {
        chord: "F#",
        p: "-"
      },
      {
        chord: "G#m",
        p: "but i too many thing"
      },
      {
        chord: "F#",
        p: "on the way"
      },
      {
        chord: "B",
        p: "now i must"
      },
      {
        chord: "E",
        p: "decide"
      },
      {
        chord: "D#",
        p: "sometimes i"
      },
      {
        chord: "C#m",
        p: "wonder about my goal even thought"
      },
      {
        chord: "E",
        p: "there is another reason i"
      },
      {
        chord: "G#m",
        p: "leave this story"
      },
      {
        chord: "G#",
        p: "..."
      },
      {
        chord: "D#m",
        p: "..."
      },
      {
        chord: "C#",
        p: "just tell me again what to do now cause i just"
      },
      {
        chord: "E",
        p: "found that i never been alone"
      },
      {
        chord: "F#",
        p: "We are the"
      },
      {
        chord: "G#m7",
        p: "pioneer standing"
      },
      {
        chord: "E",
        p: "before the sins but the"
      },
      {
        chord: "B",
        p: "light are shining beyond"
      },
      {
        chord: "F#",
        p: "..."
      },
      {
        chord: "G#m7",
        p: "A path appear brightening this"
      },
      {
        chord: "E",
        p: "tragic but beautiful"
      },
      {
        chord: "B",
        p: "world... what is right cannot"
      },
      {
        chord: "F#",
        p: "be foreordained"
      },
      {
        chord: "G#m",
        p: "..."
      },
      {
        chord: "F#",
        p: "..."
      },
      {
        chord: "B",
        p: "..."
      },
      {
        chord: "E",
        p: "..."
      },
      {
        chord: "G#m",
        p: "I have to decide my way on some"
      },
      {
        chord: "F#",
        p: "day even"
      },
      {
        chord: "B",
        p: "if i dont"
      },
      {
        chord: "E",
        p: "want to...keep the faith or leave"
      },
      {
        chord: "F#",
        p: "it"
      },
      {
        chord: "G#m",
        p: "i dont want to sacrifice any"
      },
      {
        chord: "F#",
        p: "thing that"
      },
      {
        chord: "B",
        p: "stand by"
      },
      {
        chord: "E",
        p: "my side"
      },
      {
        chord: "B",
        p: "but it used to"
      },
      {
        chord: "C#m7",
        p: "wonder about my goal even though"
      },
      {
        chord: "E",
        p: "there's another reason i"
      },
      {
        chord: "G#m",
        p: "leave this story"
      },
      {
        chord: "B",
        p: "..."
      },
      {
        chord: "D#m",
        p: "...just tell"
      },
      {
        chord: "C#m",
        p: "me again what to"
      },
      {
        chord: "C#",
        p: "do now... cause i just found"
      },
      {
        chord: "E",
        p: "that i never been alone...we are the"
      },
      {
        chord: "G#m7",
        p: "pioneer...standing before"
      },
      {
        chord: "E",
        p: "the sins"
      },
      {
        chord: "B",
        p: "but the light are shining"
      },
      {
        chord: "F#",
        p: "beyond"
      },
      {
        chord: "G#m7",
        p: "a path appear brightening this"
      },
      {
        chord: "E",
        p: "tragic but beautiful"
      },
      {
        chord: "B",
        p: "world without any reason"
      },
      {
        chord: "F#",
        p: "our light are fading far away now"
      },
      {
        chord: "G#m7",
        p: "..."
      },
      {
        chord: "E",
        p: "..."
      },
      {
        chord: "B",
        p: "..."
      },
      {
        chord: "F#",
        p: "...whisper"
      },
      {
        chord: "C#",
        p: "in my eyes..."
      },
      {
        chord: "G#m",
        p: "Won't let my self regret the"
      },
      {
        chord: "F#",
        p: "any"
      },
      {
        chord: "B",
        p: "more"
      },
      {
        chord: "E",
        p: "anymore"
      },
      {
        chord: "F#",
        p: "..."
      },
      {
        chord: "G#m7",
        p: "I am going on wrong way"
      },
      {
        chord: "F#",
        p: "but i"
      },
      {
        chord: "B",
        p: "dont"
      },
      {
        chord: "E",
        p: "care...on"
      },
      {
        chord: "G#m7",
        p: "way we walk i hear the"
      },
      {
        chord: "E",
        p: "voice of you"
      },
      {
        chord: "B",
        p: "and the only thing that"
      },
      {
        chord: "F#",
        p: "i can say...the"
      },
      {
        chord: "G#m",
        p: "way is clear brightening"
      },
      {
        chord: "E",
        p: "this tragic but beautiful"
      },
      {
        chord: "B",
        p: "world without any reason our"
      },
      {
        chord: "F#",
        p: "light are shining everywhere"
      },
      {
        chord: "G#m",
        p: "now..."
      },
      {
        chord: "E",
        p: "..."
      },
      {
        chord: "B",
        p: "..."
      },
      {
        chord: "F#",
        p: "...cause we"
      },
      {
        chord: "G#m",
        p: "are"
      },
      {
        chord: "E",
        p: "...who we"
      },
      {
        chord: "B",
        p: "are..."
      },
      {
        chord: "F#",
        p: "dont let me stop this prayes"
      },
      {
        chord: "G#m7",
        p: "..."
      },
      {
        chord: "E",
        p: "..."
      },
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
  
  if (!chord || !audios.includes(chord)) {
    if (!sheetIsOpen) return
    else chord = songs[selectedSongIndex].waves[wave].chord
  }
  
  
  chord = chord.replace(/\//g, "-");
  if (chord.includes("#")) chord = encodeURIComponent(chord)
  // console.log(chord)
  var audio = new Audio(`assets/${chord}.mp3`);
  audio.play()
  
  form.reset()

  if (sheetIsOpen) {
    wave++
    changeSheet(selectedSongIndex)
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