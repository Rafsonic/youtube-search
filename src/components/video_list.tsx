import React from "react";
import VideoListItem from "./video_list_item";
import "../styles/video-list.scss";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "src/redux/reducers";
import { selectedVideo } from "../redux/actions";

const VideoList = () => {
  const dispatch = useDispatch();

  const videos = useSelector<ReduxState, any[]>(({ videos }) => videos.videos);
  const videoItems = videos.map((video) => {
    return <VideoListItem key={video.etag} video={video}/>;
  });

  dispatch(selectedVideo(videos[0]));


  return <ul className="col-md-4 list-group video-list">{videoItems}</ul>;
};

export default VideoList;
