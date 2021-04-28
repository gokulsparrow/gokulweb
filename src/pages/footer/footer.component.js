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
                    <a className="googleplusBtn smGlobalBtn" href="#" ></a>
                    <a className="linkedinBtn smGlobalBtn" href="#" ></a>
                    <a className="pinterestBtn smGlobalBtn" href="#" ></a>
                    <a className="tumblrBtn smGlobalBtn" href="#" ></a>
                    <a className="rssBtn smGlobalBtn" href="#" ></a>
		        </div>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/gokulsparrow"> GOKUL </a>
            </StyledFooter>
        </div>
    )
};

export default Footer;