console.log('Welcome to AJSongs');

// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let song = [
    {songName: 'Salam-e-Ishq',  filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: 'Salam-e-Ishq',  filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: 'Salam-e-Ishq',  filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: 'Salam-e-Ishq',  filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: 'Salam-e-Ishq',  filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    {songName: 'Salam-e-Ishq',  filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
]
let audioElement = new Audio('1.mp3');
// audioElement.play();

// play pause

masterPlay.addEventListener('click', ()=>)

// Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    // update seek bar

})
