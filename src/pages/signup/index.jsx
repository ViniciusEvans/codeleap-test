import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { handleEnableButton, handleDisableButton } from "../../actions";

function Signup() {
  const [inputSignupValue, setInputSignupValue] = useState("");

  const stateButton = useSelector((state) => state);
  const dispatch = useDispatch();
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(0, 0, 0)",
      },
    },
  });
  useEffect(() => {
    if (inputSignupValue) {
      dispatch(handleEnableButton(inputSignupValue));
      return;
    }

    dispatch(handleDisableButton());
  }, [inputSignupValue]);

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
            value={inputSignupValue}
            onChange={(e) => setInputSignupValue(e.target.value)}
          />
          <Stack direction="row-reverse" spacing={2}>
            <ThemeProvider theme={theme}>
              <Button
                className="submit-form-button"
                disabled={stateButton.stateButton}
                variant="contained"
              >
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
