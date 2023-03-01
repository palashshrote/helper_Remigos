import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logo.svg';
import navIcon from '../../Assets/Images/navIcon.svg';
import Stack from 'react-bootstrap/Stack';


const Navheader = () => {
  
  return (
    <div className="row p-3 header">
      <div className="col-3 d-flex align-items-center justify-content-start">
        <Link to="/">
          <img src={logo} className="logo-img" alt='...' />
        </Link>
        <div className="con" style={{ paddingRight:'50px' }}></div>
        <a className="nav-link" href="/">Help center</a>
      </div>
      
      <div className="col-6 d-flex align-items-center justify-content-center">
        <Stack direction="horizontal" gap={3}>
          <ul className="option-container">
            <li>
              <Link to="/homepage">Home page</Link>
            </li>
            <li>
              <Link to="/sendingMoney">Sending money</Link>
            </li>
            <li>
              <Link to="/howISendMoney">Send money</Link>
            </li>
            <li>
              <Link to="/emailUs">help-page-email</Link>
            </li>
            <li>
              <Link to="/transactionPage">help-page-tnx</Link>
            </li>
          </ul>
        </Stack>
        
      </div>

      <div className="col-3 d-flex align-items-center justify-content-end">
        <h4>Name</h4>
        <br />
        <p>I'm student</p>
        <img alt='...' style={{ height:'50px', width: '50px' }} src={navIcon} className="logo-img" />
      </div>
      
    </div>
  );
};

export default Navheader;
