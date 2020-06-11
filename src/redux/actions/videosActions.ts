import {
  GET_VIDEOS,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_FAIL,
  SELECT_VIDEO,
  GET_VIDEO_COMMENTS,
  GET_VIDEO_COMMENTS_SUCCESS,
  GET_VIDEO_COMMENTS_FAIL,
} from "../constants";
import {
  InitialiseSagaCall,
  SuccessSagaCall,
  FailSagaCall,
} from "src/interfaces";

export const getVideoComments = (
  videoId: string
): InitialiseSagaCall<string> => {
  return {
    type: GET_VIDEO_COMMENTS,
    payload: videoId,
  };
};

export const getVideoCommentsSuccess = (
  comments: any[]
): SuccessSagaCall<any[]> => {
  return {
    type: GET_VIDEO_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const getVideoCommentsFail = (error: unknown): FailSagaCall => {
  return {
    type: GET_VIDEO_COMMENTS_FAIL,
    payload: error,
  };
};

export const getVideos = (term: string): InitialiseSagaCall<string> => {
  return {
    type: GET_VIDEOS,
    payload: term,
  };
};

export const getVideosSuccess = (videos: any[]): SuccessSagaCall<any[]> => {
  return {
    type: GET_VIDEOS_SUCCESS,
    payload: videos,
  };
};

export const getVideosFail = (error: unknown): FailSagaCall => {
  return {
    type: GET_VIDEOS_FAIL,
    payload: error,
  };
};

export const selectedVideo = (video: any): InitialiseSagaCall<any> => {
  return {
    type: SELECT_VIDEO,
    payload: video,
  };
};
