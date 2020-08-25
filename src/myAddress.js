import React from "react";

import "./App.css";
import Salary from './SalarySlip';

function App2() {
  return (
   
  <div>
    <div>
			<h2> Hno 1 </h2>
			<h2> Abc Street </h2>
			<h2> Manchester </h2>
		</div>  
		<div>
			<h2> Name=Shafeeq </h2>
		</div>

		  <Salary name=" Peter" salary="2000"/>
		  <Salary name=" Smith" salary="1000"/>
      </div>
  );
}



export default App2;
