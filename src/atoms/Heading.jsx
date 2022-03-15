import React from "react";

const Heading = ({ children, element }) => {
  const handleHeading = () => {
    switch (element) {
      case "h1":
        return <h1>{children}</h1>;
      case "h3":
        return <h3>{children}</h3>;
      default:
        return <h2>{children}</h2>;
    }
  };
  return handleHeading();
};

export default Heading;
