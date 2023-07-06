import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { next, useCurrentLesson } from "../store/slices/player";

export const Video = () => {
  const dispatch = useDispatch();
  const { currentLesson } = useCurrentLesson();

  const handlePlayNext = () => {
    dispatch(next());
  };

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNext}
        url={`https://youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  );
};
