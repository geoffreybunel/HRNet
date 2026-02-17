import { useState } from "react";
import { STATES, DEPARTMENTS } from "../data/options";
import DatePickerInput from "../components/DatePickerInput";
import SelectInput from "../components/SelectInput";

function EmployeeForm({ onSubmit }) {
    const [error, setError] = useState("");
    // Form states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("AL");
    const [zipCode, setZipCode] = useState("");
    const [department, setDepartment] = useState("sales");

    function handleSubmit(e) {
        e.preventDefault();

        if (
            !firstName ||
            !lastName ||
            !dateOfBirth ||
            !startDate ||
            !street ||
            !city ||
            !state ||
            !zipCode ||
            !department
        ) {
            setError("All fields must be filled out.");
            return;
        }

        setError("");

        const employee = {
            firstName,
            lastName,
            dateOfBirth,
            startDate,
            street,
            city,
            state,
            zipCode,
            department,
        };

        // Send data to parent
        onSubmit(employee);
    }

    return (
        <form onSubmit={handleSubmit} id="create-employee" className="create-employee__form">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" autoComplete="off" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

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
                <input id="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)} />

                <label htmlFor="city">City</label>
                <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />

                <SelectInput 
                    id="US-states"
                    label="State"
                    value={state}
                    onChange={setState}
                    options={STATES}
                />

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            </fieldset>

            <SelectInput 
                id="department"
                label="Department"
                value={department}
                onChange={setDepartment}
                options={DEPARTMENTS}
            />

            {error && <p className="form-error">{error}</p>}
            <button type="submit">Save</button>
        </form>
    )
}
export default EmployeeForm