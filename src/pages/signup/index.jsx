import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "../../actions";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [inputSignupValue, setInputSignupValue] = useState("");
  const navigate = useNavigate();
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
      dispatch(actions.handleEnableButton());
      return;
    }

    dispatch(actions.handleDisableButton());
  }, [inputSignupValue]);

  function handleSubmit() {
    dispatch(actions.handleSubmitSignup(inputSignupValue));
    navigate("/");
  }

  return (
    <div className="signup">
      <div className="container-form-signup">
        <div className="container-signup-header">
          <h1>Welcome to CodeLeap network!</h1>
        </div>
        <form className="form-signup-input">
          <p className="label-input">Please enter your username</p>
          <ThemeProvider theme={theme}>
            <TextField
              className="input-signup"
              id="outlined-basic"
              placeholder="John Doe"
              variant="outlined"
              value={inputSignupValue}
              onChange={(e) => setInputSignupValue(e.target.value)}
            />
            <Stack direction="row-reverse" spacing={2}>
              <Button
                className="submit-form-button"
                disabled={stateButton.reducer.stateButton}
                variant="contained"
                onClick={handleSubmit}
              >
                ENTER
              </Button>
            </Stack>
          </ThemeProvider>
        </form>
      </div>
    </div>
  );
}

export default Signup;
