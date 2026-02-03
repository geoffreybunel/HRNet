import './App.css'
import { useState } from 'react';
import Modal from './components/Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <>
      <h1>HRNet</h1>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        Contenu de la modale
      </Modal>
    </>
  )
}

export default App
