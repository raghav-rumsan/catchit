import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox, Card } from "antd";
import openNotification from "../../components/Notification";
import { useInjectReducer } from "../../../utils/injectReducer";
import * as mapDispatchToProps from "./actions";
import { reduxKey, selectLoading } from "./selectors";
import { createStructuredSelector } from "reselect";
import reducer from "./reducer";
// import TitleHeader from "../../components/TitleHeader";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = ({ login, loading }) => {
  useInjectReducer({ key: reduxKey, reducer });
  const onFinish = async (values) => {
    const loggedIn = await login(values);
    openNotification("success", loggedIn.message);
  };

  const onFinishFailed = (errorInfo) => {
    openNotification("error", "Error logging in", "Check the internet");
  };

  return (
    <Card
      style={{
        width: "50%",
        margin: "auto",
        position: "relative",
        top: "3rem",
      }}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password style={{ width: 200 }} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            disabled={loading}
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
