import React from "react";
import "./monthpay.css";
import Month from "./Month";
function MonthPay(props) {
  return (
    <div>
       <h1 style={{textAlign:"center",marginTop:'60px'}}>Monthly Expense</h1>
    <div className="month-all">
      <Month month="january">{props.data[0]}</Month>
      <Month month="february">{props.data[1]}</Month>
      <Month month="march">{props.data[2]}</Month>
      <Month month="april">{props.data[3]}</Month>
      <Month month="may">{props.data[4]}</Month>
      <Month month="june">{props.data[5]}</Month>
      <Month month="july">{props.data[6]}</Month>
      <Month month="august">{props.data[7]}</Month>
      <Month month="september">{props.data[8]}</Month>
      <Month month="october">{props.data[9]}</Month>
      <Month month="november">{props.data[10]}</Month>
      <Month month="december">{props.data[11]}</Month>
    </div>
    </div>
  );
}

export default MonthPay;
