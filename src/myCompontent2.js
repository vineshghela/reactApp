import React from "react";
import "./App.css";
import App2 from './myAddress.js'
import salary from './SalarySlip';
import axios from 'axios';




export default class PersonList extends React.Component {
  state = {
    name: '',
    email:'',
    uName:'',
  }

  handleChange = event => {
    this.setState({ name: event.target.value});
  }
  handleChangeEmail = event => {
    this.setState({ email: event.target.value});
  }
  handleChangeuName = event => {
    this.setState({ uName: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email:this.state.email,
      uName:this.state.uName
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        let id = res.data.id
        console.log("EMAIL",res.data.email);
        
        alert(id)
      })
  }

  render() {
    return (
      
      <div>
      <h1>Lets post some data</h1>
        <form class="form-group" onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" class="form-control" name="name" onChange={this.handleChange}  required='true'/>
          </label>
          <br/>
          <label>
            email:
            <input type="email" class="form-control" name="email" onChange={this.handleChangeEmail} required='true' />
          </label>
          <br/>
          <label>
            uName:
            <input type="text" class="form-control" name="uName" onChange={this.handleChangeuName} required='true'/>
          </label>
          <br/>
          <button class="btn btn-primary" type="submit">Add</button>
        </form>
      </div>
    )
  }
}



