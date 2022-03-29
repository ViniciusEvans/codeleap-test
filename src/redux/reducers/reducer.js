import * as types from "../modules/types";

const reducerInitialState = {
  stateButton: true,
};
const signupInitialState = {
  submitSignup: false,
  payload: { username: "" },
};

export default function reducer(state = reducerInitialState, action) {
  switch (action.type) {
    case types.ENABLE_BUTTON: {
      const newState = { ...state };
      newState.stateButton = false;
      return newState;
    }
    case types.DISABLE_BUTTON: {
      const newState = { ...state };
      newState.stateButton = true;
      return newState;
    }

    default:
      return state;
  }
}

export function reducerSignup(state = signupInitialState, action) {
  switch (action.type) {
    case types.SUBMIT_SIGNUP:
      const newState = { ...state };
      newState.submitSignup = true;
      newState.payload.username = action.payload.username;
      return newState;

    default:
      return state;
  }
}
