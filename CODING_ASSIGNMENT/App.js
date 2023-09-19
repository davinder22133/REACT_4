import React from "react";
import  ReactDOM  from "react-dom/client";

import Logo from './images/remove.png';

const altText = "LOGO";

const logo_css={
    display: "inline",
    width: "150px",
    height: "auto"
   
};

const nav_css={
    display: "flex",
    justifyContent: "flex-end",
    
}

const div_css={
    display:"flex",
    justifyContent:"space-between"
}
const link_css={
    marginRight: "10px",
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
  marginTop:"40px"
}
const Header_part=()=>{
    return(
        <div style={div_css}>
           
           
         <img src={Logo} alt={altText} style={logo_css}/>
         
         <nav style={nav_css}>
         <a href="#" style={link_css}>Home</a>
        <a href="#" style={link_css}>About</a>
        <a href="#" style={link_css}>Contact</a>         
       </nav>
        </div>
        
    );
}

const root_el=ReactDOM.createRoot(document.getElementById('header'));
root_el.render(<Header_part/>);