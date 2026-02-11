import { Link } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";

function EmployeeList({ employees }) {
    return (
        <>
        <h1>Current Employees</h1>

        <div className="main-container">
            <EmployeeTable data={employees} />

            <Link to="/">Home</Link>
        </div>
        </>
    )
}

export default EmployeeList;