import "./style.scss";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions/index";

function PostForm({ type = "CREATE_POST" }) {
  const [inputContentValue, setInputContentValue] = useState("");
  const [inputTitleValue, setInputTitleValue] = useState("");
  const dispatch = useDispatch();

  const reducerInitialState = useSelector((state) => state);
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(0, 0, 0)",
      },
    },
  });

  useEffect(() => {
    if (type === "EDIT_POST") {
      setInputContentValue(
        reducerInitialState.reducer.editPostSetup.contentValue
      );
      setInputTitleValue(reducerInitialState.reducer.editPostSetup.titleValue);
    }
  }, []);

  useEffect(() => {
    if (!inputContentValue || !inputTitleValue) {
      dispatch(actions.handleDisableButton());
      return;
    }
    dispatch(actions.handleEnableButton());
  }, [inputContentValue, inputTitleValue]);

  async function handlePost(e) {
    e.preventDefault();
    if (reducerInitialState.reducer.stateButton) {
      return;
    }
    if (!inputContentValue || !inputTitleValue) {
      return;
    }

    const payload = {
      username: reducerInitialState.reducerSignup.payload.username,
      title: inputTitleValue,
      content: inputContentValue,
    };
    try {
      await createEditPost(
        payload,
        type === "EDIT_POST" ? "PATCH" : "POST",
        type === "EDIT_POST"
          ? "/" + reducerInitialState.reducer.editPostSetup.id + "/"
          : "/"
      );
      dispatch(actions.createPostSuccess());
    } catch (error) {
      dispatch(actions.createPostFailure(error.message));
    } finally {
      setInputContentValue("");
      setInputTitleValue("");
      dispatch(actions.handleDisableButton());
      if (type === "EDIT_POST") {
        dispatch(actions.editPost());
      }
      dispatch(actions.getPost());
    }
  }
  async function createEditPost(payload, request, id = "/") {
    const response = await fetch("https://dev.codeleap.co.uk/careers" + id, {
      method: request,
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
  return (
    <div className="post-form-container">
      <div className="container--header">
        <h1 className="header">
          {type === "CREATE_POST" ? "What’s on your mind?" : "Edit item"}
        </h1>
      </div>
      <div className="post--section--form">
        <form onSubmit={(e) => handlePost(e)}>
          <ThemeProvider theme={theme}>
            <div className="form--input--title">
              <p className="label title-input-label">Title</p>
              <TextField
                className="input input-title"
                id="outlined-basic"
                placeholder="Hello World"
                variant="outlined"
                value={inputTitleValue}
                onChange={(e) => setInputTitleValue(e.target.value)}
              />
            </div>
            <div className="form--input--content">
              <p className="label content-input-label">Content</p>
              <TextField
                className="input input-content"
                id="outlined-multiline-static"
                multiline
                maxRows={4}
                placeholder="Content Here"
                value={inputContentValue}
                onChange={(e) => setInputContentValue(e.target.value)}
              />
            </div>
            <Stack direction="row-reverse" spacing={2}>
              <Button
                className="submit-post-button"
                disabled={reducerInitialState.reducer.stateButton}
                variant="contained"
                type="submit"
              >
                {type === "CREATE_POST" ? "CREATE" : "SAVE"}
              </Button>
            </Stack>
          </ThemeProvider>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
