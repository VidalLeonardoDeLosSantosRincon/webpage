import React,{Fragment} from 'react';

//assets
import "../css/PageNotFound.css"; 

const PageNotFound = (props)=>{
    return(
        <Fragment>
            <div className="ctr-404">
                <a href="/home">Volver al Home</a>
            </div>
        </Fragment>
    );
};
export default PageNotFound;