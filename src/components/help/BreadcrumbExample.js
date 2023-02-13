import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

function BreadcrumbExample(props) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item><Link className="nav-links" to="/">{props.tag1}</Link></Breadcrumb.Item>
      <Breadcrumb.Item><Link className="nav-links" to="/">{props.tag2}</Link></Breadcrumb.Item>
      <Breadcrumb.Item><Link className="nav-links" to="/">{props.tag3}</Link></Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;