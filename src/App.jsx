import { Route, Routes } from 'react-router';
import './App.css'
import { useState } from 'react';
import EmployeeList from '../src/pages/EmployeeList'
import CreateEmployee from '../src/pages/CreateEmployee'

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  }

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
