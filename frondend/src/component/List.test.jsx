/* eslint-disable */
import { render, screen, fireEvent } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import List from "./List"; // Adjust the path as necessary
import axios from "axios";

// Mock axios
vi.mock("axios");

const mockTodos = [
  {
    _id: "1",
    title: "Test Todo 1",
    description: "Description 1",
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "Test Todo 2",
    description: "Description 2",
    createdAt: new Date(),
  },
];

describe("List Component", () => {
  let setUpdateMock;

  beforeEach(() => {
    // Reset mocks before each test
    setUpdateMock = vi.fn();

    // Mock axios.get to return the mock todos
    axios.get.mockResolvedValue({ data: { data: { todos: mockTodos } } });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders todos fetched from API", async () => {
    render(<List update={false} setUpdate={setUpdateMock} />);

    // Wait for the todos to be displayed
    const todo1 = await screen.findByText(/Test Todo 1/i);
    const todo2 = await screen.findByText(/Test Todo 2/i);

    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
  });

  it("calls handleDelete and updates the list when a todo is deleted", async () => {
    axios.delete.mockResolvedValue({});

    render(<List update={false} setUpdate={setUpdateMock} />);

    // Wait for the todos to be displayed
    await screen.findByText(/Test Todo 1/i);

    // Find the delete button for the first todo and click it
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    // Check if the delete request was made
    expect(axios.delete).toHaveBeenCalledWith(
      "http://localhost:3000/api/v1/todos/1"
    );

    // Check if the todo was removed from the list
    expect(screen.queryByText(/Test Todo 1/i)).not.toBeInTheDocument();
  });

  it("shows no records when there are no todos", async () => {
    // Mock axios to return an empty array
    axios.get.mockResolvedValueOnce({ data: { data: { todos: [] } } });

    render(<List update={false} setUpdate={setUpdateMock} />);

    const noRecordMessage = await screen.findByText(/no record/i);
    expect(noRecordMessage).toBeInTheDocument();
  });
});
