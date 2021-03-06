import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade>Contact</Fade>
        </h1>
        <div className='contact-content'>
                <h1>
                Feel free to reach out<br></br>
                <span className='amazing-color'>anytime you'd like!</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' className="footerSocialLinks" rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>

            <span className='footer'>Created by Kevin Michael | 2021 </span>
        </div>);
    }
}
 
export default Contact;