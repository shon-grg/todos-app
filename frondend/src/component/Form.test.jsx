/* eslint-disable */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import { vi } from "vitest";
import Form from "./Form";

vi.mock("axios");

describe("Form Component", () => {
  it("should render form inputs and button", () => {
    render(<Form setUpdate={() => {}} />);

    expect(screen.getByPlaceholderText("Item...")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  it("should update input values on change", () => {
    render(<Form setUpdate={() => {}} />);

    const titleInput = screen.getByPlaceholderText("Item...");
    const descriptionInput = screen.getByPlaceholderText("Description...");

    fireEvent.change(titleInput, { target: { value: "New Task" } });
    fireEvent.change(descriptionInput, { target: { value: "Description" } });

    expect(titleInput.value).toBe("New Task");
    expect(descriptionInput.value).toBe("Description");
  });

  it("should show error if fields are empty on submit", () => {
    render(<Form setUpdate={() => {}} />);
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.click(addButton);

    expect(
      screen.getByText("Title and description are required.")
    ).toBeInTheDocument();
  });

  it("should call axios.post with correct data on submit", async () => {
    const mockSetUpdate = vi.fn();
    axios.post.mockResolvedValueOnce({ data: "mockData" });

    render(<Form setUpdate={mockSetUpdate} />);

    fireEvent.change(screen.getByPlaceholderText("Item..."), {
      target: { value: "New Task" },
    });
    fireEvent.change(screen.getByPlaceholderText("Description..."), {
      target: { value: "Description" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:3000/api/v1/todos",
      {
        title: "New Task",
        description: "Description",
      }
    );
    expect(mockSetUpdate).toHaveBeenCalledWith({ data: "mockData" });
  });
});
