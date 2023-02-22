import React from 'react'
import BreadcrumbExample from './BreadcrumbExample';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Footer from '../footer/footer';
import HomeNavbar from '../header/HomeNavbar';
import { Link } from 'react-router-dom';
import BreadC2 from './BreadC2';

function SendingMoney() {
  return (
    <>
      <HomeNavbar />
      <div className="container mt50">
        {/* <BreadcrumbExample tag1="Help" tag2="Sending Money" /> */}
        <BreadC2 tag1="Help" tag2="Sending Money" />
        <br /><br />
        <div>
          <h3 className="txt700">Sending money</h3>
          <p>Setting up, paying for, editing, and cancelling transfers.</p>
        </div>
        <div className="tnx-page">
          <Card style={{ borderWidth: '0px' }}>
          <Card.Body style={{ padding: '0px'}}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item className="bordernone" eventKey="0">
                  <Accordion.Header>Sending Money Basics</Accordion.Header>
                  <Accordion.Body>
                    <ul className="ulStylenone">
                      <li style={{ paddingBottom: '10px' }}>
                        <Link className="nav-links" to="/howISendMoney">
                          How do I send money with Wise?
                        </Link>
                      </li>
                      <li style={{ paddingBottom: '10px' }}>
                        <Link className="nav-links" to="/homepage">
                          How long does a transfer take?
                        </Link>
                      </li>
                      <li style={{ paddingBottom: '10px' }}>
                        <Link className="nav-links" to="/homepage">
                          Can I send exact amounts?
                        </Link>
                      </li>
                      <li style={{ paddingBottom: '10px' }}>
                        <Link className="nav-links" to="/homepage">
                          How do you notify me about a transfer?
                        </Link>
                      </li>
                      <li style={{ paddingBottom: '10px' }}>
                        <Link className="nav-links" to="/homepage">
                          How do I download a transfer receipt?
                        </Link>
                      </li>
                      <li style={{ paddingBottom: '10px' }}>
                        <Link className="nav-links" to="/homepage">
                          Do I need to pay any tax on transfers?
                        </Link>
                      </li>
                      <li style={{ paddingBottom: '10px' }}>
                        <Link className="nav-links" to="/homepage">
                          How can I repeat a transfer?
                        </Link>
                      </li>
                      <li style={{ paddingBottom: '10px' }}>
                        <Link className="nav-links" to="/homepage">
                          Can I send from a joint bank account?
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-links" to="/homepage">
                          Can I send from someone else's bank account?
                        </Link>
                      </li>
                  </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="bordernone" eventKey="1">
                  <Accordion.Header>Where is my money?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab, voluptates, ex illum assumenda, nostrum adipisci officiis corporis laboriosam deleniti maxime aperiam dignissimos? Delectus deserunt corporis dolore vel dolores esse.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="bordernone" eventKey="2">
                  <Accordion.Header>Mistakes and editing your transfer</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quasi! Impedit deleniti quaerat aliquid unde odit exercitationem doloribus eos voluptatum, neque officiis mollitia perferendis autem, dolor iure vitae nulla et!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="bordernone" eventKey="3">
                  <Accordion.Header>Cancellations and Refunds</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit consequatur culpa impedit cumque fuga quo? Sint, quae ex at quos ab illo culpa cum, impedit atque magnam rerum sunt.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="bordernone" eventKey="4">
                  <Accordion.Header>Ways to Pay</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic corporis atque eligendi tempora voluptate perspiciatis possimus officiis voluptatem, officia doloribus dolore eum quos, eaque consectetur reprehenderit. Accusantium cumque facilis quos.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="bordernone" eventKey="5">
                  <Accordion.Header>Verifying your transfer</Accordion.Header>
                  <Accordion.Body>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga aliquid repudiandae dolor nisi. Atque odit ad odio quia nihil laudantium accusantium harum modi, facere dolorum voluptate ut, enim fuga.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="bordernone" eventKey="6">
                  <Accordion.Header>Sending large Transfer</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam repellendus iure modi, quas eveniet eos numquam iusto culpa quisquam neque accusamus iste eaque fugit inventore et molestias praesentium quos?
                  </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          </Card.Body>
          </Card>
        </div>
        <div className="mgb-50"></div>
      </div>
      <Footer />
    </>
  )
}

export default SendingMoney;

