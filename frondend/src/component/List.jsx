/* eslint-disable */

import { useState, useEffect, onToggleItem } from "react";
import axios from "axios";
import styled from "styled-components";

const ListContainer = styled.div`
  margin-top: 40px;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid #5a3e2b;
  background-color: #f4a226;
  border-radius: 10px;
  border-left: 10px;
  padding: 30px;
`;

const Checkbox = styled.input`
  margin-right: 20px;
`;

const TodoDetails = styled.div`
  flex: 1;
`;

const DeleteButton = styled.button`
  background-color: #76c7ad;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #2cd79e;
  }
`;

function List({ update, setUpdate }) {
  const [todos, setTodos] = useState([]);
  const [checkId, setId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/todos")
      .then((response) => {
        setTodos(response.data.data.todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, [update]);
  console.log(update);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/todos/${id}`)
      .then((response) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        setUpdate(response);
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      });
  };

  return (
    <div className="list">
      <ListContainer>
        <ul>
          {todos.length === 0 ? (
            <li>
              <h2>No Record</h2>
            </li>
          ) : (
            todos.map((todo, index) => (
              <li key={index}>
                <TodoItem>
                  <Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        setId(todo._id);
                      } else {
                        setId("");
                      }
                    }}
                    type="checkbox"
                    id={`checkbox-${todo._id}`}
                  />
                  <TodoDetails>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>
                      Created At: {new Date(todo.createdAt).toLocaleString()}
                    </p>
                  </TodoDetails>

                  <DeleteButton
                    hidden={todo._id != checkId}
                    onClick={() => handleDelete(todo._id)}
                  >
                    Delete
                  </DeleteButton>
                </TodoItem>
              </li>
            ))
          )}
        </ul>
      </ListContainer>
    </div>
  );
}

export default List;
