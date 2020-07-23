import React from "react";
import "./App.css";

const BottomRow = (props) => {
  console.log(props)
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{props.lionDown + 1}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{props.lionGoal + 7}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{props.tigerDown + 21}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{props.tigerGoal + 1}</div>
      </div>
    </div>
  );
};

export default BottomRow;
