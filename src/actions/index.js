export function handleEnableButton(inputSignupValue) {
  return {
    type: "ENABLE_BUTTON",
    payload: { username: inputSignupValue },
  };
}
export function handleDisableButton() {
  return { type: "DISABLE_BUTTON" };
}
