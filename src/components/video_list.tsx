import React from "react";
import VideoListItem from "./video_list_item";
import  "../styles/video-list.scss";
import { useSelector } from "react-redux";
import { ReduxState } from "src/redux/reducers";

const VideoList = () => {
  const videos = useSelector<ReduxState, any[]>(({ videos }) => videos.videos);
  const videoItems = videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return <ul className="col-md-4 list-group video-list">{videoItems}</ul>;
};

export default VideoList;
