import React from 'react';

import '../footer/footer.style.css';

import StyledFooter from "./footer.style";

const Footer = (props) => {
    return (
        <div>
            <StyledFooter>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/gokulsparrow"> GOKUL </a>
            </StyledFooter>
        </div>
    )
};

export default Footer;