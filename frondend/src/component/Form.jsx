/* eslint-disable */
import { useState } from "react";
import axios from "axios";

function Form({ setUpdate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    axios
      .post("http://localhost:3000/api/v1/todos", { title, description })
      .then((result) => {
        console.log(result);
        // Reset form fields after successful submission
        setTitle("");
        setDescription("");
        setError("");
        setUpdate(result);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to add task. Please try again.");
      });
  };

  return (
    <>
      <form className="add-form">
        <input
          type="text"
          placeholder="Item..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}

export default Form;
