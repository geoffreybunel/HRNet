import { Route, Routes } from 'react-router';
import './App.css'
import { useState } from 'react';
import EmployeeList from '../src/pages/EmployeeList'
import CreateEmployee from '../src/pages/CreateEmployee'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CreateEmployee />}></Route>
        <Route path='/create' element={<EmployeeList />}></Route>
      </Routes>
    </>
  )
}

export default App
