//dependencies
import React,{Component, Fragment} from 'react';
//assets
import "../css/Home.css";
//components
import Banner from '../components/global/Banner';
import InfoCard from '../components/InfoCard';

class Home extends Component{
    render(){
        return(
            <Fragment>
                <div className="ctr-home">
                    <Banner/>
                    <InfoCard/>
                </div>
            </Fragment>
        );
    }
}

export default Home;