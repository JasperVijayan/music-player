
const musicTitle = document.querySelector(".music-info");
const imageTitle = document.querySelector(".image");
const prevBtn = document.querySelector(".previous-btn-wrapper");
const nextBtn = document.querySelector(".next-btn-wrapper");
const playPauseBtn = document.querySelector(".play-pause-btn-wrapper");
const redoBtn = document.querySelector(".redo");


let currentTime = document.querySelector(".current-time");
let musicSlider = document.querySelector(".music-slider");
let endTime = document.querySelector(".total-duration");

let volumeSlider = document.querySelector(".volume-slider");

let isPlaying = false;
let musicObj = document.createElement("audio");
musicObj.src ="./audio/adhee.mp3"

setInterval(updateMusicSlider, 500);
changePrevNextColor();

playPauseBtn.addEventListener("click", () => {

  playpauseTrack();
});

nextBtn.addEventListener("click", () => {
  isPlaying = false;
  const resultObj = dll.traverse(1);

  if (resultObj != 0) {
    musicObj.src = resultObj.path;
   
    playpauseTrack();
  }
  
  changeMusicTitle(resultObj.name);
  changeImageTitle(resultObj.pic);
  
  changePrevNextColor();
});

prevBtn.addEventListener("click", () => {
  isPlaying = false;
  const resultObj = dll.traverse(-1);

  if (resultObj != 0) {
    musicObj.src = resultObj.path;
    playpauseTrack();
  }
  changeMusicTitle(resultObj.name);
  changeImageTitle(resultObj.pic);

  changePrevNextColor();
});

volumeSlider.addEventListener("change", () => {
  musicObj.volume = volumeSlider.value / 100;
});

musicSlider.addEventListener("change", () => {
  changeMusicPos();
});
redoBtn.addEventListener("click", () => {
  musicObj.currentTime=0;
});

