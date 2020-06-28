import React from 'react';
import Header from './components/Header/';
import Table from './components/Table';
import EmployeeListTable from './components/EmployeeListTable'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Table>
        <EmployeeListTable />
      </Table>
    </div>
  );
}

export default App;
