import React from "react";
import Header from "./Header.jsx";
import TestGrid from "./TestGrid.jsx";
import Dashboard from "./Dashboard.jsx";
import RefreshInterval from "./RefreshInterval.jsx";
import Footer from "./Footer";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import { Helmet } from "react-helmet";

class AfterLogin extends React.Component {
  render() {
    return (
      <div>
        {/* <Sidebar
          as={Menu}
          inverted
          visible
          vertical
          width="thin"
          icon="labeled"
        >
          <Menu.Item name="users">
            <Icon name="users" />
            Users
          </Menu.Item>
          <Menu.Item name="logout">
            <Icon name="power" />
            Logout
          </Menu.Item>
        </Sidebar> */}
        <Header title={"NMS - Monitoring"} />
        <Dashboard />
        <RefreshInterval />
        <TestGrid />
        <Footer />
      </div>
    );
  }
}
export default AfterLogin;
