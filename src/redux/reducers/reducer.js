import * as types from "../modules/types";

const reducerInitialState = {
  stateButton: true,
  stateCreatePost: true,
  getPosts: true,
  createPostFailure: false,
  editPostSetup: { showModal: false, contentValue: "", titleValue: "" },
  deletePostSetup: { showModal: false, id: "" },
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
    case types.DISABLE_POST: {
      const newState = { ...state };
      newState.stateCreatePost = true;
      return state;
    }
    case types.ENABLE_POST: {
      const newState = { ...state };
      newState.stateCreatePost = false;
      return newState;
    }
    case types.CREATE_POST_FAILURE: {
      return state;
    }
    case types.CREATE_POST_SUCCESS: {
      return state;
    }
    case types.GET_POST: {
      const newState = { ...state };
      newState.getPosts = !newState.getPosts;
      return newState;
    }
    case types.EDIT_POST: {
      const newState = { ...state };
      newState.editPostSetup = {
        showModal: !newState.editPostSetup.showModal,
        contentValue: action.payload.content,
        titleValue: action.payload.title,
        id: action.payload.id,
      };

      return newState;
    }
    case types.DELETE_POST: {
      const newState = { ...state };
      newState.deletePostSetup = {
        showModal: !newState.deletePostSetup.showModal,
        id: action.id,
      };
      console.log(newState);
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
