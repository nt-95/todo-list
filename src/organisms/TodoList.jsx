import React, { useCallback, useState } from "react";
import AddForm from "./AddForm";
import List from "../organisms/List";
import Heading from "../atoms/Heading";
import "./TodoList.css";

const TodoList = () => {
  const [newItem, setNewItem] = useState({});
  const [list, setList] = useState([]);

  /**
   * @description Adds item to list and resets form fields
   */
  const handleAdd = useCallback(() => {
    setList([...list, newItem]);
    setNewItem({});
  }, [list, newItem]);

  /**
   * @description Updates the key in the newItem object state
   * @param {string} key "title" | "description"
   * @param {string} value The value from the input
   */
  const handleChange = useCallback(
    (value, key) => {
      setNewItem({ ...newItem, [key]: value });
    },
    [newItem]
  );

  /**
   * @description Deletes item from list
   * @param item {Object}
   */
  const handleDelete = useCallback(
    (item) => {
      const updatedList = list.filter((listItem) => listItem !== item);
      setList(updatedList);
    },
    [list]
  );

  return (
    <div className="todo-list">
      <Heading element="h1">Todo List</Heading>

      <AddForm
        newItem={newItem}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />

      <List list={list} handleDelete={handleDelete} />
    </div>
  );
};

export default TodoList;
