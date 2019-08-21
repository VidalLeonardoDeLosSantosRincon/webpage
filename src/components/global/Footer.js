//dependencies
import React ,{Fragment} from 'react';
//assets
import "../../css/Footer.css";

const Footer = (props)=>{
    return(
        <Fragment>
            <footer className="footer">
                {props.children}
            </footer>
        </Fragment>
    );
};
export default Footer;
