import React from "react";
import TextField from "../molecules/TextField";
import Button from "./../atoms/Button";

const AddForm = ({ newItem, handleChange, handleAdd }) => {
  return (
    <section>
      <TextField
        title="Titre"
        value={newItem.title ?? ""}
        onChange={(e) => handleChange(e.target.value, "title")}
      />
      <TextField
        multiline
        title="Description"
        value={newItem.description ?? ""}
        onChange={(e) => handleChange(e.target.value, "description")}
      />
      <Button action={() => handleAdd()} title="Ajouter à la liste" />
    </section>
  );
};

export default AddForm;
