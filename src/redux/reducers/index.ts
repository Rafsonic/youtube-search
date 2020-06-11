import { combineReducers } from "redux";
import videosReducer, {
  VideosState,
  defaultState as videoState,
} from "./videosReducer";

export const defaultState = {
  videos: videoState,
};

export interface ReduxState {
  videos: VideosState;
}

export default combineReducers<ReduxState>({ videos: videosReducer });
