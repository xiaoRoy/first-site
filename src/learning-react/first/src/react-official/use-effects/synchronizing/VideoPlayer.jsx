import { useEffect, useState, useRef } from "react";
import "./video-player.css";
function VideoPlayer({ src, isPlaying }) {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        console.log("Calling video.play()");
        video.play();
      } else {
        console.log("Calling video.pause()");
        video.pause();
      }
    }
  }, [isPlaying]);
  return <video ref={videoRef} src={src} loop playsInline></video>;
}

export default function VideoPlayerDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const onPlayClicked = () => {
    setIsPlaying(!isPlaying);
  };
  const buttonInfo = isPlaying ? "Pause" : "Play";

  const [text, setText] = useState("");
  
  return (
    <div className="video-player-container">
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={onPlayClicked}>{buttonInfo}</button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      ></VideoPlayer>
    </div>
  );
}
