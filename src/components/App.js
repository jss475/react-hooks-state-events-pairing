import video from "../data/video.js";
import VideoComp from './VideoComp'
import ThumbButtons from "./ThumbButtons.js";
import Comments from './Comments'


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">

      <VideoComp video = {video} />
      <br /> 
      <ThumbButtons video = {video} />
      <br />
      <Comments video = {video} />
    </div>
  );
}

export default App;
