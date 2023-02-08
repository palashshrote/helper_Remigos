import React from 'react'
import Footer from '../footer/footer';
import Navheader from '../header/Navheader';
import BreadcrumbExample from './BreadcrumbExample';
import RelatedArticles from './RelatedArticles';

function PageEmail() {
  return (
    <>
      <Navheader />
      <BreadcrumbExample tag1="Help" tag2="Sending Money" tag3="How do I snd money"/>
      <div className="container">
        <h2>Email Us</h2>
        <p>About How do I send money</p>
        <p>Issue: Understanding how to send money</p>
        <textarea name="desc" id="desc" placeholder='Enter description' cols="60" rows="10"></textarea>
        <br />
        <a href="/">Add attachment?</a>
        <br />
        <button className="btn btn-success">SEND EMAIL</button>
        <hr />
        <RelatedArticles />
      </div>

      <Footer />
    </>
  )
}

export default PageEmail;