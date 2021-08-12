import { UpdateSaga } from "../reducers/update";
export default function* rootSaga() {
  yield all([UpdateSaga()]);
}

/*
export default function* rootSaga() {
  console.log("exmaple saga");
}
*/
