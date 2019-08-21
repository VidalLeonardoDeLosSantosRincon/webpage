import React,{Fragment} from 'react';
import '../../css/Banner.css';

import profilePicture from '../../img/fondo_banner.jpeg';

const Banner = (props) => {
    return(
        <Fragment>
            <div className="ctr-banner">
                <div className="info"> 
                    <div className="info-elem">
                        <div className="picture-box">
                            <img src={profilePicture} alt=""/>
                            <div className="info-box">
                                <h4>Vidal De Los Santos</h4>
                            </div>
                        </div>
                        <div className="description-box">
                            <h4>Web Developer Jr</h4>
                            <h6>PHP</h6>
                            <h6>JavaScript</h6>
                            <h6>React Js</h6>
                        </div>
                    </div>
                    <div className="info-elem two">
                        <a href="/about me">Ver mas</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Banner;


