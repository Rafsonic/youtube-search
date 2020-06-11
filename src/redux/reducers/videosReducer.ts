import {
  GET_VIDEOS_FAIL,
  GET_VIDEOS_SUCCESS,
  SELECT_VIDEO,
  GET_VIDEO_COMMENTS_SUCCESS,
  GET_VIDEO_COMMENTS_FAIL,
} from "../constants";

export const defaultState = {
  videos: [],
  selectedVideo: undefined,
  comments: [],
};

export interface VideosState {
  videos: any[];
  selectedVideo?: any;
  comments: any[];
}

export default (state: VideosState = defaultState, action: any) => {
  switch (action.type) {
    case GET_VIDEOS_SUCCESS:
      return { ...state, videos: action.payload };
    case GET_VIDEOS_FAIL:
      return state;
    case GET_VIDEO_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload };
    case GET_VIDEO_COMMENTS_FAIL:
      return state;
    case SELECT_VIDEO:
      return {
        ...state,
        selectedVideo: action.payload,
      };
    default:
      return state;
  }
};
