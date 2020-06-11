import React from "react";
import { selectedVideo } from "src/redux/actions";
import { useDispatch } from "react-redux";

interface Props {
  video: any;
}

const VideoListItem = ({ video }: Props) => {
  const dispatch = useDispatch();
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li
      onClick={() => dispatch(selectedVideo(video))}
      className="list-group-item"
    >
      <div className="video-list media">
        <div className="media-left">
          <img alt="video thumbnail" className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
