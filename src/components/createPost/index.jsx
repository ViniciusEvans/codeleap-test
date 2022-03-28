import "./style.scss";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

function CreatePost() {
  const [inputContentValue, setInputContentValue] = useState("");
  const [inputTitleValue, setInputTitleValue] = useState("");

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(0, 0, 0)",
      },
    },
  });

  return (
    <div className="create-post-container">
      <div className="container--header">
        <h1 className="header">What’s on your mind?</h1>
      </div>
      <div className="create-post-form">
        <form>
          <ThemeProvider theme={theme}>
            <div className="form--input--title">
              <p className="label title-input-label">Title</p>
              <TextField
                className="input input-title"
                id="outlined-basic"
                label="Content"
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
                label="Content"
                value={inputContentValue}
                onChange={(e) => setInputContentValue(e.target.value)}
              />
            </div>
            <Stack direction="row-reverse" spacing={2}>
              <Button className="submit-post-button" variant="contained">
                CREATE
              </Button>
            </Stack>
          </ThemeProvider>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
