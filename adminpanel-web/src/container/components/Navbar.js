import React from "react";
import { Menu, Dropdown } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUser } from "../selectors";

const Navbar = ({ user }) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );

  console.log("user", user);
  return (
    <div style={{ float: "right", margin: "0 .5rem" }}>
      {" "}
      <Dropdown.Button
        overlay={menu}
        placement="bottomCenter"
        icon={<UserOutlined />}
      >
        {user.full_name}
      </Dropdown.Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(Navbar);
