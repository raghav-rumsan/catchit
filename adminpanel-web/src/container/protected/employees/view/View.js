import React, { useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Row, Descriptions, Skeleton, Tag, Col } from "antd";
import * as mapDispatchToProps from "./actions";
import { useInjectReducer } from "../../../../utils/injectReducer";
import { reduxKey, selectLoading, selectEmployeeDetails } from "./selectors";
import reducer from "./reducer";
import { createStructuredSelector } from "reselect";
import { PageTitle, LinkedButton } from "../../../components";

const View = ({ employee, loading, employeeDetailsGet, ...props }) => {
  console.log("props", props);
  useInjectReducer({ key: reduxKey, reducer });

  const { id } = props;

  useEffect(() => {
    employeeDetailsGet(id);
  }, [id]);

  const { full_name, role, rank, email, date_joined } = employee;

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={2}>
          <LinkedButton to={`../../edit/${id}`}>Edit</LinkedButton>
        </Col>
        <Col span={2}>
          <LinkedButton type="primary" to={`../../task-assign/${id}`}>
            Assign a task
          </LinkedButton>
        </Col>
        <Col span={20}>
          <LinkedButton to={`../../list`} position="right" type="primary">
            List all the Employees
          </LinkedButton>
        </Col>
      </Row>
      <Skeleton active loading={loading}>
        <PageTitle>{full_name}</PageTitle>

        <Row>
          <Descriptions layout="vertical">
            <Descriptions.Item label="Date Joined">
              {moment(date_joined).format("Do MMMM YYYY")} ({" "}
              {moment(date_joined).fromNow()})
            </Descriptions.Item>

            <Descriptions.Item label="Rank">{rank}</Descriptions.Item>
            <Descriptions.Item label="E-mail">{email}</Descriptions.Item>
            <Descriptions.Item label="Role">
              {<Tag style={{ fontSize: 20, padding: 8 }}>{role}</Tag>}
            </Descriptions.Item>
          </Descriptions>
        </Row>
      </Skeleton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  employee: selectEmployeeDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
