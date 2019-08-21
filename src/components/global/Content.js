//dependencies
import React,{Fragment} from 'react';
//assets
import '../../css/Content.css';
const Content = (props) => {
    const {content} = props;
    return(
        <Fragment>
            <div className="content_ctr">
                {content}
            </div>
        </Fragment>
    );
};

export default Content;