import * as types from "../redux/modules/types";

export function handleEnableButton() {
  return {
    type: types.ENABLE_BUTTON,
  };
}
export function handleDisableButton() {
  return { type: types.DISABLE_BUTTON };
}
export function handleSubmitSignup(inputSignupValue) {
  return { type: types.SUBMIT_SIGNUP, payload: { username: inputSignupValue } };
}
