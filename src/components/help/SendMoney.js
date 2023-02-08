import React from 'react'
import Footer from '../footer/footer';
import Navheader from '../header/Navheader';
import BreadcrumbExample from './BreadcrumbExample';
import RelatedArticles from './RelatedArticles';

function SendMoney() {
  return (
    <>
      <Navheader />
      <BreadcrumbExample tag1="Help" tag2="Sending Money" tag3="How do I snd money"/>
      <div className="container">
        <h2>How do I send money?</h2>
        <ol>
            <li>Sign Up</li>
            <p>We’ll ask for your email address, and you’ll create a password. You can also sign up by connecting to your Google or Facebook account. 

            Tip: If you already have a Wise account, go to Home on the website and choose Send money, or tap Send on the app, to set up a transfer. 
            </p>

            <li>Type in how much you'd like to transfer</li>
            <p>You can start with the amount you’d like to send, or how much you’d like your recipient to get.
            Tip: If it’s important that your recipient gets an exact amount, type that amount into the Recipient gets box. We’ll automatically tell you how much you need to send.
            </p>
            <li>Let us know what kind of transfer you’re making.</li>
            <p>If you’re paying in from a personal bank account, it’s a Personal transfer. </p>
            <li>Fill in your details.</li>
            <p>We’ll ask for your personal details, like your address. We need this info to comply with finance regulations, but we’ll never share it. </p>
            <li>Tell us who you’re sending money to.</li>
            <p>If you have their bank details, add them in and we’ll send money to that account.
If you don’t have their bank details, just enter their email address.
If they’re on Wise, we’ll find the account they want to receive money into.
If they’re not on Wise, we’ll send them an email asking for their bank details.</p>

            <li> Review the details of your transfer.</li>
            <p>Make sure everything looks right. You can add a reference for your recipient if you’d like.</p>

            <li>Choose your transfer type and how to pay</li>
            <p>
                We’ll let you know the fees for each option, and how long it should take the money to arrive.
                Tip: It’s often cheapest to pay from your bank account. This means you’ll have to go to your online banking or your branch, and then send the money to Wise.
            </p>

            <li>That’s it!</li>
            <p>After we’ve received your money, we’ll confirm the transfer via email, or in the app. And we’ll also let you and your recipient know when the money’s on its way.</p>
        </ol>

        <h4>Still not resolved? You can email us</h4>
        <button className="btn btn-success">EmailUs</button>
      </div>
      <hr />
      <div className="container">
        <h5>Was this article helpful?</h5>
        <div className="d-flex flex-row mb-3">
            <button className="btn btn-success">Yes</button>
            <button className="btn btn-success">No</button>
        </div>
      </div>
      <hr />
      <RelatedArticles />
      <Footer />
    </>
  )
}

export default SendMoney;