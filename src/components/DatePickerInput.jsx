import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

const years = range(1950, getYear(new Date()));

export default function DatePickerInput({ label, selectedDate, onChange, id }) {
  return (
    <div className="date-picker-field">
      <label htmlFor={id}>{label}</label>

      <DatePicker
        id={id}
        selected={selectedDate}
        onChange={onChange}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <div className="dp-header">
            {/* < */}
            <button
              type="button"
              className="dp-button dp-button--nav"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="dp-icon">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
              </svg>
            </button>

            {/* 🏠 Home */}
            <button
              type="button"
              className="dp-button"
              onClick={() => onChange(new Date())}
              title="Go to today"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="dp-icon">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>

            </button>

            {/* Mois */}
            <select
              id="months-select"
              value={MONTHS[getMonth(date)]}
              onChange={(e) =>
                changeMonth(MONTHS.indexOf(e.target.value))
              }
            >
              {MONTHS.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            {/* Année */}
            <select
              id="years-select"
              value={getYear(date)}
              onChange={(e) => changeYear(Number(e.target.value))}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {/* > */}
            <button
              type="button"
              className="dp-button dp-button--nav"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="dp-icon">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>

            </button>
          </div>
        )}
      />
    </div>
  );
}
