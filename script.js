const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const title = document.getElementById("title");
const artist = document.getElementById("artist");

const songList = [
    {
        name: "Up",
        title: "Up",
        artist: "Cardi B"
    },
    {
        name: "Stronger",
        title: "Stronger",
        artist: "Sam Feldt ft. Kesha"
    },
    {
        name: "Sorry",
        title: "Sorry",
        artist: "Alan Walker ft. Isaac"
    },
    {
        name: "Provide",
        title: "Provide",
        artist: "G - Eazy"
    },
    {
        name: "Incomplete",
        title: "Incomplete",
        artist: "Jay Sean"
    },
    {
        name: "Electric",
        title: "Electric",
        artist: "Katy Perry"
    },
    {
        name: "Echoing",
        title: "Echoing",
        artist: "Kings of Leon"
    },
    {
        name: "Cover me in sunshine",
        title: "Cover me",
        artist: "P!nk, Willow Sage Hart"
    },
    {
        name: "Chasing Birds",
        title: "Chasing Birds",
        artist: "Foo Fighters"
    },
    {
        name: "Better",
        title: "Better",
        artist: "Zayn Malik"
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