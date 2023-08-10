 function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}


function playTrack() {
  musicObj.play();
  isPlaying = true;
  playPauseBtn.innerHTML = '<i class="fa-solid fa-pause fa-xl" id="icons""></i>';
}


function pauseTrack() {
  musicObj.pause();
  isPlaying = false;
  playPauseBtn.innerHTML = '<i class="fa-solid fa-play fa-xl" id="icons""></i>';
}


function changeMusicTitle(name) {
  if (name != undefined) {
    musicTitle.innerHTML = name;
  }
}
function changeImageTitle(pic) {
  if (pic != undefined) {
    imageTitle.src = pic;
  }
}


function resetMusicTimer() {
  currentTime.innerHTML = "00:00";
  endTime.innerHTML = "00:00";
  musicSlider.value = 0;
}


function updateMusicSlider() {
  let musicPos = 0;
  if (musicObj.duration != musicObj.currentTime) {
    let instantTime = Math.ceil(musicObj.currentTime);
    let duration = Math.ceil(musicObj.duration);
    let durationMin = Math.floor(duration / 60);
    let durationSec = Math.floor(duration % 60);

    let currentMin = Math.floor(instantTime / 60);
    let currentSec = Math.floor(instantTime % 60);

    musicPos = (instantTime *100) / duration;

    musicSlider.value = musicPos;

    
    if (currentSec < 10) {
      currentTime.innerHTML = `0${currentMin}:0${currentSec}`;
    } else {
      currentTime.innerHTML = `0${currentMin}:${currentSec}`;
    }

    
    if (durationSec != NaN) {
      if (durationSec < 10) {
        endTime.innerHTML = `0${durationMin}:0${durationSec}`;
      } else {
        endTime.innerHTML = `0${durationMin}:${durationSec}`;
      }
    }
  } else {
    resetMusicTimer();
    pauseTrack();
  }
}

// for changing music position
function changeMusicPos() {
  let changedSliderPos = musicSlider.value;
  let changedMusicPos = (changedSliderPos * musicObj.duration) / 100;
  musicObj.currentTime = changedMusicPos;
}
function changePrevNextColor() {
  let position = dll.nodePosition();

  if (position === 1) {
    prevBtn.style.color = "white";
    nextBtn.style.color = "#f8526d";
  } else if (position === -1) {
    prevBtn.style.color = "#f8526d ";
    nextBtn.style.color = "white";
  } else {
    prevBtn.style.color = "#f8526d";
    nextBtn.style.color = "#f8526d";
  }
}
