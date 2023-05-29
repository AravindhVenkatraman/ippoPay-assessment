import { useState } from 'react';
import {FormGroup, FormControl, FormHelperText, TextField} from '@mui/material';
import constants from '../utils/constants';

const Question1 = () => {
  const [errorText, setErrorText] = useState("");
  const [passwordLength, setPasswordLength] = useState(0);
  const [output, setOutput] = useState(null);
  

  const onPasswordChange = (event) => {
    let password = event.target.value;
    setErrorText("");
    setPasswordLength(password.length);
    if(!(!isCharsRepeatingThrice(password) && password.length >= 6 &&
      password.length <= 20 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password)
    )) {
      setErrorText(constants.weakPasswordMessage);
    }
    calculateMinimumSteps(password);
  }

  // check if the password has three repeating characters
  const isCharsRepeatingThrice = (password) => {
    let isCharRepeatingThrice = false;
    if(!password) return isCharRepeatingThrice;
    for (let i = 0; i < password.length; i++) {
      if(password[i] === password[i+1] && password[i+1] === password[i+2])
        isCharRepeatingThrice = true; 
    }
    return isCharRepeatingThrice;
  }

  // calculate the minimum steps requires to make the password stronger
  const calculateMinimumSteps = (password) => {
    let length = password.length;
    let steps = 0;
    if(length < 6) {
      steps = 6 - length;
      if(isCharsRepeatingThrice(password)) {
        steps += 2;
        if(length > 3) {
          steps += !/[a-z]/.test(password) ? 1 : 0;
          steps += !/[A-Z]/.test(password) ? 1 : 0;
          steps += !/[0-9]/.test(password) ? 1 : 0;
        }
      }
    } else if(length >= 6 && length < 20) {
      if(isCharsRepeatingThrice(password)) {
        steps += 1
      }
      steps += !/[a-z]/.test(password) ? 1 : 0;
      steps += !/[A-Z]/.test(password) ? 1 : 0;
      steps += !/[0-9]/.test(password) ? 1 : 0;
    } else if(length > 20) {
      steps += length - 20;
      steps += !/[a-z]/.test(password) ? 2 : 0;
      steps += !/[A-Z]/.test(password) ? 2 : 0;
      steps += !/[0-9]/.test(password) ? 2 : 0;
    } else if (length === 20) {
      steps += !/[a-z]/.test(password) ? 2 : 0;
      steps += !/[A-Z]/.test(password) ? 2 : 0;
      steps += !/[0-9]/.test(password) ? 2 : 0;
    }
    setOutput(steps);
  }

  return <div className="form-wrapper">
    <FormGroup>
      <FormControl>
        <TextField
          error={errorText ? true : false}
          label="Enter your password here"
          helperText={errorText}
          onChange={onPasswordChange}
        />
          <FormHelperText title={errorText} />
          <div style={{textAlign: "end", fontSize: "10px"}}>{`length: ${passwordLength}`}</div>
      </FormControl>

      <FormControl style={{marginTop: "1em"}}>
        <TextField
          label="Minimum Number of steps required to make your password strong"
          value={output}
          disabled
          defaultValue={0}
        />
      </FormControl>
    </FormGroup>
  </div>
}

export default Question1;