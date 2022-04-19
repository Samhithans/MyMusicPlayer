console.log("Welcome to My Music Player");

let songIndex=0;
let audioElement=new Audio('Omshantiom.wav');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif');
let songs=[
    {songname:"Om Shanti Om", filepath:"Omshantiom.wav", coverPath:"cover1.png"},
    {songname:"Silver", filepath:"silver.wav", coverPath:"cover2.png"}

]

masterPlay.addEventListener('click',()=>{
    if (audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        gif.style.opacity=0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//audioElement.play()
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})