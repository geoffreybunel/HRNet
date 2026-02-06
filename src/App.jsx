import { Route, Routes } from 'react-router';
import './App.css'
import { useState } from 'react';
// import Modal from "react-hrnet-modal";
// import "react-hrnet-modal/style.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<EmployeeList employees={employees} />}></Route>
        <Route path='/create' element={<CreateEmployee onAddEmployee={addEmployee} />}></Route>
      </Routes>
      
      {/* <h1>HRNet</h1> */}
      {/* <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button> */}

      {/* <Modal isOpen={isOpen} onClose={handleClose}>
        Employee Created!
      </Modal> */}
    </>
  )
}

export default App
