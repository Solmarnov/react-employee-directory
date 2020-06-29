import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import employeeList from '../employees.json';

class EmployeeListTable extends Component {
  state = {
    employees: employeeList,
    filterBy: "",
    sortIcon: "fas fa-sort"
  };

  handleSort = e => {
    const sortBy = e.target.getAttribute("name");
    let sortIcon = e.target.getAttribute("class");
    const employees = this.sortEmployees(this.state.employees, sortBy, sortIcon);
    sortIcon = this.switchSortIcon(sortIcon);
    this.setState({ employees, sortIcon });
  };

  sortEmployees = (employeeList, sortByKey, sortIcon) => {
    const sortedEmployeeList = employeeList.sort((a, b) => {
      let itemA = a[sortByKey].toLowerCase();
      let itemB = b[sortByKey].toLowerCase();
      if (sortIcon === "fas fa-sort" || sortIcon === "fas fa-sort-down") {
        return (itemA < itemB) ? -1 : (itemA > itemB) ? 1 : 0;
      } else {
        return (itemA < itemB) ? 1 : (itemA > itemB) ? -1 : 0;
      }
    });
    return sortedEmployeeList;
  };
  
  switchSortIcon = sortIcon => {
    switch (sortIcon) {
      case "fas fa-sort":
        return sortIcon = "fas fa-sort-up";
      case "fas fa-sort-up":
        return sortIcon = "fas fa-sort-down";
      case "fas fa-sort-down":
        return sortIcon = "fas fa-sort-up";
      default:
        return sortIcon = "fas fa-sort";
    }
  }

  handleFilter = e => {
    console.log(e);
    const filterBy = e.target.name;
    // this.setState({
    //   filterBy
    // });
  };

  render() {
    return (
      <div className="container">
        <table className="table table-dark">
          <TableHead 
            handleSort={this.handleSort}
            sortIcon={this.state.sortIcon}
            handleFilter={this.handleFilter}
          />
          <TableBody 
            employees={employeeList}
          />
        </table>
      </div>
    );
  }
}

export default EmployeeListTable;