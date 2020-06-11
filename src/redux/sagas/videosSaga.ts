import { takeEvery, put, call, all, fork } from "redux-saga/effects";
import { GET_VIDEOS, GET_VIDEO_COMMENTS } from "../constants";
import {
  getVideosSuccess,
  getVideosFail,
  getVideoCommentsSuccess,
  getVideoCommentsFail,
} from "../actions";
import youtubeSearch from "youtube-api-search";
import { InitialiseSagaCall } from "src/interfaces";
import axios from "axios";

/**
 * Function that gets the search-term and returns a list of videos
 * @param {*} term
 */
const videoSearchFn = async (term: string) => {
  return new Promise((resolve, reject) =>
    youtubeSearch(
      { key: process.env.REACT_APP_API_KEY, term },
      (response, error) => {
        if (error) {
          reject(error);
        }
        resolve(response);
      }
    )
  );
};

const getVideoCommentsCall = (videoId: string) => {
  return axios
    .get(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => res.data.items);
};

function* getVideoCommentsFn({ payload }: InitialiseSagaCall<string>) {
  try {
    if (payload) {
      const comments = yield call(getVideoCommentsCall, payload);
      yield put(getVideoCommentsSuccess(comments));
    }
  } catch (error) {
    yield put(getVideoCommentsFail(error));
  }
}

function* getVideosFn({ payload }: InitialiseSagaCall<string>) {
  try {
    const videos = yield call(videoSearchFn, payload);
    yield put(getVideosSuccess(videos));
  } catch (error) {
    yield put(getVideosFail(error));
  }
}

export function* watchGetVideos() {
  yield takeEvery(GET_VIDEOS, getVideosFn);
}
export function* watchGetVideoComments() {
  yield takeEvery(GET_VIDEO_COMMENTS, getVideoCommentsFn);
}

export default function* rootSaga() {
  yield all([fork(watchGetVideos), fork(watchGetVideoComments)]);
}
