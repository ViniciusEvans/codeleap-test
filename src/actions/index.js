import * as types from "../redux/modules/types";

export function handleEnableButton() {
  return {
    type: types.ENABLE_BUTTON,
  };
}
export function handleDisableButton() {
  return { type: types.DISABLE_BUTTON };
}
export function disablePostButton() {
  return { type: types.DISABLE_POST };
}
export function enablePostButton() {
  return { type: types.ENABLE_POST };
}
export function handleSubmitSignup(inputSignupValue) {
  return { type: types.SUBMIT_SIGNUP, payload: { username: inputSignupValue } };
}
export function createPostSuccess() {
  return { type: types.CREATE_POST_SUCCESS };
}
export function createPostFailure(error) {
  return { type: types.CREATE_POST_FAILURE, error_message: error };
}
export function editPost(content = "", title = "", id = "") {
  return { type: types.EDIT_POST, payload: { content, title, id } };
}
export function deletePost(id = "") {
  return { type: types.DELETE_POST, id };
}
export function getPost() {
  return { type: types.GET_POST };
}
