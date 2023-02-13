import React from 'react'
import Footer from '../footer/footer';
import HomeNavbar from '../header/HomeNavbar';
import BreadcrumbExample from './BreadcrumbExample';
import RelatedArticles from './RelatedArticles';

function PageEmail() {
  return (
    <>
      <HomeNavbar />
      <div className="container">
        <BreadcrumbExample tag1="Help" tag2="Sending Money" tag3="How do I send money"/>
        <div>
          <h4 className="txt-bold">Email Us</h4>
          <p>About: <span className="txt-bold">How do I send money</span></p>
          <p>Issue: <span className="txt-bold">Understanding how to send money</span></p>
          <textarea name="desc" id="desc" placeholder='Enter description' cols="100" rows="10"></textarea>
          <br />
          <br />
          <a className="nav-links" href="/">Add attachment?</a>
          <br />
          <br />
          <button style={{ padding: '6px 70px' }} className="btn btn-outline-success borderRad-20 txt-bold">SEND EMAIL</button>
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