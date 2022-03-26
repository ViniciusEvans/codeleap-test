import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import "./style.scss";

function Signup() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(0, 0, 0)",
      },
    },
  });

  return (
    <div className="signup">
      <div className="container-form-signup">
        <div className="container-signup-header">
          <h1>Welcome to CodeLeap network!</h1>
        </div>
        <form className="form-signup-input">
          <p className="label-input">Please enter your username</p>
          <TextField
            className="input-signup"
            id="outlined-basic"
            label="your name"
            variant="outlined"
          />
          <Stack direction="row-reverse" spacing={2}>
            <ThemeProvider theme={theme}>
              <Button className="submit-form-button" variant="contained">
                ENTER
              </Button>
            </ThemeProvider>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default Signup;
