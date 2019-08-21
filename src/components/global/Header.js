//dependencies
import React,{Fragment} from 'react';
//assets
import "../../css/Header.css";

//components
import logoHeader from "../../img/logo0118.png";
import HeaderMenu from "./HeaderMenu";

const Header = (props) => {

    const menuItems = [
        {name:"Home",path:"/home"},
        {name:"Projects",path:"/projects"},
        {name:"About me",path:"/about me"},
    ];
    return (
        <Fragment>
            <header className="header">
                <img src={logoHeader} alt="img-logo"/>
                <HeaderMenu menuItems={menuItems}/>
            </header>
        </Fragment>
    );
};

export default Header;

