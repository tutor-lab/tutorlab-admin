import { createStore, applyMiddleware, Store, compose } from "redux";
import rootReducer from "./reducers";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore: MakeStore<Store> = () => {
  const sagaMiddleware = createSagaMiddleware(); //redux-saga 생성
  const middlewares = [sagaMiddleware]; //middleware 연결
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, {}, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper<Store>(configureStore, { debug: true });
