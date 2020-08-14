import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectLoading, selectEmpList } from "../selectors";
import { Table, Row, Col, Tag } from "antd";
import { DeleteButton, LinkedButton } from "../../../../components";
import moment from "moment";

const EmployeeTable = ({ loading, empList }) => {
  const columns = [
    {
      title: "Sn.",
      dataIndex: "index",
      key: "index",
      render: (text) => <h3>{+text + 1}</h3>,
    },
    {
      title: "Full Name",
      dataIndex: "full_name",
      key: "full_name",
      render: (text) => <h3>{text}</h3>,
    },
    {
      title: "Date Joined",
      dataIndex: "date_joined",
      key: "date_joined",
      render: (text) => (
        <h3>
          {moment(text).format("Do MMM YYYY")} ( {moment(text).fromNow()} )
        </h3>
      ),
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
      render: (text) => <h3>{text}</h3>,
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      render: (text) => <h3>{text}</h3>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => <Tag>{text}</Tag>,
    },
    {
      title: "Action",
      render: ({ _id, full_name }) => (
        <Row key={_id}>
          <Col span={8}>
            <DeleteButton title={`details of '${full_name}'`}>
              Delete
            </DeleteButton>
          </Col>
          <Col span={8}>
            <LinkedButton to={`../view/${_id}`}>View</LinkedButton>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <div>
      <Table loading={loading} dataSource={empList} columns={columns} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  empList: selectEmpList,
});

export default connect(mapStateToProps)(EmployeeTable);
