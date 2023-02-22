import React from 'react'
import Footer from '../footer/footer';
import Navheader from '../header/Navheader';//throwx errors
import BreadcrumbExample from './BreadcrumbExample';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import paidTo from '../../Assets/Images/paidTo.svg';
import HomeNavbar from '../header/HomeNavbar';
import BreadC2 from './BreadC2';

function PageTnx() {
  return (
      <>
        <HomeNavbar />
        <div className="container mt50">
            {/* <BreadcrumbExample tag1="Hello" tag2="Transaction"/> */}
            <BreadC2 tag1="Help" tag2="Transaction" />
            <div className="tnx-page">
                <Card style={{ padding: '30px 20px' }}>
                <Card.Body>
                    <div className="text-center">
                        <img src={paidTo} alt="twitter-ico" />
                        <br />
                        Paid to
                        <br />
                        <p className="txt-bold">London Business <br /> School (Fees)</p>
                    </div>
                    <label className="txt-bold">Select issue</label>
                    <Accordion>
                        <Accordion.Item className="borderNLR" eventKey="0">
                            <Accordion.Header>Where is my money</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="borderNLR" eventKey="1">
                            <Accordion.Header>Where is my money</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="borderNLR" eventKey="2">
                            <Accordion.Header>Where is my money</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="borderNLR" eventKey="3">
                            <Accordion.Header>Where is my money</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
                </Card>
            </div>
        </div>
        <Footer />
      </>
  )
}

export default PageTnx;