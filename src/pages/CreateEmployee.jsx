import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@geoffreybunel/react-hrnet-modal";
import EmployeeForm from "../components/EmployeeForm";

function CreateEmployee({ onAddEmployee }) {
    // Modal state
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    function handleCreateEmployee(employee) {
        onAddEmployee(employee);
        setIsOpen(true);
    }

    return (
        <>
            <h1>HRnet</h1>

            <div className="main-container">
                <Link to="/employee-list">View Current Employees</Link>

                <h2>Create Employee</h2>

                <EmployeeForm onSubmit={handleCreateEmployee} />
            </div>
            

            <Modal 
                isOpen={isOpen} 
                onClose={() => {
                    setIsOpen(false);
                    navigate("/employee-list")
                }}
                contentClassName="modal-content"
            >
                Employee Created!
            </Modal>
        </>
    )
}

export default CreateEmployee;