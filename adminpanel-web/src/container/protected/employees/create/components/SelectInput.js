import React from "react";
import { Form, Select } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRanks, selectRoles } from "../selectors";
import * as mapDispatchToProps from "../actions";

const SelectInput = ({
  label,
  name,
  placeholder,
  required,
  setDataValue,
  ...props
}) => {
  const handleSelect = (value) => {
    setDataValue({
      key: name,
      value,
    });
  };

  return (
    <Form.Item
      rules={[{ required, message: `Please select a ${label}` }]}
      name={name}
      label={label}
    >
      <Select size="large" onChange={handleSelect} placeholder={placeholder}>
        {props[name].map((option) => (
          <Select.Option key={`${name}-${option.title}`} value={option.title}>
            {option.title}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

const mapStateToProps = createStructuredSelector({
  rank: selectRanks,
  role: selectRoles,
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectInput);
