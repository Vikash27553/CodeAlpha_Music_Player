let ctrlbtn = document.getElementById("ctrlbtn");
let track = document.getElementById("track");
let current_time = document.querySelector("current-time");
let total_duration = document.querySelector("total-duration");
let track_photo = document.querySelector("track-photo");
let track_name =document.querySelector("track-name");
let track_artist =document.querySelector("track-artist");
let music_details = document.querySelector("music-details");
let vol_mute = document.getElementById("mute");









let track_index =0;
let current_track = document.createElement('audio');

current_track.onloadedmetadata = function(){
    track.max =current_track.duration;
    track.value =current_track.CurrentTime;
}

// music list 

let track_list = [
    {
        name: "Ak47",
        artist: "Mankirit" ,
        image:"images/akh47.jpg",
        path: "music/Ak47.mp3"
    },
    {
        name: "False",
        artist: "Mankirit" ,
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
        artist: "Mankirit" ,
        image:"images/taqdeer.jpeg",
        path: "music/Taqdeer.mp3"
    },
    {
        name: "Kabhi to Pass Mere Aao",
        artist: 'Mankirit' ,
        image:"images/kabhi.jpeg",
        path: "music/kabhi.mp3",
    },
    {
        name: "Soo Dukh",
        artist: 'Mankirit' ,
        image:"images/sodukh.jpg",
        path: "music/Soo Dukh.mp3"
    },
    
];



function loadTrack(track_index){
    current_track.src = track_list[track_index].path;
    current_track.load();
    // track_name.textContent =track_list[0].name;


}
function resetvalue(){
    current_time.textContent = "00:00";
    total_duration.textContent= "00:00";
    track.value =0;

}




// let isplaying = false;
 function playPause(){
    loadTrack(track_index)

    if(ctrlbtn.classList.contains("fa-pause")){
        current_track.pause();
        ctrlbtn.classList.remove("fa-pause");
        ctrlbtn.classList.add("fa-play");
    }
    else{
        current_track.play();
        ctrlbtn.classList.add("fa-pause");
        ctrlbtn.classList.remove("fa-play");
    }
 }
 function nextTrack(){
    if(track_index < track_list.length -1){
        track_index += 1;
            loadTrack(track_index);
            current_track.play();
            console.log(current_track.path)
    }

    else{
    track_index =0;
    
    loadTrack(track_index);
    current_track.play();
    }

 }

  function prevTrack(){
    if(track_index>0)
        track_index -= 1;
    else
    track_index = track_list.length -1;
    loadTrack(track_index);
    current_track.play();
  }   

  if(current_track.play()){
    setInterval(()=>{
        track.value =current_track.currentTime;

    },500);

  }
  track.onchange = function(){
    current_track.play();
    current_track.currentTime= track.value;
    ctrlbtn.classList.add("fa-pause");
    ctrlbtn.classList.remove("fa-play");
}

function seekTo(){
     let seekto = current_track.duration*(track.value/100);
     current_track.currentTime = seekto;
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

