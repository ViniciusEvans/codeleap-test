import "./style.scss";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

function PostForm({ type = "CREATE_POST" }) {
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
    <div className="post-form-container">
      <div className="container--header">
        <h1 className="header">
          {type === "CREATE_POST" ? "What’s on your mind?" : "Edit item"}
        </h1>
      </div>
      <div className="post--section--form">
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
