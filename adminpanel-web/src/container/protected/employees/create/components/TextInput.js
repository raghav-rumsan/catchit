import React from "react";
import { Form, Input } from "antd";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";

const TextInput = ({
  form,
  name,
  required,
  label,
  placeholder,
  setDataValue,
  ...props
}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setDataValue({
      key: name,
      value,
    });
  };

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, message: `Please Enter the ${label} ` }]}
    >
      <Input onChange={handleChange} placeholder={placeholder} />
    </Form.Item>
  );
};

export default connect(null, mapDispatchToProps)(TextInput);
