import React from "react";
import ListItem from "../molecules/ListItem";

const List = ({ list, handleDelete }) => {
  const renderList = () => {
    return list.map((item) => {
      return (
        <ListItem key={Math.random()} item={item} handleDelete={handleDelete} />
      );
    });
  };

  return <section className="list">{renderList()}</section>;
};

export default List;
