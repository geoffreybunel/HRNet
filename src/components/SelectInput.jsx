function SelectInput({ id, label, value, onChange, options }) {
    return (
        <div className="select-container">
            <label htmlFor={id}>{label}</label>

            <select className="select-field" value={value} id={id} onChange={(e) => onChange(e.target.value)}>
                {options.map(({ value, label }) => (
                    <option value={value} key={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default SelectInput;