const initialState = {
  stateButton: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ENABLE_BUTTON": {
      const newState = { ...state };
      newState.stateButton = false;
      return newState;
    }
    case "DISABLE_BUTTON": {
      const newState = { ...state };
      newState.stateButton = true;
      return newState;
    }

    default:
      return state;
  }
}
