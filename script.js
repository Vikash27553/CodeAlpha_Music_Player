let ctrlbtn = document.getElementById("ctrlbtn");
let track = document.getElementById("track");
let current_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let track_photo = document.querySelector(".track-photo");
let track_name =document.querySelector(".track-name");
let track_artist =document.querySelector(".track-artist");
let music_details = document.querySelector(".music-details");
let vol_mute = document.getElementById("mute");
let music_list =document.getElementById('music-list');









let track_index =0;
let current_track = document.createElement('audio');

// current_track.onloadedmetadata = function(){
//     track.max =current_track.duration;
//     track.value =current_track.currentTime;
// }
// .onloadedmetadata

// music list 

let track_list = [
    {
        name: "Ak47",
        artist: "Bhumika Sharma" ,
        image:"images/akh47.jpg",
        path: "music/Ak47.mp3"
    },
    {
        name: "False",
        artist: "John Joseph Brill" ,
        image:"images/false.jpeg",
        path: "music/False.mp3"
    },
    {
        name: "Gangland",
        artist: "Mankirit" ,
        image:"images/gangland.jpg",
        path: "music/Gangland.mp3"
    },
    {
        name: "Taqdeer",
        artist: "Shakir Aryan khan" ,
        image:"images/taqdeer.jpeg",
        path: "music/Taqdeer.mp3"
    },
    {
        name: "Kabhi to Pass Mere Aao",
        artist: ' Atif Aslam' ,
        image:"images/kabhi.jpeg",
        path: "music/kabhi.mp3",
    },
    {
        name: "Soo Dukh",
        artist: 'Jassie Gill' ,
        image:"images/sodukh.jpg",
        path: "music/Soo Dukh.mp3"
    },
    
];


let isplaying = false;
function loadTrack(track_index){
    current_track.load();

    current_track.src = track_list[track_index].path;
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    document.querySelector('.track-img').style.backgroundImage = `url(${track_list[track_index].image})`;
    current_track.addEventListener("ended", nextTrack);


}
// current_track.onloadedmetadata = function(){
//     track.max = current_track.duration;
//     total_duration.textContent =formatTime(current_track.duration);

// };

function resetvalue(){
    current_time.textContent = "00:00";
    total_duration.textContent= "00:00";
    track.value = 0;

}




 function playPause(){
    if(ctrlbtn.classList.contains("fa-pause")){
        current_track.pause();
        ctrlbtn.classList.remove("fa-pause");
        ctrlbtn.classList.add("fa-play");
    }
    else{
        if (current_track.src !== track_list[track_index].path) { 
            loadTrack(track_index);
        }
        current_track.play();
        ctrlbtn.classList.add("fa-pause");
        ctrlbtn.classList.remove("fa-play");
        updateTime();

        isplaying = true;
    }
    // isplaying =! isplaying;
 }
 function nextTrack(){
   
    if(track_index < track_list.length -1){
        track_index += 1;
    }

    else
    track_index =0;
    
    
    loadTrack(track_index);
    current_track.play();
    
   
    
 }

  function prevTrack(){
    if(track_index>0)
        track_index -= 1;
    else{
    track_index = track_list.length -1;
  }
    loadTrack(track_index);
    current_track.play();
  
}
  current_track.addEventListener('play', () => {
    setInterval(() => {
        track.value = (current_track.currentTime/ current_track.duration)*100;
        current_time.textContent = formatTime(current_track.currentTime);
    }, 500);
});


function seekto(){
     let seekTo = current_track.duration*(track.value/100);
     current_track.currentTime = seekTo;
    
}


 function soundMute(){
    if(vol_mute.classList.contains(fa-volume-high)){
        vol_mute.muted =true;
        vol_mute.classList.remove("fa-volume-high");
        vol_mute.classList.add("fa-volume-xmark");

    }
    else
    vol_mute.classList.add("fa-volume-high");
    vol_mute.classList.remove("fa-volume-xmark");

 }


 function showMusicList(){
    music_list.style.display = 'block';
    music_list.innerHTML= "";

    const ul = document.createElement('ul');
    track_list.forEach(track =>{
        const li = document.createElement('li');
        li.textContent =  `${track.name} - ${track.artist}`;
        ul.appendChild(li);
    });
    music_list.appendChild(ul);
 
 }
 function backTo(){
    music_list.style.display = 'none';

 }


 function random_bg_color() {
    // Get a random number between 64 to 256
    // (for getting lighter colors)
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
   
    // Construct a color with the given values
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
   
    // Set the background to the new color
    document.body.style.background = bgColor;
  }

  function updaTime(){
    current_time.textContent =formatTime(current_track.currentTime);
  }
  current_track.addEventListener('timeupdate', updaTime);
  current_track.addEventListener('loadedmetadata', ()=>{
        total_duration.textContent= formatTime(current_track.duration);
  });

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
   