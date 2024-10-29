/* eslint-disable */
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import SignUpForm from "./SignUpForm";
import signUp from "../js/signUp";

vi.mock("../js/signUp");

describe("SignUpForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all input fields, labels, and submit button", () => {
    render(<SignUpForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });

  it("updates name, email, password, and confirm password fields on change", () => {
    render(<SignUpForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password123" },
    });

    expect(nameInput.value).toBe("John Doe");
    expect(emailInput.value).toBe("johndoe@example.com");
    expect(passwordInput.value).toBe("password123");
    expect(confirmPasswordInput.value).toBe("password123");
  });

  it("displays an error message if passwords do not match", () => {
    render(<SignUpForm />);

    const passwordInput = screen.getByLabelText(/password/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    const submitButton = screen.getByRole("button", { name: /sign up/i });

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password321" },
    });
    fireEvent.click(submitButton);

    expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
    expect(signUp).not.toHaveBeenCalled();
  });

  it("calls signUp with name, email, password, and confirm password on valid submission", () => {
    render(<SignUpForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    const submitButton = screen.getByRole("button", { name: /sign up/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password123" },
    });
    fireEvent.click(submitButton);

    expect(signUp).toHaveBeenCalledWith(
      "John Doe",
      "johndoe@example.com",
      "password123",
      "password123"
    );
    expect(
      screen.queryByText(/passwords do not match/i)
    ).not.toBeInTheDocument();
  });
});
