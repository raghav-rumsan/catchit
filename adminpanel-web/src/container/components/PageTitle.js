import React from "react";

const PageTitle = ({ children }) => {
  return (
    <h1 style={{ fontSize: 30, textAlign: "center", color: "grey" }}>
      {children}
    </h1>
  );
};

export default PageTitle;
