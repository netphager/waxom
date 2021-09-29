
const playButton = document.querySelector("#playPauseButton");
const videoPlayer = document.querySelector("#videoPlayer");
let isPlay = false;
const videoBox = document.querySelector(".video-box");
const closePlayer = document.querySelector(".close-player");
const videoIntro = document.querySelector(".video-intro-inner");

playButton.addEventListener("click", () => {
  videoIntro.classList.remove("video-controller");
  playPauseVideo();
});

closePlayer.addEventListener("click", () => {
  videoPlayer.pause();
  isPlay = false;
  videoBox.classList.add("video-box-hidden");
  videoIntro.classList.add("video-controller");
});

function playPauseVideo() {
  if (!isPlay) {
    videoPlayer.play();
    isPlay = true;
    videoBox.classList.remove("video-box-hidden");
  } else {
    videoPlayer.pause();
    isPlay = false;
  }
}
