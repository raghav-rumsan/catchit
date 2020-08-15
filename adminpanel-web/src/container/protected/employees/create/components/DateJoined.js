import React from "react";
import { DatePicker } from "antd";
import { Form } from "antd";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";

const DateJoined = ({ setDataValue, ...props }) => {
  const handleSelect = (_, date) => {
    setDataValue({
      key: "date_joined",
      value: date,
    });
  };
  return (
    <Form.Item
      rules={[{ required: true, message: "Please Select the Date Joined" }]}
      name="date_joined"
      label="Date Joined"
    >
      <DatePicker onChange={handleSelect} />
    </Form.Item>
  );
};

export default connect(null, mapDispatchToProps)(DateJoined);
