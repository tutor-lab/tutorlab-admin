import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import createRequestSaga from "./createRequestSaga";
import { createRequestActionTypes } from "./createRequestSaga";

const INITIALIZE = "newclass/INITIALIZE";
const CHANGE_FIELD = "newclass/CHANGE_FIELD";
const NEXT_STEP = "newclass/NEXT_STEP";
const PREV_STEP = "newclass/PREV_STEP";
const [CLASSUPDATE, CLASSUPDATE_SUCCESS, CLASSUPDATE_FAILURE] =
  createRequestActionTypes("newclass/UPDATE");

export const Initialize = createAction(INITIALIZE);
export const ChangeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);
export const NextStep = createAction(NEXT_STEP, (form) => form);
export const PrevStep = createAction(PREV_STEP, (form) => form);
export const ClassUpdate = createAction(CLASSUPDATE, (form) => form);

export function UpdateSaga() {
  createRequestSaga(CLASSUPDATE /*axios*/);
}

const initialState = {
  update: {
    step: 1,
    image: "",
    maintitle: "",
    subheading: "",
    introduction: "",
    classtype: "개발",
    language: "Java",
    level: "초급",
    PpricePerHour: 0,
    PtimePerClass: 0,
    PnumOfTimes: 0,
    GpricePerHour: 0,
    GtimePerClass: 0,
    GnumOfTimes: 0,
    online: "off",
    offline: "off",
    discuss: "off",
    personal: "off",
    group: "off",
  },
  updateSuccess: null,
  updateError: null,
};

const Update = handleActions(
  {
    [INITIALIZE]: (state) => ({ ...state, ...initialState }),
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [NEXT_STEP]: (state) =>
      produce(state, (draft) => {
        draft["update"]["step"] += 1;
      }),
    [PREV_STEP]: (state) =>
      produce(state, (draft) => {
        draft["update"]["step"] -= 1;
      }),
    [CLASSUPDATE_SUCCESS]: (state, { payload: updateSuccess }) => ({
      ...state,
      updateSuccess,
      updateError: null,
    }),
    [CLASSUPDATE_FAILURE]: (state, { payload: updateError }) => ({
      ...state,
      updateSuccess: null,
      updateError,
    }),
  },
  initialState
);

export default Update;
