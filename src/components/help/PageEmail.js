import React from 'react'
import Footer from '../footer/footer';
import HomeNavbar from '../header/HomeNavbar';
import BreadC2 from './BreadC2';
import BreadcrumbExample from './BreadcrumbExample';
import RelatedArticles from './RelatedArticles';

function PageEmail() {
  return (
    <>
      <HomeNavbar />
      <div className="container mt50">
        {/* <BreadcrumbExample tag1="Help" tag2="Sending Money" tag3="How do I send money"/> */}
        <BreadC2 tag1="Help" tag2="Sending Money" tag3="How do I send money" />
        <div className="mgb-50"></div>
        <div>
          <h4 className="txt700">Email Us</h4>
          <p>About: <span className="txt700">How do I send money</span></p>
          <p>Issue: <span className="txt700">Understanding how to send money</span></p>
          <textarea name="desc" id="desc" placeholder='Enter description' cols="100" rows="10"></textarea>
          <br />
          <br />
          <a className="nav-links" href="/">Add attachment?</a>
          <br />
          <br />
          <button style={{ paddingRight: '70px', paddingLeft: '70px' }} className="modi5btnlight">SEND EMAIL</button>
          <br />
          <br />
          <hr />
          <br />
          <RelatedArticles />
        </div>
      </div>
      <div className="mgb-50"></div>
      <Footer />
    </>
  )
}

export default PageEmail;