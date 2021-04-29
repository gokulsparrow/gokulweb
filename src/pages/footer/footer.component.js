import React from 'react';

import '../footer/footer.style.css';


import StyledFooter from "./footer.style";

const Footer = (props) => {
    return (
        <div>
            <StyledFooter>
                <div id="social">
                    <a className="facebookBtn smGlobalBtn" href="#" ></a>
                    <a className="twitterBtn smGlobalBtn" href="#" ></a>
                    <a className="googleplusBtn smGlobalBtn" href="gokulgk008@gmail.com" ></a>
                    <a className="linkedinBtn smGlobalBtn" href="https://www.linkedin.com/in/gokul-s-871214179/" ></a>
                    <a className="gitBtn smGlobalBtn" href="https://github.com/gokulsparrow" ></a>
		        </div>
                &copy; {new Date().getFullYear()} Copyright: <a href="#"> GOKUL </a>
            </StyledFooter>
        </div>
    )
};

export default Footer;

