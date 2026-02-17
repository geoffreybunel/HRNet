import { Route, Routes } from 'react-router';
import './App.css'
import { useState, useEffect } from 'react';
import EmployeeList from '../src/pages/EmployeeList'
import CreateEmployee from '../src/pages/CreateEmployee'
import { getEmployees, saveEmployees } from './services/employeeStorage';

function App() {
  const [employees, setEmployees] = useState([]);

  function addEmployee(employee) {
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, employee];
      saveEmployees(updatedEmployees);
      return updatedEmployees;
    })
  }

  // load employees from localStorage and synchronise React with the persisted data
  useEffect(() => {
    const storedEmployees = getEmployees();
    setEmployees(storedEmployees);
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<CreateEmployee onAddEmployee={addEmployee} />}></Route>
        <Route path='/employee-list' element={<EmployeeList employees={employees} />}></Route>
      </Routes>
    </>
  )
}

export default App
