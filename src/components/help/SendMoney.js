import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import HomeNavbar from '../header/HomeNavbar';
import BreadcrumbExample from './BreadcrumbExample';
import RelatedArticles from './RelatedArticles';

function SendMoney() {
  return (
    <>
      <HomeNavbar />
      <div className="container">
        <BreadcrumbExample tag1="Help" tag2="Sending Money" tag3="How do I snd money"/>
        <br /><br />
        <div>
          <h2 className="txt-bold">How do I send money?</h2>
          <ol style={{ paddingLeft: '15px' }}>
              <li className="txt-bold">Sign Up</li>
              <p>We’ll ask for your email address, and you’ll create a password. You can also sign up by connecting to your Google or Facebook account. 

              Tip: If you already have a Wise account, go to Home on the website and choose Send money, or tap Send on the app, to set up a transfer. 
              </p>

              <li className="txt-bold">Type in how much you'd like to transfer</li>
              <p>You can start with the amount you’d like to send, or how much you’d like your recipient to get.
              Tip: If it’s important that your recipient gets an exact amount, type that amount into the Recipient gets box. We’ll automatically tell you how much you need to send.
              </p>
              <li className="txt-bold">Let us know what kind of transfer you’re making.</li>
              <p>If you’re paying in from a personal bank account, it’s a Personal transfer. </p>
              <li className="txt-bold">Fill in your details.</li>
              <p>We’ll ask for your personal details, like your address. We need this info to comply with finance regulations, but we’ll never share it. </p>
              <li className="txt-bold">Tell us who you’re sending money to.</li>
              <p>If you have their bank details, add them in and we’ll send money to that account.
  If you don’t have their bank details, just enter their email address.
  If they’re on Wise, we’ll find the account they want to receive money into.
  If they’re not on Wise, we’ll send them an email asking for their bank details.</p>

              <li className="txt-bold"> Review the details of your transfer.</li>
              <p>Make sure everything looks right. You can add a reference for your recipient if you’d like.</p>

              <li className="txt-bold">Choose your transfer type and how to pay</li>
              <p>
                  We’ll let you know the fees for each option, and how long it should take the money to arrive.
                  Tip: It’s often cheapest to pay from your bank account. This means you’ll have to go to your online banking or your branch, and then send the money to Wise.
              </p>

              <li className="txt-bold">That’s it!</li>
              <p>After we’ve received your money, we’ll confirm the transfer via email, or in the app. And we’ll also let you and your recipient know when the money’s on its way.</p>
          </ol>
          <br />
          <h5 className="txt-bold">Still not resolved? You can email us</h5>
          <br />
          <Link className="nav-links" to="/pgemail">
            <button style={{ padding: '6px 70px' }} className="btn btn-outline-success borderRad-20 txt-bold">EmailUs</button>
          </Link>
          <br />
          <br />
        </div>
        <hr />
        <div>
          <br />
          <h5>Was this article helpful?</h5>
          <div className="d-flex flex-row mb-1">
              <button style={{ padding: '6px 40px' }} className="btn btn-success borderRad-20 txt-bold">YES</button>
              <div style={{ margin: '0px 10px' }} ></div>
              <button style={{ padding: '6px 40px' }} className="btn btn-success borderRad-20 txt-bold">NO</button>
          </div>
          <br />
        </div>
        <hr /><br />
        <RelatedArticles />
        <div class="mgb-50"></div>
      </div>
      <Footer />
    </>
  )
}

export default SendMoney;