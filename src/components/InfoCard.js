//dependencies
import React,{Fragment} from 'react';
//assets
import "../css/InfoCard.css";
//components
import ProjectsSlider from './ProjectsSlider';

const InfoCard = (props)=>{
    return(
        <Fragment>
            <div className="info-card-box">
                <ProjectsSlider/>
            </div>
        </Fragment>
    );
};

export default InfoCard;