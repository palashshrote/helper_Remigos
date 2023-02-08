import React from 'react'
import Footer from '../footer/footer';
import Navheader from '../header/Navheader';
import Table from 'react-bootstrap/Table';
import ServiceCard from './ServiceCard';
import snd_money from '../../Assets/Images/snd_money.svg'
import acc_verification from '../../Assets/Images/acc_verification.svg'
import manage_your_acc from '../../Assets/Images/manage_your_acc.svg'
import sender_acc from '../../Assets/Images/sender_acc.svg'
import get_sim from '../../Assets/Images/get_sim.svg'
import insurance_help from '../../Assets/Images/insurance_help.svg'

function HomePage() {
  return (
    <>
      <div className="container">
        <Navheader />
        <div>
            <h3>Hi, how can we help you?</h3>
            <br />
            <div className="input-group">
                <button type="button" className="btn btn-primary">Search</button>
                <div className="form-outline">
                    <input id="search-focus" type="search" id="form1" className="form-control" />
                    <label className="form-label" htmlFor="form1">Search</label>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <h5>Need help with recent Transaction?</h5>
            <Table striped bordered hover>
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
            </Table>
        </div>
        <br />
        <h5>Explore all topics</h5>
        <div className="row">
            <div className="col-6">
                <ServiceCard imgSrc={snd_money} title="Send money" desc="Setting up, paying for, editing, and cancelling transfers."/>
            </div>
            <div className="col-6">
                <ServiceCard imgSrc={manage_your_acc} title="Managing your Account" desc="Setting up, paying for, editing, and cancelling transfers."/>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <ServiceCard imgSrc={acc_verification} title="Account Verification" desc="Setting up, paying for, editing, and cancelling transfers."/>
            </div>
            <div className="col-6">
                <ServiceCard imgSrc={sender_acc} title="Sender Accounts" desc="Setting up, paying for, editing, and cancelling transfers."/>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <ServiceCard imgSrc={get_sim} title="Getting a SIM card" desc="Setting up, paying for, editing, and cancelling transfers."/>
            </div>
            <div className="col-6">
                <ServiceCard imgSrc={insurance_help} title="Insurance Help" desc="Setting up, paying for, editing, and cancelling transfers."/>
            </div>
        </div>
        <br />
        <div className="d-flex flex-row mb-3">
            <h4>Still need help?</h4>
            <button className="btn btn-success">CONTACT US</button>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default HomePage;