import { useEffect, useState } from 'react';
import { TextField, Button, Snackbar, Alert} from '@mui/material';
import constants from '../utils/constants';
import axios from "axios";

// This could be moved to env file, added here just for demo purpose
const baseURL = "http://localhost:5000";

const Question2 = () => {
  const [errorText, setErrorText] = useState("");
	const [output, setOutput] = useState(null);
	const [input, setInput] = useState(0);
	const [arr1, setArr1] = useState([]);
	const [arr2, setArr2] = useState([]);
  const [showSnackbar, setShowSnackBar] = useState(false);

  function validateInput(input) {
    input = input.trim();
    let integerArray = [];
    // filter is to remove empty
    input.split(",").forEach((e) => integerArray.push(parseInt(e)));
    let isNaNFound = false;
    let validatedInputArray = integerArray = integerArray.filter((e) => {
      if(isNaN(e)) {
        isNaNFound = true;
      } else {
        return e;
      }
    });
    if(isNaNFound) setErrorText(constants.invalidIntegerInput);
    else if(validatedInputArray.length % 2 !== 0) setErrorText(constants.inavlidIntegerCount);
    else {
      setErrorText("");
      return validatedInputArray;
    }
  }

  useEffect(() => {
    if(errorText) {
      setArr1([]);
      setArr2([]);
      setOutput(0);
    }
  }, [errorText]);

	function minimizeArrayAbsSumDifference() {
    let inputArray = validateInput(input);
    if(inputArray) {
      inputArray.sort((a, b) => a - b); // Sort the array in aecreasing order
      // Create two empty arrays
      let arr1 = [];
      let arr2 = [];
  
      // Try to keep both arrays as much as possible as equal
      // So that the difference would be minimum
      // Iterate over the sorted array in reverse order
      for (let i = inputArray.length - 1; i >= 0; i--) {
        // Add the current element to the array with the smaller sum
        if (arr1.reduce((sum, num) => sum + num, 0) <= arr2.reduce((sum, num) => sum + num, 0)) {
          if(arr1.length === inputArray.length / 2){
            arr2.push(inputArray[i])
          } else {
            arr1.push(inputArray[i])
          }
        } else {
          if(arr2.length === inputArray.length / 2){
            arr1.push(inputArray[i])
          } else {
            arr2.push(inputArray[i]);
          }
        }
      }
      
      setArr1(arr1);
      setArr2(arr2);
      // Return the absolute difference between the sums of the two arrays
      let output = Math.abs(arr1.reduce((sum, num) => sum + num, 0) - arr2.reduce((sum, num) => sum + num, 0));

      // TODO show / hide loader for better UI/UX
      axios.post(`${baseURL}/save`, {
        input: inputArray,
        output
      }).then((response) => {
        setShowSnackBar(true);
      }).catch((error) => {
        return error;
      });

      return output;
    } 
	}

	return <><div className="form-wrapper">
		<TextField
			className="input-field"
			error={errorText ? true : false}
			label="Enter only numbers in comma separated"
			helperText={errorText}
      onChange={(e) => setInput(e.target.value)}
      type="text"
      placeholder="2,31,-5,0,6,-10,..."
		/>
		<Button
			variant="contained"
			style={{ marginTop: "2%"}}
      onClick={() => setOutput(minimizeArrayAbsSumDifference)}
      disabled={!input}
      data-testid="show-output"
		>
			Show Output
		</Button>
		<TextField
			className="input-field"
			label="Minimum possible absolute differnce is"
			defaultValue={0}
			value={output}
			style={{ marginTop: "10%" }}
      disabled
    />
    And the array's are <span>[{arr1.join(",")}]</span>{" & "}<span>[{arr2.join(",")}]</span>
	</div>
  <div>
    <Button
      variant="contained"
      style={{ marginTop: "2%"}}
      onClick={() => window.open(`${baseURL}/get`, "_blank")}
      data-testid="show-all-input-output"
    >
      Show All Input & Output
    </Button>
    <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={() => setShowSnackBar(false)}>
      <Alert onClose={() => setShowSnackBar(false)} severity="success" sx={{ width: '100%' }}>
        Data saved Successfully!
      </Alert>
    </Snackbar>
  </div>
  </>
}

export default Question2;