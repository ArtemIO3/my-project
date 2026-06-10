import { useState } from "react";
import "./Find.css";

export const Find = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="Find">
      <div className="searchBar">

        {/* Where */}
        <div className="searchItem">
          <input type="text" placeholder="Where to?" />
        </div>

        <div className="divider"></div>

        {/* Dates */}
        <div
          className="searchItem"
          onClick={() =>
            setActiveMenu(activeMenu === "calendar" ? null : "calendar")
          }
        >
          <div className="labelP">
            <small>Dates</small>
            <p>Sat, Jun 18 - Sat, Jul 6</p>
          </div>
        </div>

        <div className="divider"></div>

        {/* Guests */}
        <div
          className="searchItem"
          onClick={() =>
            setActiveMenu(activeMenu === "guests" ? null : "guests")
          }
        >
          <div className="labelP">
            <small>Guests</small>
            <p>guests</p>
          </div>
        </div>

        <button className="searchBtn">Search</button>
      </div>

      {/* Calendar */}
      {activeMenu === "calendar" && <Calendar />}

      {/* Guests */}
      {activeMenu === "guests" && (
        <GuestsPopup setActiveMenu={setActiveMenu} />
      )}
    </div>
  );
};
export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days = [];

  for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
    days.push(<div key={`empty-${i}`} className="empty"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected =
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year;

    days.push(
      <div
        key={day}
        className={`day ${isSelected ? "selected" : ""}`}
        onClick={() => setSelectedDate(new Date(year, month, day))}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="popup calendarPopup">
      <div className="calendarHeader">
        <button onClick={prevMonth}><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="white"/>
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.2928 16.071L15.9498 21.728L17.3638 20.314L12.4138 15.364L17.3638 10.414L15.9498 9L10.2928 14.657C10.1053 14.8445 9.99998 15.0988 9.99998 15.364C9.99998 15.6292 10.1053 15.8835 10.2928 16.071Z" fill="black"/>
</svg>
</button>
        <h2>
          {monthNames[month]} {year}
        </h2>
        <button onClick={nextMonth}><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.071 16.071L13.414 21.728L12 20.314L16.95 15.364L12 10.414L13.414 9L19.071 14.657C19.2585 14.8445 19.3638 15.0988 19.3638 15.364C19.3638 15.6292 19.2585 15.8835 19.071 16.071Z" fill="black"/>
</svg>
</button>
      </div>

      <div className="weekdays">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>

      <div className="calendarGrid">{days}</div>
    </div>
  );
}

export function GuestsPopup({ setActiveMenu }) {
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const [hasPets, setHasPets] = useState(false);

  const updateCount = (type, operation) => {
    setGuests((prev) => {
      const current = prev[type];

      if (operation === "minus" && current > 0) {
        return { ...prev, [type]: current - 1 };
      }

      if (operation === "plus") {
        return { ...prev, [type]: current + 1 };
      }

      return prev;
    });
  };

  return (
    <div className="popup guestsPopup">
      <div className="guests-popup">

        {/* Adults */}
        <div className="guest-row">
          <div className="label-group">
            <span className="title">Adults</span>
            <span className="subtitle">Ages 18+</span>
          </div>

          <div className="counter-group">
            <button
              className="counter-btn"
              onClick={() => updateCount("adults", "minus")}
              disabled={guests.adults === 0}
            >
              −
            </button>

            <span className="count">{guests.adults}</span>

            <button
              className="counter-btn"
              onClick={() => updateCount("adults", "plus")}
            >
              +
            </button>
          </div>
        </div>

        {/* Children */}
        <div className="guest-row">
          <div className="label-group">
            <span className="title">Children</span>
            <span className="subtitle">Ages 2–17</span>
          </div>

          <div className="counter-group">
            <button
              className="counter-btn"
              onClick={() => updateCount("children", "minus")}
              disabled={guests.children === 0}
            >
              −
            </button>

            <span className="count">{guests.children}</span>

            <button
              className="counter-btn"
              onClick={() => updateCount("children", "plus")}
            >
              +
            </button>
          </div>
        </div>

        {/* Infants */}
        <div className="guest-row">
          <div className="label-group">
            <span className="title">Infants</span>
            <span className="subtitle">Ages 0–1</span>
          </div>

          <div className="counter-group">
            <button
              className="counter-btn"
              onClick={() => updateCount("infants", "minus")}
              disabled={guests.infants === 0}
            >
              −
            </button>

            <span className="count">{guests.infants}</span>

            <button
              className="counter-btn"
              onClick={() => updateCount("infants", "plus")}
            >
              +
            </button>
          </div>
        </div>

        {/* Pets */}
        <div className="pet-section">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={hasPets}
              onChange={(e) => setHasPets(e.target.checked)}
            />
            <span className="checkbox-label">
              I am traveling with pets
            </span>
           
          </label> 
          <p className="pet-info">
  If checked, only properties that allow pets will be shown
</p>
        </div>

        {/* Done */}
        <div className="footer-section">
          <button className="done-btn" onClick={() => setActiveMenu(null)}>
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
export default Find;
