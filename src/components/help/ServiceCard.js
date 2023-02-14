import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function ServiceCard(props) {
  function methodCallout(){
    console.log(props.title);
    <li>
      <Link className="nav-links" to="/sndmoney">Send money</Link>
    </li>
  }
  return (
    <>
      <Card style={{ width: '36rem' }}>
        <Card.Body>
            <div onClick={methodCallout} style={{ cursor: 'pointer' }} className="row">
                <div className="col-2">
                    <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={props.imgSrc} alt="..." />
                </div>
                <div className="col-10">
                    <Card.Title className="txt-bold">{props.title}</Card.Title>
                    <Card.Text>{props.desc}</Card.Text>
                </div>
            </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default ServiceCard;