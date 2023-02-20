const music = new Audio('fallingdown.mp3');
// music.play();

// music/Bruno_Mars_Super_Bowl_2014_Just_The_Way_You_Ar.mp3

// create Array

let songs = [
    {
        id:'1',
        songName:`fallingdown
         <div class="subtitle"> Justin</div>`,
        poster:"image/fallingdown.jpg"
        
    },
    {
        id:'2',
        songName:`Just_The_Way_You_Ar
         <div class="subtitle"> Bruno</div>`,
        poster:"image/matt-botsford-OKLqGsCT8qs-unsplash.jpg"
    },
    {
        id:'3',
        songName:`John_Legend_One_Last_Dance
         <div class="subtitle"> John Legend</div>`,
        poster:"image/matt-botsford-OKLqGsCT8qs-unsplash.jpg"
        
    },
    {
        id:'4',
        songName:`SHAKIRA_BZRP_MUSIC_SESSIONS_53_FRENCH_VERSION_
         <div class="subtitle"> Shakira </div>`,
        poster:"image/matt-botsford-OKLqGsCT8qs-unsplash.jpg"
    }

]

Array.from(document.getElementsByClassName('menu_song')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    
    element.getElementsByTagName('h5')[0].innerHTML =songs[i].songName;
    // console.log(arr[0])
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})