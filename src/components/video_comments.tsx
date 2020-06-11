import React from "react";
import "./comments.scss";
import moment from "moment";
import { FaRegThumbsUp } from 'react-icons/fa';


interface Props {
  comment: any;
}

const VideoComments = (props: Props) => {
  const { comment } = props;
  const details = comment.snippet.topLevelComment.snippet;


  return (
    <>
      <div className='comment-section'>

        <div className='icon'>
          <img alt='icon' src={details.authorProfileImageUrl}/>
        </div>
        <div className="content">
          <span className='author'>{details.authorDisplayName}</span>
          <small className='published'>{moment(details.publishedAt, "YYYYMMDD").fromNow()}</small>
          <div className='comment'
               dangerouslySetInnerHTML={{ __html: details.textDisplay }}/>
          <div className='likes'>
            <FaRegThumbsUp />
            <div className="number">{details.likeCount}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoComments;
