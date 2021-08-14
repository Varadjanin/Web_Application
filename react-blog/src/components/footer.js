
import React from "react";

const Footer = (props) => {
    return (
       
        <div className="page-footer footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} BIT React Posts
            </div>
        </div>
    )
}

export default Footer;