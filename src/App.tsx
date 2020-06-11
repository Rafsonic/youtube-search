import React, { useEffect } from "react";
import _ from "lodash";
// import youtubeSearch, { YouTubeSearchResults, YouTubeSearchPageResults,YouTubeSearchOptions } from "youtube-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import "./styles/app.scss";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "./redux/actions";
import { YouTubeSearchResults } from "youtube-api-search";
import { ReduxState } from "./redux/reducers";

const App = () => {
  const dispatch = useDispatch();

  const selectedVideo = useSelector<ReduxState,
    YouTubeSearchResults | undefined>(({ videos }) => videos.selectedVideo);

  /**
   * Lifecycle method that is being called just after the component did mount
   */
  useEffect(() => {
    dispatch(getVideos("liverpool"));
  }, []);

  /**
   * Lifecycle method that is responsible to make the component visible to the browser
   */
  const videoSearch = _.debounce((term) => {
    videoSearch(term);
  }, 300);

  return (
    <div className='youtube'>
      <SearchBar onSearchTermChange={videoSearch}/>
      <div className="section">
        <VideoDetail video={selectedVideo}/>
        <VideoList/>
      </div>
    </div>
  );
};

export default App;
