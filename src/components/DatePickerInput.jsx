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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              justifyContent: "center"
            }}
          >
            {/* < */}
            <button
              type="button"
              className="dp-button dp-button--nav"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <i class="fa-solid fa-caret-left"></i>
            </button>

            {/* 🏠 Home */}
            <button
              type="button"
              className="dp-button"
              onClick={() => onChange(new Date())}
              title="Go to today"
            >
              <i class="fa-solid fa-house"></i>
            </button>

            {/* Mois */}
            <select
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
              <i class="fa-solid fa-caret-right"></i>
            </button>
          </div>
        )}
      />
    </div>
  );
}
