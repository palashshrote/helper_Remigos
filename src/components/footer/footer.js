import React from 'react';
import './footer.scss';
import TwiiterIco from '../../Assets/Images/twitter-ico.svg';
import FacebookIco from '../../Assets/Images/facebook-ico.svg';
import InstaIco from '../../Assets/Images/insta-ico.svg';

function Footer() {
  return (
    <>
      <div className="container-fluid footer-wrapper h-100">
        <div style={{ marginLeft: '80px', marginRight: '80px' }} className="row h-100 align-items-center py-4">
          <div className="col-12 col-sm-4 page-link-text">
            <ul className="ps-0">
              <li>
                <a
                  href="https://www.remigos.com/about"
                  target="_blank"
                  rel="noreferrer">
                  {' '}
                  About Us{' '}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message/KVW64HQKH7SID1"
                  target="_blank"
                  rel="noreferrer">
                  {' '}
                  Contact Us{' '}
                </a>
              </li>
              <li>
                <a
                  href="https://www.remigos.com/privacy-policy"
                  target="_blank"
                  rel="noreferrer">
                  {' '}
                  Legal{' '}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-4 text-center py-4">
            <p className="mb-0"> Copyright © 2023 Remigos.com </p>
          </div>
          <div className="col-12 col-sm-4 text-center text-sm-end social-links">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/remigosltd/"
                  target="_blank"
                  rel="noreferrer">
                  {' '}
                  <img src={FacebookIco} alt="facebook-ico" />{' '}
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Remigos_"
                  target="_blank"
                  rel="noreferrer">
                  {' '}
                  <img src={TwiiterIco} alt="twitter-ico" />{' '}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/remigos_/"
                  target="_blank"
                  rel="noreferrer">
                  {' '}
                  <img src={InstaIco} alt="insta-ico" />{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
