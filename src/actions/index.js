export default function handleEnableButton(inputSignupValue) {
  return {
    type: "ENABLE_BUTTON",
    payload: { username: inputSignupValue },
  };
}
export function handleDisablButton() {
  return { type: "DISABLE_BUTTON" };
}
