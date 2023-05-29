import { fireEvent, render, screen } from '@testing-library/react';
import Question1 from '../Question1';

describe('Test Question One Component', () => {

  test("render the question one component with two fields", async () => {
    render(<Question1 />);
    const elements = await screen.findByLabelText("Enter your password here");
    expect(elements).toBeTruthy();
  });

  test("test calculateMinimumSteps with zero", async () => {
    render(<Question1 />);
    const password = "jvdd68A";
    const inputField = await screen.findByLabelText("Enter your password here");
    fireEvent.change(inputField, {target: {value: password}});
    const outputField = await screen.findByLabelText("Minimum Number of steps required to make your password strong");
    expect(outputField.value).toBe("0");
  });
  
  test("test calculateMinimumSteps with one", async () => {
    render(<Question1 />);
    const password = "jvdd68";
    const inputField = await screen.findByLabelText("Enter your password here");
    fireEvent.change(inputField, {target: {value: password}});
    const outputField = await screen.findByLabelText("Minimum Number of steps required to make your password strong");
    expect(outputField.value).toBe("1");
  });
  
  test("test calculateMinimumSteps with three repeating char", async () => {
    render(<Question1 />);
    const password = "jvddd";
    const inputField = await screen.findByLabelText("Enter your password here");
    fireEvent.change(inputField, {target: {value: password}});
    const outputField = await screen.findByLabelText("Minimum Number of steps required to make your password strong");
    expect(outputField.value).not.toBe("1");
  });
  
  test("test calculateMinimumSteps with more than 6 chars with repeating 3 chars ", async () => {
    render(<Question1 />);
    const password = "password12Asss";
    const inputField = await screen.findByLabelText("Enter your password here");
    fireEvent.change(inputField, {target: {value: password}});
    const outputField = await screen.findByLabelText("Minimum Number of steps required to make your password strong");
    expect(outputField.value).toBe("1");
  });
  
  test("test calculateMinimumSteps with more than 20 chars", async () => {
    render(<Question1 />);
    const password = "Testpasswordtestpass12";
    const inputField = await screen.findByLabelText("Enter your password here");
    fireEvent.change(inputField, {target: {value: password}});
    const outputField = await screen.findByLabelText("Minimum Number of steps required to make your password strong");
    expect(outputField.value).not.toBe("1");
  });
  
  test("test calculateMinimumSteps with 20 chars", async () => {
    render(<Question1 />);
    const password = "Testpasswordtestpass";
    const inputField = await screen.findByLabelText("Enter your password here");
    fireEvent.change(inputField, {target: {value: password}});
    const outputField = await screen.findByLabelText("Minimum Number of steps required to make your password strong");
    expect(outputField.value).not.toBe("1");
  });
});
