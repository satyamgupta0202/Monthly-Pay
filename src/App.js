import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home/index";
import MonthPay from "./components/monthpay";
import Chart from "./components/chart";
const App = () => {
  let monthlyBill = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const data = useSelector((state) => state.expenses.expenseList);
  if (data.length > 0) {
    data.forEach((element) => {
      const month = +element.date.substring(5, 7);
      monthlyBill[month - 1] += element.amount;
    });
  }
  console.log("Pro Satyam");

  monthlyBill.forEach((el) => console.log(+el));
  console.log(data);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-expense" component={AddExpense} />
        </Switch>
        <MonthPay data={monthlyBill} />
        <Chart data={monthlyBill} />
      </Router>
    </div>
  );
};

export default App;
