import React from "react";
import { PieChart, Legend } from "react-easy-chart";
import { fetchCount } from "../rest/ajax.js";
import store from "../stores/store.js";
import "../Header.css";
import "../App.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.forceUpdate();
    });

    console.log("Dashboard constructor...", store.getState());
    const divStyle = {
      ".chart_lines": {
        strokeWidth: 12
      },
      ".chart_text": {
        fontFamily: "serif",
        fontSize: "10.45em",
        fill: "#999"
      }
    };
  }

  async componentDidMount() {
    try {
      setInterval(async () => {
        fetchCount();
      }, 30000);
    } catch (e) {
      console.log(e);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("I am clicked");
  }

  render() {
    return (
      <div className="dashboard" id="dashboardDiv">
        <PieChart
          size={300}
          data={store.getState().count}
          labels={"value"}
          styles={this.divStyle}
        />
        <Legend data={store.getState().count} dataId={"key"} horizontal />
      </div>
    );
  }
}

export default Dashboard;
