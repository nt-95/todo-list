import React from "react";
import Heading from "../atoms/Heading";
import Button from "./../atoms/Button";
import "./ListItem.css";

const ListItem = ({ item, handleDelete }) => {
  return (
    <section className="list-item">
      <Heading element="h3">{item.title}</Heading>
      <p>{item.description}</p>
      <Button title={"Supprimer"} action={() => handleDelete(item)} />
    </section>
  );
};

export default ListItem;
