import Modal from "@geoffreybunel/react-hrnet-modal";
import "@geoffreybunel/react-hrnet-modal/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { STATES, DEPARTMENTS } from "../data/options";
import DatePickerInput from "../components/DatePickerInput";
import SelectInput from "../components/SelectInput";

function CreateEmployee() {
    // Modal state
    const [isOpen, setIsOpen] = useState(false);
    // DatePicker states
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
    // Select states
    const [state, setState] = useState("AL");
    const [department, setDepartment] = useState("sales");

    function handleClose() {
      setIsOpen(false)
    }

    return (
        <>
            <h1>HRnet</h1>

            <div className="create-employee-container">
                <Link to="/employee-list">View Current Employees</Link>

                <h2>Create Employee</h2>

                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" autoComplete="off" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <DatePickerInput
                        label="Date of birth"
                        id="date-of-birth"
                        selectedDate={dateOfBirth}
                        onChange={setDateOfBirth}
                    />

                    <DatePickerInput
                        label="Start Date"
                        id="start-date"
                        selectedDate={startDate}
                        onChange={setStartDate}
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <SelectInput 
                            id="US-states"
                            label="State"
                            value={state}
                            onChange={setState}
                            options={STATES}
                        />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <SelectInput 
                        id="department"
                        label="Department"
                        value={department}
                        onChange={setDepartment}
                        options={DEPARTMENTS}
                    />
      
                    <button onClick={() => setIsOpen(true)}>Save</button>
                </form>
            </div>
            

            <Modal isOpen={isOpen} onClose={handleClose}>
                Employee Created!
            </Modal>
        </>
    )
}

export default CreateEmployee;