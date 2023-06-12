// Accessing it all
const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// Songa Array
const songs = [
    {
        name:"music1",
        title:"First Track",
        artist:"First Artist",
    },
    {
        name:"music2",
        title:"Second Track",
        artist:"Second Artist",
    },
    {
        name:"music3",
        title:"Third Track",
        artist:"Third Artist",
    },
];

let isPlaying = false;
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
};

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
};

play.addEventListener('click', () => {
    if(isPlaying){
        pauseMusic();
    } else{
        playMusic();
    }
});

// Function to Change song details
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src ="music/"+songs.name+".mp3";
    img.src ="images/"+songs.name+".jpg";
};

// loadSong(songs[2]);
songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length ) % songs.length;
    loadSong(songs[songIndex]);
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);