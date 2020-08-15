import React, { useState } from "react";
import { PageTitle, LinkedButton } from "../../../components";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { useInjectReducer } from "../../../../utils/injectReducer";
import { createStructuredSelector } from "reselect";
import * as mapDispatchToProps from "./actions";
import { selectLoading, reduxKey } from "./selectors";
import reducer from "./reducer";
import openNotification from "../../../components/Notification";
import TextInput from "./components/TextInput";
import DateJoined from "./components/DateJoined";
import SelectInput from "./components/SelectInput";

const Create = ({ createEmployees }) => {
  useInjectReducer({ key: reduxKey, reducer });

  const [form] = Form.useForm();

  const handleEmpRegistration = async () => {
    try {
      const addedEmployee = await createEmployees();
      console.log("addedEmployees", addedEmployee);
      openNotification("success", addedEmployee.message);
      form.resetFields();
    } catch (error) {
      console.log("error", error);
    }
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 12,
    },
  };

  return (
    <div>
      <LinkedButton position="right" type="primary" to="../list">
        List of the Employees
      </LinkedButton>
      <PageTitle>Employee Register</PageTitle>
      <Form form={form} {...layout} onFinish={handleEmpRegistration}>
        <TextInput
          required
          name="full_name"
          label="Full Name"
          placeholder="Enter the Full Name of the Employee"
          form={form}
        />
        <DateJoined />
        <TextInput
          required
          name="email"
          label="Email"
          placeholder="Enter the Email of the Employee"
          form={form}
        />
        <TextInput
          required
          name="password"
          label="Password"
          placeholder="Enter the password for the Employee"
          form={form}
        />
        <SelectInput
          required
          name="rank"
          label="Rank"
          placeholder="Select a Rank"
        />
        <SelectInput
          required
          name="role"
          label="Role"
          placeholder="Select a Role"
        />
        <Form.Item {...tailLayout} style={{ width: "50%", margin: "auto" }}>
          <Button block type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
