import React from "react";

const day = new Date();
var currentYear = day.getFullYear();

function Footer(){
    return <footer className="footer">
    <p>Copyright TechInDom {currentYear}</p>
    </footer>;
}

export default Footer;