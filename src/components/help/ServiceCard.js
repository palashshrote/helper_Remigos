import React from 'react'
import Card from 'react-bootstrap/Card';
import snd_money from '../../Assets/Images/snd_money.svg'
function ServiceCard(props) {
  return (
    <>
      <Card style={{ width: '36rem' }}>
        <Card.Body>
            <div className="row">
                <div className="col-3">
                    <img src={props.imgSrc} alt="..." />
                </div>
                <div className="col-9">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.desc}</Card.Text>
                </div>
            </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default ServiceCard;