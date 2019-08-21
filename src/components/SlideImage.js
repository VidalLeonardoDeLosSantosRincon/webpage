import React,{Fragment} from "react";

const SlideImage = (props)=>{
    const {img} = props;
    return(
        <Fragment>
                <img src={img.src} alt={img.alt}/>
        </Fragment>
    )
};

export default SlideImage;