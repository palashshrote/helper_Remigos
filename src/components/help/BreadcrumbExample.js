import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbExample(props) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item active>{props.tag1}</Breadcrumb.Item>
      <Breadcrumb.Item active>{props.tag2}</Breadcrumb.Item>
      <Breadcrumb.Item active>{props.tag3}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;