import { fireEvent, render, screen } from '@testing-library/react';
import Question2 from '../Question2';

describe('Test Question two Component', () => {

  test("render the question two component with two fields", async () => {
    render(<Question2 />);
    const elements = await screen.findByLabelText("Enter only numbers in comma separated");
    expect(elements).toBeTruthy();
  });
  
  test("Test minimizeArrayAbsSumDifference", async () => {
    render(<Question2 />);
    const textInput = await screen.findByLabelText("Enter only numbers in comma separated");
    fireEvent.change(textInput, {target: {value: "2,4,5,6"}});
    const button = await screen.findByTestId("show-output");
    fireEvent.click(button);
    const outputField = await screen.findByLabelText("Minimum possible absolute differnce is");
    expect(outputField.value).toBe("1");
  });

  test("Test minimizeArrayAbsSumDifference with NaN", async () => {
    render(<Question2 />);
    const textInput = await screen.findByLabelText("Enter only numbers in comma separated");
    fireEvent.change(textInput, {target: {value: "2,4,e,5,6"}});
    const button = await screen.findByTestId("show-output");
    fireEvent.click(button);
    const outputField = await screen.findByLabelText("Minimum possible absolute differnce is");
    expect(outputField.value).not.toBe("1");
  });
  
  test("Test minimizeArrayAbsSumDifference with non even counts", async () => {
    render(<Question2 />);
    const textInput = await screen.findByLabelText("Enter only numbers in comma separated");
    fireEvent.change(textInput, {target: {value: "2,5,6"}});
    const button = await screen.findByTestId("show-output");
    fireEvent.click(button);
    const outputField = await screen.findByLabelText("Minimum possible absolute differnce is");
    expect(outputField.value).not.toBe("1");
  });
  
  test("Test minimizeArrayAbsSumDifference second array to be filled first", async () => {
    render(<Question2 />);
    const textInput = await screen.findByLabelText("Enter only numbers in comma separated");
    fireEvent.change(textInput, {target: {value: "2,5,6,4,32,4"}});
    const button = await screen.findByTestId("show-output");
    fireEvent.click(button);
    const outputField = await screen.findByLabelText("Minimum possible absolute differnce is");
    expect(outputField.value).not.toBe("1");
  });

  test("Test minimizeArrayAbsSumDifference first array to be filled first", async () => {
    render(<Question2 />);
    const textInput = await screen.findByLabelText("Enter only numbers in comma separated");
    fireEvent.change(textInput, {target: {value: "1,25,1,6,21,1"}});
    const button = await screen.findByTestId("show-output");
    fireEvent.click(button);
    const outputField = await screen.findByLabelText("Minimum possible absolute differnce is");
    expect(outputField.value).toBe("1");
  });

  test("Test Show All Input & Output ", async () => {
    render(<Question2 />);
    const button = await screen.findByTestId("show-all-input-output");
    fireEvent.click(button);
    expect(window.location.origin).toEqual("http://localhost");
  });
});

