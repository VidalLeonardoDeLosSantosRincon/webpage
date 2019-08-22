import React,{Fragment} from "react";

const SlideImage = (props)=>{
    const {img,id} = props;
    return(
        <Fragment>
                <img src={img.src} id={id} alt={img.alt}/>
        </Fragment>
    )
};

export default SlideImage;