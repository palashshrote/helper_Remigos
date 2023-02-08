import React from 'react'
import Navheader from '../header/Navheader';
import BreadcrumbExample from './BreadcrumbExample';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Footer from '../footer/footer';

function SendingMoney() {
  return (
    <>
      <Navheader />
      <BreadcrumbExample tag1="Help" tag2="Sending Money" />
      <div className="container">
        <h3>Sending money</h3>
        <p>Setting up, paying for, editing, and cancelling transfers.</p>
      </div>
      <div className="container">
        <Card>
        <Card.Body>
          <Accordion  defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Sending Money Basics</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>How do I send money with Wise?</li>
                    <li>How long does a transfer take?</li>
                    <li>Can I send exact amounts?</li>
                    <li>How do you notify me about a transfer?</li>
                    <li>How do I download a transfer receipt?</li>
                    <li>Do I need to pay any tax on transfers?</li>
                    <li>How can I repeat a transfer?</li>
                    <li>Can I send from a joint bank account?</li>
                    <li>Can I send from someone else's bank account?</li>
                </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Where is my money?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab, voluptates, ex illum assumenda, nostrum adipisci officiis corporis laboriosam deleniti maxime aperiam dignissimos? Delectus deserunt corporis dolore vel dolores esse.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Mistakes and editing your transfer</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quasi! Impedit deleniti quaerat aliquid unde odit exercitationem doloribus eos voluptatum, neque officiis mollitia perferendis autem, dolor iure vitae nulla et!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Cancellations and Refunds</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit consequatur culpa impedit cumque fuga quo? Sint, quae ex at quos ab illo culpa cum, impedit atque magnam rerum sunt.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Ways to Pay</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic corporis atque eligendi tempora voluptate perspiciatis possimus officiis voluptatem, officia doloribus dolore eum quos, eaque consectetur reprehenderit. Accusantium cumque facilis quos.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Verifying your transfer</Accordion.Header>
                <Accordion.Body>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga aliquid repudiandae dolor nisi. Atque odit ad odio quia nihil laudantium accusantium harum modi, facere dolorum voluptate ut, enim fuga.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Sending large Transfer</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam repellendus iure modi, quas eveniet eos numquam iusto culpa quisquam neque accusamus iste eaque fugit inventore et molestias praesentium quos?
                </Accordion.Body>
              </Accordion.Item>
          </Accordion>
        </Card.Body>
        </Card>
      </div>
      <Footer />
    </>
  )
}

export default SendingMoney;

