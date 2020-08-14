import React from "react";
import { Form, Select } from "antd";

const SelectInput = ({ label, name, placeholder, required, ...props }) => {
  return (
    <Form.Item
      rules={[{ required, message: `Please select a ${label}` }]}
      name={name}
      label={label}
    >
      <Select placeholder={placeholder}>
        <Select.Option>Option1</Select.Option>
      </Select>
    </Form.Item>
  );
};

export default SelectInput;
