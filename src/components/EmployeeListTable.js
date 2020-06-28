import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import employeeList from '../employees.json';

class EmployeeListTable extends Component {
  state = {
    employees: employeeList,
    filterBy: "",
    sortBy: ""
  };

  handleSort = e => {
    console.log(e);
    const sortBy = e.target.name;
    // this.setState({
    //   sortBy
    // });
  };

  handleFilter = e => {
    console.log(e);
    const filterBy = e.target.name;
    // this.setState({
    //   filterBy
    // });
  };

  render() {
    return (
      <div>
        <TableHead />
        <TableBody 
          employees={employeeList}
        />
      </div>
    );
  }
}

export default EmployeeListTable;