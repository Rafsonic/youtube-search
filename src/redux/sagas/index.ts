import { all } from "redux-saga/effects";
import videoSaga from "./videosSaga";

export default function* root() {
  yield all([videoSaga()]);
}
