import React from 'react'
import Footer from '../footer/footer';
import ServiceCard from './ServiceCard';
import snd_money from '../../Assets/Images/snd_money.svg'
import acc_verification from '../../Assets/Images/acc_verification.svg'
import manage_your_acc from '../../Assets/Images/manage_your_acc.svg'
import search from '../../Assets/Images/search.svg'
import sender_acc from '../../Assets/Images/sender_acc.svg'
import get_sim from '../../Assets/Images/get_sim.svg'
import insurance_help from '../../Assets/Images/insurance_help.svg'
import HomeNavbar from '../header/HomeNavbar';
import paidTo from '../../Assets/Images/paidTo.svg';
import { Link } from 'react-router-dom';

function cardClick(){
    console.log("Card clicked");
}
function HomePage() {
  return (
    <>
    <HomeNavbar />
      <div className="container">
        <div style={{ marginTop: '30px'}}>
            <h3 style={{ width: '350px' }} className="txt-bold mx-auto">Hi, how can we help you?</h3>
            <br />
            <div className="mx-auto" style={{ width: '50rem' }}>
                <form className="d-flex">
                    <img src={search} alt="..." />
                    <input id="search" name="search" style={{ width: '50rem' }} className="form-control me-2" type="search" placeholder="Search for Articles" aria-label="Search"/>
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
            </div>
        </div>
        <div className="mgb-50"></div>
        <hr /><br />
        <div>
            <h5 className="txt-bold">Need help with recent Transaction?</h5>
            <div style={{ margin: '50px 0' }}></div>
            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5 Apr, 2022</td>
                        <td>London Business School (Fees)</td>
                        <td>@£14000</td>
                    </tr>
                    <tr>
                        <td>5 Apr, 2022</td>
                        <td>London Business School (Fees)</td>
                        <td>@£14000</td>
                    </tr>
                    <tr>
                        <td>5 Apr, 2022</td>
                        <td>London Business School (Fees)</td>
                        <td>@£14000</td>
                    </tr>
                </tbody>
            </Table> */}
            <div className="row mb-2">
                <div className="col-2">
                    <p>5 April, 22</p>
                </div>
                <div className="col-9 d-flex flex-row">
                    <img style={{ height: '40px', marginRight: '15px' }} src={paidTo} alt="twitter-ico" />
                    <p>Paid to <br />London Business School</p>
                </div>
                <div className="col-1">
                    <p style={{ marginBottom: '0px' }}>&#x20B9;1410500</p>
                    <p className="txt-bold">&#x20A4;14000</p>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-2">
                    <p>5 April, 22</p>
                </div>
                <div className="col-9 d-flex flex-row">
                    <img style={{ height: '40px', marginRight: '15px' }} src={paidTo} alt="twitter-ico" />
                    <p>Paid to <br />London Business School</p>
                </div>
                <div className="col-1">
                    <p style={{ marginBottom: '0px' }}>&#x20B9;1410500</p>
                    <p className="txt-bold">&#x20A4;14000</p>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-2">
                    <p>5 April, 22</p>
                </div>
                <div className="col-9 d-flex flex-row">
                    <img style={{ height: '40px', marginRight: '15px' }} src={paidTo} alt="twitter-ico" />
                    <p>Paid to <br />London Business School</p>
                </div>
                <div className="col-1">
                    <p style={{ marginBottom: '0px' }}>&#x20B9;1410500</p>
                    <p className="txt-bold">&#x20A4;14000</p>
                </div>
            </div>
        </div>
        <div className="mgb-50"></div>
        <br />
        <h5 className="txt-bold">Explore all topics</h5>
        <br />
        <div className="row">
            <div className="col-6">
                <Link style={{ color: 'black' }} className="nav-links" to="/sndingmoney">
                    <ServiceCard imgSrc={snd_money} title="Send money" desc="Setting up, paying for, editing, and cancelling transfers."/>
                </Link>
            </div>
            <div className="col-6">
                <Link style={{ color: 'black' }} className="nav-links" to="/manageuracc">
                    <ServiceCard imgSrc={manage_your_acc} title="Managing your Account" desc="Setting up, paying for, editing, and cancelling transfers."/>
                </Link>                
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-6">
                <Link style={{ color: 'black' }} className="nav-links" to="/manageuracc">
                    <ServiceCard imgSrc={acc_verification} title="Account Verification" desc="Setting up, paying for, editing, and cancelling transfers."/>
                </Link> 
            </div>
            <div className="col-6">
                <Link style={{ color: 'black' }} className="nav-links" to="/sndmoney">
                    <ServiceCard imgSrc={sender_acc} title="Sender Accounts" desc="Setting up, paying for, editing, and cancelling transfers."/>
                </Link> 
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-6">
                <Link style={{ color: 'black' }} className="nav-links" to="/pgemail">
                    <ServiceCard imgSrc={get_sim} title="Getting a SIM card" desc="Setting up, paying for, editing, and cancelling transfers."/>
                </Link> 
            </div>
            <div className="col-6">
                <Link style={{ color: 'black' }} className="nav-links" to="/pgtnx">
                    <ServiceCard imgSrc={insurance_help} title="Insurance Help" desc="Setting up, paying for, editing, and cancelling transfers."/>
                </Link> 
            </div>
        </div>
        <br /><br />
        <div className="d-flex flex-row align-items-center mb-3">
            <h5 style={{ marginRight: '20px' }} className="txt-bold">Still need help?</h5>
            <button className="modi5btn">CONTACT US</button>
        </div>
        <div className="mgb-50"></div>
      </div>
    <Footer />
    </>
  )
}

export default HomePage;