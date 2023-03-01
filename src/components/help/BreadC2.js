import React from 'react'
import { Link } from 'react-router-dom';

function BreadC2(props) {
  return (
      <ul class="breadcrumb">
          <li><Link to="/">{props.tag1}</Link></li>
          <li><Link to={props.route2}>{props.tag2}</Link></li>
          <li><Link to="/">{props.tag3}</Link></li>
      </ul>
  )
}

export default BreadC2;