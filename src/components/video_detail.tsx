import React, { useEffect } from "react";
import { getVideoComments } from "src/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "src/redux/reducers";
import VideoComments from "./video_comments";
import "../styles/video.scss";

interface Props {
  video?: any;
}

const VideoDetail = ({ video }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoComments(video?.id.videoId));
  }, [video?.id.videoId]);

  const comments = useSelector<ReduxState, any[]>(
    ({ videos }) => videos.comments,
  );

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={video.snippet.title}
          className="embed-responsive-item"
          src={url}
        />
      </div>
      <div className="details">
        <div className='title'>{video.snippet.title}</div>
        <div className='channel'>
          <h4 className='description'>{video.snippet.description}</h4>
        </div>
        <div className='comment-box'>
          {comments.map((a, i) => (
            <div key={i}>
              <VideoComments comment={a}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
