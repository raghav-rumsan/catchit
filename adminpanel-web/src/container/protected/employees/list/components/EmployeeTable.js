import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";
import * as mapDispatchToProps from "../actions";
import { selectLoading, selectEmpList, selectPaginator } from "../selectors";
import { Table, Row, Col, Tag, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DeleteButton, LinkedButton } from "../../../../components";

const EmployeeTable = ({ loading, empList, paginator, setValue }) => {
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          // onPressEnter={() =>
          //   this.handleSearch(selectedKeys, confirm, dataIndex)
          // }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
  });

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
      ...getColumnSearchProps("full_name"),

      sorter: (a, b) => {
        console.log("a", a, "b", b);
        setValue({
          key: "query",
          index: "sort",
          value: { full_name: 1 },
        });
      },
      render: (text) => <h3>{text}</h3>,
    },
    {
      title: "Date Joined",
      dataIndex: "date_joined",
      key: "date_joined",
      ...getColumnSearchProps("date_joined"),

      sorter: (a, b) => {
        console.log("a", a, "b", b);
        setValue({
          key: "query",
          index: "sort",
          value: { date_joined: 1 },
        });
      },
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
      ...getColumnSearchProps("email"),

      sorter: (a, b) => {
        console.log("a", a, "b", b);
        setValue({
          key: "query",
          index: "sort",
          value: { email: 1 },
        });
      },
      render: (text) => <h3>{text}</h3>,
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      ...getColumnSearchProps("rank"),

      sorter: (a, b) => {
        console.log("a", a, "b", b);
        setValue({
          key: "query",
          index: "sort",
          value: { rank: 1 },
        });
      },
      render: (text) => <h3>{text}</h3>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      ...getColumnSearchProps("role"),

      sorter: (a, b) => {
        console.log("a", a, "b", b);
        setValue({
          key: "query",
          index: "sort",
          value: { role: 1 },
        });
      },
      render: (text) => <Tag>{text}</Tag>,
    },
    {
      title: "Action",
      render: ({ _id, full_name }) => (
        <Row key={_id}>
          <Col span={7}>
            <DeleteButton title={`details of '${full_name}'`}>
              Delete
            </DeleteButton>
          </Col>
          <Col span={7}>
            <LinkedButton to={`../view/${_id}`}>View</LinkedButton>
          </Col>
          <Col span={7}>
            <LinkedButton type="primary" to={`../task-assign/${_id}`}>
              Assign a Task
            </LinkedButton>
          </Col>
        </Row>
      ),
    },
  ];

  const handlePagination = (page, pageSize) => {
    console.log("page", page, "pageSize", pageSize);
    setValue({
      key: "query",
      index: "page",
      value: page,
    });
  };
  const handlePerPage = (page, pageSize) => {
    console.log("page", page, "pageSize", pageSize);
    setValue({
      key: "query",
      index: "limit",
      value: pageSize,
    });
  };

  return (
    <div>
      <Table
        loading={loading}
        dataSource={empList}
        pagination={{
          position: ["topRight"],
          showQuickJumper: true,
          showSizeChanger: true,
          onShowSizeChange: handlePerPage,
          onChange: handlePagination,
          total: paginator.total,
          pageSize: paginator.limit,
          showTotal: (total) => `Total ${total} employees`,
          defaultCurrent: paginator.page,
        }}
        columns={columns}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  empList: selectEmpList,
  paginator: selectPaginator,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTable);
