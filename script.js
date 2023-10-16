let progress = document.getElementById("progress");
let song = document.getElementById("song0");
let track = document.getElementById("track");
let act_button = document.getElementById("act_button");
let image = document.getElementById("img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");

let i = 0;
let image_list = [
    "thumbnails/Don't Stop Me Now.jpeg",
    "thumbnails/Sweet Talkin' Woman.jpg",
    "thumbnails/Fly Me To The Moon.png"
];
let titles = [ 
    "Don't Stop Me Now",
    "Sweet Talkin' Woman",
    "Fly Me To The Moon"
];
let artists = [
    "Queen",
    "ELO",
    "Frank Sinatra"
];

image.src=image_list[0]; 
 
function play_or_pause(){
    if(act_button.classList == "fa-solid fa-play"){
        song.play();  
        act_button.classList = "fa-solid fa-pause";
    }
    else{
        song.pause();  
        act_button.classList = "fa-solid fa-play";
    }
}

function change_song(i){
    
    song.pause();  
    song = document.getElementById("song" + i.toString());

    song.currentTime=0;
    progress.max = song.duration;
    image.src=image_list[i];
    title.innerText = titles[i];
    artist.innerText = artists[i];
    
    song.play();  
    act_button.classList = "fa-solid fa-pause";
}

function play_next(){
    i++;
    if(i===image_list.length){i=0;}
    
    change_song(i);
}

function play_prev(){
    i--;
    if(i===-1){i=image_list.length-1;}
    
    change_song(i);
}


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    })
}
progress.onchange=function(){
    song.currentTime = progress.value;
    song.play();
    act_button.classList ="fa-solid fa-pause";
}

// function play_or_pause(){
//     if(act_button.classList == "fa-solid fa-pause"){
//         song.pause();
//         act_button.classList ="fa-solid fa-play";
//     }
//     else{
//         song.play();
//         act_button.classList ="fa-solid fa-pause";
//     }
// }


