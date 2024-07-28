let playbtn = document.getElementById("play-btn")
let video = document.querySelector(".video")
let progressbar = document.querySelector(".progress-bar")
let progressrange = document.querySelector(".progress-range")
let fullscreen = document.querySelector(".fas fa-expand")
let volumebar = document.querySelector(".volume-bar")

let IsVideoPlaying = false
// video play
function playOrPauseVideo(event) {
    if (!IsVideoPlaying) { 
        video.play()
        IsVideoPlaying = true
        playbtn.classList.replace('fa-play','fa-pause') 
    }else{
        video.pause()
        IsVideoPlaying = false
        playbtn.classList.replace('fa-pause','fa-play')
    }
}
// video bar 
function updateprogressbar(event) {
    let currentTime = event.target.currentTime
    let duration = event.target.duration
    progressbar.style.cssText = `
        width:${(currentTime / duration)*100}%
        `
    document.getElementById("time-elapsed").innerHTML = currentTime
    document.getElementById("time-duration").innerHTML = duration
}
// video control with mouse
function updateSeekbar(event) { 
    let currentPoint = event.layerX
    let progressbarWidth = this.clientWidth
    let currentRange = (currentPoint / progressbarWidth)*video.duration
    video.currentTime =  currentRange
}
// full screen
function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { /* Safari */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE11 */
    video.msRequestFullscreen();
  }
}
// voluom




video.addEventListener('click', playOrPauseVideo)
video.addEventListener('timeupdate', updateprogressbar)
progressrange.addEventListener("click", updateSeekbar)

// video control with keyboad
  window.addEventListener('keydown', function keyboadControls(event) {
    var key = event.which || event.keyCode
    if (key === 32) { // space
        playOrPauseVideo()
    } else if (key == 37) { // left arrow
      event.preventDefault();
      video.currentTime = video.currentTime - 10;
    } else if (key == 39) { // right arrow
      event.preventDefault();
      video.currentTime = video.currentTime + 10;
    }
  });