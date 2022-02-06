const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const title = document.getElementById("title");
const artist = document.getElementById("artist");

const songList = [
    {
        name: "track1",
        title: "track1",
        artist: "artist1"
    },
    {
        name: "track2",
        title: "track2",
        artist: "artist2"
    },
    {
        name: "track3",
        title: "track3",
        artist: "artist3"
    },
    {
        name: "track4",
        title: "track4",
        artist: "artist4"
    },
    {
        name: "track5",
        title: "track5",
        artist: "artist5"
    },
    {
        name: "track6",
        title: "track6",
        artist: "artist6"
    },
    {
        name: "track7",
        title: "track7",
        artist: "artist7"
    },
    {
        name: "track8",
        title: "track8",
        artist: "artist8"
    },
    {
        name: "track9",
        title: "track9",
        artist: "artist9"
    },
    {
        name: "track10",
        title: "track10",
        artist: "artist10"
    }
]

let isPlaying = false;

const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play" , "fa-pause");
    img.classList.add("anime");
}

const pauseMusic = () =>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause" , "fa-play");
    img.classList.remove("anime");
}

const nextSong = () =>{
    //pauseMusic();
    index = (index + 1) % count;
    loadSong(songList[index]);
    playMusic();
}

const prevSong = () => {
     //pauseMusic();
    index = index - 1;
    if(index==-1){
        index = 9;
    }
    loadSong(songList[index]);
    playMusic();  
}

const loadSong = (song) => {
    title.textContent = song.title;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    img.src = `images/${song.name}.jpg`;
}

index = 0;
count = songList.length;
loadSong(songList[index]);

//Mouse Controls//

play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic();
})

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

//KeyBoard Controls//

document.addEventListener("keypress", (e) => {
    if (e.keyCode == 32){
        if(isPlaying){
          pauseMusic();
        } 
        else{
          playMusic();
        }
    }
});

document.addEventListener("keypress", (e) => {
    if (e.keyCode == 110 || e.keyCode == 78){
        nextSong();
    }
});

document.addEventListener("keypress", (e) => {
    if (e.keyCode == 118 || e.keyCode == 86){
        prevSong();
    }
});