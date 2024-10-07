import { useRef, useState } from "react";
import "./styles/video-player.css";
const VIDEO_SRC =
  "//images-assets.nasa.gov/video/One Small Step/One Small Step~orig.mp4";

function VideoPlayer() {
  const [isPlaying, setPlaying] = useState(false);
  const videoRef = useRef();
  const onPause = () => setPlaying(false);
  const onPlay = () => setPlaying(true);

  const onControlClick = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <section>
      <video
        width="480"
        ref={videoRef}
        src={VIDEO_SRC}
        controls
        onPlay={onPlay}
        onPause={onPause}
      ></video>
      <button className="control-button" onClick={onControlClick}>
        {isPlaying ? "pause" : "play"}
      </button>
    </section>
  );
}

export default function VideoPlayerDemo() {
  return <VideoPlayer></VideoPlayer>;
}
