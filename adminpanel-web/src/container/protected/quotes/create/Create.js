import React, { useState } from "react";
import { PageTitle } from "../../../components";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { useInjectReducer } from "../../../../utils/injectReducer";
import { createStructuredSelector } from "reselect";
import * as mapDispatchToProps from "./actions";
import { selectLoading, reduxKey } from "./selectors";
import reducer from "./reducer";
import openNotification from "../../../components/Notification";

const Create = ({ createDailyQuotes }) => {
  useInjectReducer({ key: reduxKey, reducer });

  const [form] = Form.useForm();

  const handleQuotesInput = async (values) => {
    try {
      const addedQuote = await createDailyQuotes(values);
      console.log("addedQuotes", addedQuote);
      openNotification("success", addedQuote.message);
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
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  return (
    <div>
      <PageTitle>Quotes Create</PageTitle>
      <Form form={form} {...layout} onFinish={handleQuotesInput}>
        <Form.Item
          name="quote"
          style={{ textAlign: "center" }}
          rules={[{ required: true, message: "Please Enter the Quote!" }]}
        >
          <Input.TextArea
            style={{
              textAlign: "center",
              width: 400,
              fontSize: 25,
            }}
            placeholder="Enter the Quote Here"
          />
        </Form.Item>
        <Form.Item style={{ width: "75%", margin: "auto" }}>
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
