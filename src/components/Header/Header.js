import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export function Header(props) {
  const countries = [
    { image: './images/icons/flag-UA.png', name: 'UA' },
    { image: './images/icons/flag-USA.png', name: 'USA' },
    { image: './images/icons/flag-TR.png', name: 'TR' },
    { image: './images/icons/flag-CH.png', name: 'CH' },
    { image: './images/icons/flag-IND.png', name: 'IND' },
    { image: './images/icons/flag-DN.png', name: 'DN' }
  ]

  const [selected, setSelected] = useState(countries[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  window.onclick = function (event) {
    if (event.target == document.querySelector('.signInDropdown')) {
      setSignInOpen(false)
    }
  }

  return (<header className="Header">
    <img id='logo' src='./images/LOGO.svg' alt='logo' />
    <div className='wrapper'>
      <div id='countrySelect'>
        <div className='countrySelected' onClick={() => setCountryOpen(!countryOpen)}> <img src={selected.image} />{selected.name}<img className={'dropdownArrow' + (countryOpen ? ' open' : '')} src='./images/icons/arrow-down.png' /></div>
        {countryOpen && (
          <div className='countryDropdown'>
            {countries.map((country) => (<div className={'countryOption' + (selected.name == country.name ? ' selected' : '')}
              onClick={() => {
                setSelected(country);
                setCountryOpen(false);
              }}>
              <img src={country.image} />
            </div>))}
          </div>)}
      </div>
      <div className='navigation'>
        <button className='appBTN'>Open app<img src='./images/icons/open-app.png' /></button>
        <nav>
          <a>Trip Boards</a>
          <a>List your property</a>
          <a>Help</a>
          <a>My trips</a>
        </nav>
        <div className='signIn'>
          <button className='signInBTN' onClick={() => setSignInOpen(!signInOpen)}>Sign in</button>
          {signInOpen && (
            <div className='signInDropdown'>
              <h4>Sign in to contact hosts and keep
                track of all your messages</h4>
            </div>)}
        </div>
      </div>
    </div>
  </header>
  );
}