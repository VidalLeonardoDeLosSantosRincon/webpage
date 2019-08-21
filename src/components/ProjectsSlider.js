import React,{Component, Fragment} from "react";
import "../css/ProjectsSlider.css";

import SlideImage from "./SlideImage";

class ProjectsSlider extends Component{
    constructor(props){
        super(props);
        this.state = {
            imagenes:[ 
                {src:"https://source.unsplash.com/collection/881002",
                alt:"uno.jpg"
                },
                {src:"https://source.unsplash.com/umchkHwkdyM",
                alt:"dos.jpg"
                },
                {src:"https://source.unsplash.com/weekly",
                alt:"tres.jpg"
                }
            ],
            prev:"",
            next:"",
            count:0
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrev = this.handleClickPrev.bind(this);
    }



handleClickNext(){
    this.setState((state,props)=>{
        return {count : this.state.count + 1}
    });
}


handleClickPrev(){
    this.setState((state,props)=>{
        if(this.state.count >0){
            return {count : this.state.count - 1}
        }
    });
}

    render(){

        const {imagenes} = this.state;

       
        return(
            <Fragment>
                <div className="slide-ctr">
                    <input type="button" onClick={this.handleClickPrev} className="btn-slide" id="btn-left" value="<"/>
                    <div className="slide-box">
                        { imagenes.map(function(img ,index){
                            return (<div key={`img_${index}`} className="slide-item">
                                <SlideImage img={img}/>
                            </div>);
                            })
                        }
                    </div>    
                    <input type="button" onClick={this.handleClickNext} className="btn-slide" id="btn-right" value=">"/>
                    {console.log(this.state.count)}
                </div>
            </Fragment>
        );
    }
}
export default ProjectsSlider;