import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@geoffreybunel/react-hrnet-modal";
import "@geoffreybunel/react-hrnet-modal/style.css";
import EmployeeForm from "../components/EmployeeForm";

function CreateEmployee() {
    // Modal state
    const [isOpen, setIsOpen] = useState(false);

    function handleCreateEmployee(employee) {
        onAddEmployee(employee);
        setIsOpen(true);
    }

    return (
        <>
            <h1>HRnet</h1>

            <div className="create-employee-container">
                <Link to="/employee-list">View Current Employees</Link>

                <h2>Create Employee</h2>

                <EmployeeForm onSubmit={handleCreateEmployee} />
            </div>
            

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                Employee Created!
            </Modal>
        </>
    )
}

export default CreateEmployee;