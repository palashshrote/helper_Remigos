import React from 'react'
import Footer from '../footer/footer';
import ServiceCard from './ServiceCard';
import snd_money from '../../Assets/Images/snd_money.svg'
import acc_verification from '../../Assets/Images/acc_verification.svg'
import manage_your_acc from '../../Assets/Images/manage_your_acc.svg'
import sender_acc from '../../Assets/Images/sender_acc.svg'
import get_sim from '../../Assets/Images/get_sim.svg'
import insurance_help from '../../Assets/Images/insurance_help.svg'
import HomeNavbar from '../header/HomeNavbar';
import paidTo from '../../Assets/Images/paidTo.svg';
import { Link } from 'react-router-dom';

function divclicked(){
    console.log("div clicked");
}
function HomePage() {
  return (
    <>
    {/* <HomeNavbar /> */}
    <HomeNavbar />
      <div className="container">
        <div style={{ marginTop: '1.875rem'}}>
            <h3 style={{ width: '21.875rem' }} className="txt700 mx-auto">Hi, how can we help you?</h3>
            <br />
            <div className="mx-auto" style={{ width: '50rem' }}>
                <form className="d-flex">
                    {/* <img src={search} alt="..." /> */}
                    <input id="search" name="search" className="form-control me-2 srch-bar" type="search" placeholder="Search for Articles" aria-label="Search"/>
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
            </div>
        </div>
        <div className="mgb-50"></div>
        <hr /><br />
        <div>
            <h5 className="txt700">Need help with recent Transaction?</h5>
            <div style={{ margin: '3.125rem 0' }}></div>
            
            <Link style={{ color: 'black' }} className="nav-links" to="/transactionPage">
                <div onClick={divclicked} className="row py-2 hov"  style={{ margin: '10px 20px' }}>
                    <div className="col-sm-2">
                        <p>5 April, 22</p>
                    </div>
                    <div className="col-lg-9 col-sm-8 d-flex flex-row">
                        <img style={{ height: '2.5rem', marginRight: '0.938rem' }} src={paidTo} alt="twitter-ico" />
                        <p>Paid to <br />London Business School</p>
                    </div>
                    <div style={{ textAlign: 'right' }} className="col-1">
                        <p style={{ marginBottom: '0rem' }}>&#x20B9;1410500</p>
                        <p className="txt-bold">&#x20A4;14000</p>
                    </div>
                </div>
            </Link>
            <Link style={{ color: 'black' }} className="nav-links" to="/transactionPage">
                <div onClick={divclicked} className="row py-2 hov"  style={{ margin: '10px 20px' }}>
                    <div className="col-sm-2">
                        <p>5 April, 22</p>
                    </div>
                    <div className="col-lg-9 col-sm-8 d-flex flex-row">
                        <img style={{ height: '2.5rem', marginRight: '0.938rem' }} src={paidTo} alt="twitter-ico" />
                        <p>Paid to <br />London Business School</p>
                    </div>
                    <div style={{ textAlign: 'right' }} className="col-1">
                        <p style={{ marginBottom: '0rem' }}>&#x20B9;1410500</p>
                        <p className="txt-bold">&#x20A4;14000</p>
                    </div>
                </div>
            </Link>
            <Link style={{ color: 'black' }} className="nav-links" to="/transactionPage">
                <div onClick={divclicked} className="row py-2 hov" style={{ margin: '10px 20px' }}>
                    <div className="col-sm-2">
                        <p>5 April, 22</p>
                    </div>
                    <div className="col-lg-9 col-sm-8 d-flex flex-row">
                        <img style={{ height: '2.5rem', marginRight: '0.938rem' }} src={paidTo} alt="twitter-ico" />
                        <p>Paid to <br />London Business School</p>
                    </div>
                    <div style={{ textAlign: 'right' }} className="col-1">
                        <p style={{ marginBottom: '0rem' }}>&#x20B9;1410500</p>
                        <p className="txt-bold">&#x20A4;14000</p>
                    </div>
                </div>
            </Link>
            
        </div>
        <div className="mgb-50"></div>
        <br />
        <h5 className="txt700">Explore all topics</h5>
        <br />
        <div className="row">
            <div className="col-md-6">
                <Link style={{ color: 'black' }} className="nav-links" to="/sendingMoney">
                    <ServiceCard imgSrc={snd_money} title="Send money" desc="Setting up, paying for, editing, and cancelling transfers."/>
                </Link>
            </div>
            <div className="col_br col-md-6">
                <Link style={{ color: 'black' }} className="nav-links" to="/manageuracc">
                    <ServiceCard imgSrc={manage_your_acc} title="Managing your Account" desc="Setting up, paying for, editing, and cancelling transfers."/>
                </Link>                
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-6">
                <Link style={{ color: 'black' }} className="nav-links" to="/manageuracc">
                    <ServiceCard imgSrc={acc_verification} title="Account Verification" desc="Setting up, paying for, editing, and cancelling transfers."/>
                </Link> 
            </div>
            <div className="col_br col-md-6">
                <Link style={{ color: 'black' }} className="nav-links" to="/howISendMoney">
                    <ServiceCard imgSrc={sender_acc} title="Sender Accounts" desc="Setting up, paying for, editing, and cancelling transfers."/>
                </Link> 
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-6">
                <Link style={{ color: 'black' }} className="nav-links" to="/emailUs">
                    <ServiceCard imgSrc={get_sim} title="Getting a SIM card" desc="Setting up, paying for, editing, and cancelling transfers."/>
                </Link> 
            </div>
            <div className="col_br col-md-6">
                <Link style={{ color: 'black' }} className="nav-links" to="/transactionPage">
                    <ServiceCard imgSrc={insurance_help} title="Insurance Help" desc="Setting up, paying for, editing, and cancelling transfers."/>
                </Link> 
            </div>
        </div>
        <br /><br />
        <div className="d-flex flex-row align-items-center mb-3">
            <h5 style={{ marginRight: '1.25rem' }} className="txt-bold">Still need help?</h5>
            <button className="modi5btn">CONTACT US</button>
        </div>
        <div className="mgb-50"></div>
      </div>
    <Footer />
    </>
  )
}

export default HomePage;