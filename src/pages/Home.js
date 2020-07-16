import React, { Component } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import TableHead from '../components/TableHead';
import TableBody from '../components/TableBody';
import craig from '../images/craig-stevens.png';
import gavin from '../images/gavin-phillips.png';
import magenta from '../images/magenta-adams.png';
import tracy from '../images/tracy-waddlesworth.png';
import dean from '../images/dean-yates.png';
import susan from '../images/susan-melts.png';
import karen from '../images/karen-wicks.png';
import todd from '../images/todd-jefferson.png';
import adam from '../images/adam-greenburg.png';
import janet from '../images/janet-weis.png';

class Home extends Component {
  employeeList = [
    {
      "id": 1,
      "image": craig,
      "name": "Craig Stevens",
      "phone": "0401 987 654",
      "occupation": "Sales",
      "department": "Marketing"
    },
    {
      "id": 2,
      "image": gavin,
      "name": "Gavin Phillips",
      "phone": "0401 654 321",
      "occupation": "Workplace Relations Liaison Office",
      "department": "HR"
    },
    {
      "id": 3,
      "image": magenta,
      "name": "Magenta Adams",
      "phone": "0411 890 544",
      "occupation": "Project Manager",
      "department": "Operations"
    },
    {
      "id": 4,
      "image": tracy,
      "name": "Tracy Waddlesworth",
      "phone": "0401 123 345",
      "occupation": "Accountant",
      "department": "Finance"
    },
    {
      "id": 5,
      "image": dean,
      "name": "Dean Yates",
      "phone": "0401 654 456",
      "occupation": "Information Security Officer",
      "department": "ICT"
    },
    {
      "id": 6,
      "image": susan,
      "name": "Susan Melts",
      "phone": "0431 123 321",
      "occupation": "Receptionist",
      "department": "Operations"
    },
    {
      "id": 7,
      "image": karen,
      "name": "Karen Wicks",
      "phone": "0431 655 234",
      "occupation": "Manager of Operations",
      "department": "Operations"
    },
    {
      "id": 8,
      "image": todd,
      "name": "Todd Jefferson",
      "phone": "0401 789 987",
      "occupation": "Senior Developer",
      "department": "ICT"
    },
    {
      "id": 9,
      "image": adam,
      "name": "Adam Greenburg",
      "phone": "0411 345 654",
      "occupation": "Analyst",
      "department": "Marketing"
    },
    {
      "id": 10,
      "image": janet,
      "name": "Janet Weis",
      "phone": "0411 326 633",
      "occupation": "Head of HR",
      "department": "HR"
    }
  ];

  state = {
    filterValue: "",
    employees: this.employeeList,
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
  };

  handleInputChange = ({ target }) => {
    const filterBy = "name";
    const value = target.value;
    this.setState({ filterValue: value });
    this.filterEmployees(this.employeeList, filterBy, value);
  };

  filterEmployees = (employeeList, filterByKey, value) => {
    const filteredEmployeeList = employeeList.filter(employee => {
      return employee[filterByKey].toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ employees: filteredEmployeeList });
  };

  render() {
    return (
      <div className="main">
        <Header />
        <Form 
          filterValue={this.state.filterValue}
          handleInputChange={this.handleInputChange}
        />
        <div className="table-responsive-md">
          <table className="table table-dark">
            <TableHead 
              handleSort={this.handleSort}
              sortIcon={this.state.sortIcon}
            />
            <TableBody 
              employees={this.state.employees}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default Home;