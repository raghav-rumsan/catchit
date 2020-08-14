import React from "react";
import { Link } from "@reach/router";
import { Button } from "antd";

const LinkedButton = ({ to = "", type = "", position = "left", children }) => {
  return (
    <div style={{ textAlign: position }}>
      <Link to={to}>
        <Button type={type}>{children}</Button>
      </Link>
    </div>
  );
};

export default LinkedButton;
