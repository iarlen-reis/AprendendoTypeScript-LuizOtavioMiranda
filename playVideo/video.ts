interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  startEvents(): void;
}

export class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  startEvents(): void {
    this.playButton.addEventListener("click", () => {
      this.playToggle();
    });

    this.stopButton.addEventListener("click", () => {
      this.stop();
    });
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = "Pause";
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = "Play";
    }
  }

  stop(): void {
    this.playButton.innerText = "Play";

    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector(".video") as HTMLVideoElement,
  playButton: document.querySelector(".play") as HTMLButtonElement,
  stopButton: document.querySelector(".stop") as HTMLButtonElement,
});

videoPlayer.startEvents();
