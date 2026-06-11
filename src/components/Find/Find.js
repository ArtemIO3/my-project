import { useEffect, useState } from "react";
import "./Find.css";

// Put your SVG files here, for example: "/images/hero-1.svg".
const heroBackgrounds = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
];

export const Find = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeBackground, setActiveBackground] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBackground((current) => (current + 1) % heroBackgrounds.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Find">
      <div className="backgroundSlides" aria-hidden="true">
        {heroBackgrounds.map((background, index) => (
          <div
            className={`backgroundSlide ${index === activeBackground ? "active" : ""}`}
            key={background}
            style={{ backgroundImage: `url(${background})` }}
          />
        ))}
      </div>
      <div className="searchBar">

        {/* Where */}
        <div className="searchItem whereItem">
          <svg className="whereIcon" width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.415 22.35C24.105 25.005 22.33 27.65 20.515 30.025C18.7914 32.2625 16.9505 34.4072 15 36.45C13.0495 34.4072 11.2086 32.2625 9.485 30.025C7.67 27.65 5.895 25.005 4.585 22.35C3.26 19.6675 2.5 17.155 2.5 15C2.5 11.6848 3.81696 8.50537 6.16117 6.16117C8.50537 3.81696 11.6848 2.5 15 2.5C18.3152 2.5 21.4946 3.81696 23.8388 6.16117C26.183 8.50537 27.5 11.6848 27.5 15C27.5 17.155 26.7375 19.6675 25.415 22.35ZM15 40C15 40 30 25.785 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 5.92805e-08 11.0218 0 15C0 25.785 15 40 15 40Z" fill="black"/>
            <path d="M15 20C13.6739 20 12.4021 19.4732 11.4645 18.5355C10.5268 17.5979 10 16.3261 10 15C10 13.6739 10.5268 12.4021 11.4645 11.4645C12.4021 10.5268 13.6739 10 15 10C16.3261 10 17.5979 10.5268 18.5355 11.4645C19.4732 12.4021 20 13.6739 20 15C20 16.3261 19.4732 17.5979 18.5355 18.5355C17.5979 19.4732 16.3261 20 15 20ZM15 22.5C16.9891 22.5 18.8968 21.7098 20.3033 20.3033C21.7098 18.8968 22.5 16.9891 22.5 15C22.5 13.0109 21.7098 11.1032 20.3033 9.6967C18.8968 8.29018 16.9891 7.5 15 7.5C13.0109 7.5 11.1032 8.29018 9.6967 9.6967C8.29018 11.1032 7.5 13.0109 7.5 15C7.5 16.9891 8.29018 18.8968 9.6967 20.3033C11.1032 21.7098 13.0109 22.5 15 22.5Z" fill="black"/>
          </svg>
          <input type="text" placeholder="Where to?" />
        </div>

        <div className="divider"></div>

        {/* Dates */}
        <div
          className="searchItem dateItem"
          onClick={() =>
            setActiveMenu(activeMenu === "calendar" ? null : "calendar")
          }
        >
          <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '35px', height: '39px'}}>
            <path d="M14 8.75002C13.6906 8.75002 13.3938 8.87293 13.175 9.09172C12.9562 9.31052 12.8333 9.60726 12.8333 9.91668C12.8333 10.2261 12.9562 10.5228 13.175 10.7416C13.3938 10.9604 13.6906 11.0833 14 11.0833H21C21.3094 11.0833 21.6062 10.9604 21.825 10.7416C22.0438 10.5228 22.1667 10.2261 22.1667 9.91668C22.1667 9.60726 22.0438 9.31052 21.825 9.09172C21.6062 8.87293 21.3094 8.75002 21 8.75002H14ZM11.6667 21.5833C11.6667 22.2022 11.4208 22.7957 10.9832 23.2333C10.5457 23.6708 9.95217 23.9167 9.33333 23.9167C8.71449 23.9167 8.121 23.6708 7.68342 23.2333C7.24583 22.7957 7 22.2022 7 21.5833C7 20.9645 7.24583 20.371 7.68342 19.9334C8.121 19.4958 8.71449 19.25 9.33333 19.25C9.95217 19.25 10.5457 19.4958 10.9832 19.9334C11.4208 20.371 11.6667 20.9645 11.6667 21.5833ZM11.6667 29.75C11.6667 30.3689 11.4208 30.9623 10.9832 31.3999C10.5457 31.8375 9.95217 32.0833 9.33333 32.0833C8.71449 32.0833 8.121 31.8375 7.68342 31.3999C7.24583 30.9623 7 30.3689 7 29.75C7 29.1312 7.24583 28.5377 7.68342 28.1001C8.121 27.6625 8.71449 27.4167 9.33333 27.4167C9.95217 27.4167 10.5457 27.6625 10.9832 28.1001C11.4208 28.5377 11.6667 29.1312 11.6667 29.75ZM17.5 23.9167C18.1188 23.9167 18.7123 23.6708 19.1499 23.2333C19.5875 22.7957 19.8333 22.2022 19.8333 21.5833C19.8333 20.9645 19.5875 20.371 19.1499 19.9334C18.7123 19.4958 18.1188 19.25 17.5 19.25C16.8812 19.25 16.2877 19.4958 15.8501 19.9334C15.4125 20.371 15.1667 20.9645 15.1667 21.5833C15.1667 22.2022 15.4125 22.7957 15.8501 23.2333C16.2877 23.6708 16.8812 23.9167 17.5 23.9167ZM19.8333 29.75C19.8333 30.3689 19.5875 30.9623 19.1499 31.3999C18.7123 31.8375 18.1188 32.0833 17.5 32.0833C16.8812 32.0833 16.2877 31.8375 15.8501 31.3999C15.4125 30.9623 15.1667 30.3689 15.1667 29.75C15.1667 29.1312 15.4125 28.5377 15.8501 28.1001C16.2877 27.6625 16.8812 27.4167 17.5 27.4167C18.1188 27.4167 18.7123 27.6625 19.1499 28.1001C19.5875 28.5377 19.8333 29.1312 19.8333 29.75ZM25.6667 23.9167C26.2855 23.9167 26.879 23.6708 27.3166 23.2333C27.7542 22.7957 28 22.2022 28 21.5833C28 20.9645 27.7542 20.371 27.3166 19.9334C26.879 19.4958 26.2855 19.25 25.6667 19.25C25.0478 19.25 24.4543 19.4958 24.0168 19.9334C23.5792 20.371 23.3333 20.9645 23.3333 21.5833C23.3333 22.2022 23.5792 22.7957 24.0168 23.2333C24.4543 23.6708 25.0478 23.9167 25.6667 23.9167Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.16667 0C8.47609 0 8.77283 0.122917 8.99162 0.341709C9.21042 0.560501 9.33333 0.857247 9.33333 1.16667V3.5H25.6667V1.16667C25.6667 0.857247 25.7896 0.560501 26.0084 0.341709C26.2272 0.122917 26.5239 0 26.8333 0C27.1428 0 27.4395 0.122917 27.6583 0.341709C27.8771 0.560501 28 0.857247 28 1.16667V3.507C28.5709 3.51167 29.0796 3.53189 29.526 3.56767C30.3777 3.63767 31.1243 3.78467 31.815 4.13467C32.9123 4.69442 33.8042 5.58718 34.363 6.685C34.7153 7.37567 34.8623 8.12233 34.9323 8.97167C35 9.8 35 10.8197 35 12.0843V29.9157C35 31.1803 35 32.2023 34.9323 33.026C34.8623 33.8777 34.7153 34.6243 34.363 35.315C33.8039 36.412 32.912 37.3038 31.815 37.863C31.1243 38.2153 30.3777 38.3623 29.5283 38.4323C28.7 38.5 27.6803 38.5 26.418 38.5H8.58433C7.31967 38.5 6.29767 38.5 5.474 38.4323C4.62233 38.3623 3.87567 38.2153 3.185 37.863C2.08718 37.3042 1.19442 36.4123 0.634666 35.315C0.284666 34.6243 0.137666 33.8777 0.0676662 33.0283C-4.52002e-07 32.2 0 31.178 0 29.9133V12.0867C0 10.9783 -4.34617e-08 10.0613 0.0466666 9.29367L0.0676662 8.97633C0.137666 8.12467 0.284666 7.378 0.634666 6.68733C1.19402 5.58916 2.08682 4.69636 3.185 4.137C3.87567 3.787 4.62233 3.64 5.47167 3.57C5.92122 3.53422 6.43067 3.514 7 3.50933V1.16667C7 0.857247 7.12292 0.560501 7.34171 0.341709C7.5605 0.122917 7.85725 0 8.16667 0ZM7 7V5.84033C6.55388 5.84402 6.10798 5.86191 5.663 5.894C4.95833 5.95 4.55233 6.05733 4.24433 6.21367C3.58518 6.54932 3.04932 7.08518 2.71367 7.74433C2.55733 8.05233 2.45 8.45833 2.394 9.163C2.33333 9.884 2.33333 10.808 2.33333 12.1333V13.4167H32.6667V12.1333C32.6667 10.808 32.6667 9.884 32.606 9.163C32.55 8.45833 32.4427 8.05233 32.2863 7.74433C31.9507 7.08518 31.4148 6.54932 30.7557 6.21367C30.4477 6.05733 30.0417 5.95 29.337 5.894C28.892 5.86191 28.4461 5.84402 28 5.84033V7C28 7.30942 27.8771 7.60616 27.6583 7.82496C27.4395 8.04375 27.1428 8.16667 26.8333 8.16667C26.5239 8.16667 26.2272 8.04375 26.0084 7.82496C25.7896 7.60616 25.6667 7.30942 25.6667 7V5.83333H9.33333V7C9.33333 7.30942 9.21042 7.60616 8.99162 7.82496C8.77283 8.04375 8.47609 8.16667 8.16667 8.16667C7.85725 8.16667 7.5605 8.04375 7.34171 7.82496C7.12292 7.60616 7 7.30942 7 7ZM32.6667 15.75H2.33333V29.8667C2.33333 31.192 2.33333 32.1183 2.394 32.837C2.45 33.5417 2.55733 33.9477 2.71367 34.2557C3.04932 34.9148 3.58518 35.4507 4.24433 35.7863C4.55233 35.9427 4.95833 36.05 5.663 36.106C6.384 36.1667 7.308 36.1667 8.63333 36.1667H26.3667C27.692 36.1667 28.6183 36.1667 29.337 36.106C30.0417 36.05 30.4477 35.9427 30.7557 35.7863C31.4148 35.4507 31.9507 34.9148 32.2863 34.2557C32.4427 33.9477 32.55 33.5417 32.606 32.837C32.6667 32.1183 32.6667 31.192 32.6667 29.8667V15.75Z" fill="black"/>
          </svg>
          <div className="labelP">
            <small>Dates</small>
            <p>Sat, Jun 18 - Sat, Jul 6</p>
          </div>
        </div>

        <div className="divider"></div>

        {/* Guests */}
        <div
          className="searchItem guestsItem"
          onClick={() =>
            setActiveMenu(activeMenu === "guests" ? null : "guests")
          }
        >
          <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '34px', height: '32px'}}>
            <path d="M11.5829 12.1671C10.1943 10.777 9.5 9.09625 9.5 7.125C9.5 5.15375 10.1943 3.47304 11.5829 2.08288C12.9715 0.692711 14.6522 -0.00158063 16.625 2.70194e-06C18.5978 0.00158604 20.2785 0.695877 21.6671 2.08288C23.0557 3.46988 23.75 5.15059 23.75 7.125C23.75 9.09942 23.0557 10.7801 21.6671 12.1671C20.2785 13.5541 18.5978 14.2484 16.625 14.25C14.6522 14.2516 12.9715 13.5573 11.5829 12.1671ZM0 28.956V27.512C0 26.5319 0.285 25.6152 0.855 24.7618C1.42658 23.9068 2.1945 23.2433 3.15875 22.7715C5.40075 21.6964 7.64433 20.8905 9.8895 20.3538C12.1331 19.8154 14.3783 19.5463 16.625 19.5463C18.8717 19.5463 21.1177 19.8154 23.3629 20.3538C25.608 20.8921 27.85 21.698 30.0889 22.7715C31.0547 23.2433 31.8226 23.9068 32.3926 24.7618C32.9642 25.6152 33.25 26.5319 33.25 27.512V28.956C33.25 29.6527 33.0133 30.2385 32.5399 30.7135C32.0665 31.1853 31.4806 31.4213 30.7824 31.4213H2.47C1.77175 31.4213 1.18592 31.1845 0.7125 30.7111C0.239084 30.2377 0.00158333 29.6527 0 28.956ZM2.375 29.0486H30.875V27.512C30.875 26.9863 30.7048 26.4915 30.3644 26.0276C30.0255 25.5653 29.5561 25.1742 28.956 24.8544C27.0022 23.9075 24.9897 23.1824 22.9187 22.6789C20.8477 22.1754 18.7498 21.9236 16.625 21.9236C14.5002 21.9236 12.4023 22.1754 10.3313 22.6789C8.26025 23.1824 6.24783 23.9075 4.294 24.8544C3.69233 25.1742 3.22288 25.5653 2.88563 26.0276C2.54521 26.4915 2.375 26.9871 2.375 27.5144V29.0486ZM19.9809 10.4785C20.9103 9.54908 21.375 8.43125 21.375 7.125C21.375 5.81875 20.9103 4.70013 19.9809 3.76913C19.0515 2.83813 17.9328 2.37342 16.625 2.375C15.3172 2.37659 14.1993 2.84129 13.2715 3.76913C12.3437 4.69696 11.8782 5.81559 11.875 7.125C11.8718 8.43442 12.3373 9.55225 13.2715 10.4785C14.2057 11.4048 15.3235 11.8703 16.625 11.875C17.9265 11.8798 19.0451 11.4143 19.9809 10.4785Z" fill="black"/>
          </svg>
          <div className="labelP">
            <small>Guests</small>
            <p>guests</p>
          </div>
        </div>

        <button className="searchBtn">Search</button>
      </div>

      <p className="heroText">Find your perfect stay, anywhere in the world</p>

      {/* Overlay */}
      {activeMenu && (
        <div className="overlay" onClick={() => setActiveMenu(null)}></div>
      )}

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
  const [hoveredButton, setHoveredButton] = useState(null);

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
        <button
          onClick={prevMonth}
          onMouseEnter={() => setHoveredButton('prev')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {hoveredButton === 'prev' ? (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill="#C2C2C2"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2928 16.071L17.9498 21.728L19.3638 20.314L14.4138 15.364L19.3638 10.414L17.9498 9L12.2928 14.657C12.1053 14.8445 12 15.0988 12 15.364C12 15.6292 12.1053 15.8835 12.2928 16.071Z" fill="black"/>
            </svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill="white"/>
              <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.2928 16.071L15.9498 21.728L17.3638 20.314L12.4138 15.364L17.3638 10.414L15.9498 9L10.2928 14.657C10.1053 14.8445 9.99998 15.0988 9.99998 15.364C9.99998 15.6292 10.1053 15.8835 10.2928 16.071Z" fill="black"/>
            </svg>
          )}
        </button>
        <h2>
          {monthNames[month]} {year}
        </h2>
        <button
          onClick={nextMonth}
          onMouseEnter={() => setHoveredButton('next')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {hoveredButton === 'next' ? (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill="#C2C2C2"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.071 16.071L14.414 21.728L13 20.314L17.95 15.364L13 10.414L14.414 9L20.071 14.657C20.2585 14.8445 20.3638 15.0988 20.3638 15.364C20.3638 15.6292 20.2585 15.8835 20.071 16.071Z" fill="black"/>
            </svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.071 16.071L13.414 21.728L12 20.314L16.95 15.364L12 10.414L13.414 9L19.071 14.657C19.2585 14.8445 19.3638 15.0988 19.3638 15.364C19.3638 15.6292 19.2585 15.8835 19.071 16.071Z" fill="black"/>
            </svg>
          )}
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
  const [guests, setGuests] = useState(() => {
    const saved = localStorage.getItem('guests');
    return saved ? JSON.parse(saved) : { adults: 0, children: 0, infants: 0 };
  });

  const [hasPets, setHasPets] = useState(() => {
    const saved = localStorage.getItem('hasPets');
    return saved ? JSON.parse(saved) : false;
  });

  const updateCount = (type, operation) => {
    setGuests((prev) => {
      const current = prev[type];

      if (operation === "minus" && current > 0) {
        const newGuests = { ...prev, [type]: current - 1 };
        localStorage.setItem('guests', JSON.stringify(newGuests));
        return newGuests;
      }

      if (operation === "plus") {
        const newGuests = { ...prev, [type]: current + 1 };
        localStorage.setItem('guests', JSON.stringify(newGuests));
        return newGuests;
      }

      return prev;
    });
  };

  const handlePetsChange = (e) => {
    const value = e.target.checked;
    setHasPets(value);
    localStorage.setItem('hasPets', JSON.stringify(value));
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
              onChange={handlePetsChange}
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
