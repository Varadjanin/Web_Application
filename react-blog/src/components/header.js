import React from "react";

const Header = (props) => {
    const { title } = props;
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{title}</a>
            </div>
        </nav>
    )
}

export default Header;