import React from 'react';
// import '../../App.css';

function RelatedArticles() {
  return (
    <div className='container'>
        <h5 className="txt-bold">Related Articles</h5>
        <ul className="ulStylenone paddingL0">
            <li style={{ paddingBottom: '10px' }}><a className="nav-links" href="/">How long does a transfer take?</a></li>
            <li style={{ paddingBottom: '10px' }}><a className="nav-links" href="/">Can I send exact amount?</a></li>
            <li style={{ paddingBottom: '10px' }}><a className="nav-links" href="/">How do you notify me about a transfer?</a></li>
            <li style={{ paddingBottom: '10px' }}><a className="nav-links" href="/">How do I download a transfer receipt?</a></li>
            <li style={{ paddingBottom: '10px' }}><a className="nav-links" href="/">Do I need to pay any tax on transfers?</a></li>
            <li style={{ paddingBottom: '10px' }}><a className="nav-links" href="/">How can I repeat a transfer?</a></li>
            <li style={{ paddingBottom: '10px' }}><a className="nav-links" href="/">Can I send from a joint bank account?</a></li>
            <li style={{ paddingBottom: '10px' }}><a className="nav-links" href="/">Can I send from someone else's bank account?</a></li>
        </ul>
        

    </div>
  )
}

export default RelatedArticles;