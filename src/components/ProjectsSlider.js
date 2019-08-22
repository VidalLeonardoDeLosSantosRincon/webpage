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
            current:0,
            count:0
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrev = this.handleClickPrev.bind(this);
    }

    componentDidMount(){
        if(this.dots.children!=="undefined"){
            const {current} = this.state;
            this.dots.children[current].style.backgroundColor="black";
            this.imgs.children[current].style.border="3px solid dodgerblue";
            console.log(this.dots.children!=="undefined");
        }
        
    }

    componentDidUpdate(){
        this.handleShowIndex(); 
    }

    handleShowIndex (){
        if(this.dots.children!=="undefined"){
            const {current} = this.state;
            if(current<this.dots.children.length){            
                for(let i=0; i<this.dots.children.length;i++){
                    if(i===current){
                        this.dots.children[current].style.backgroundColor="black";
                        this.imgs.children[current].style.border="3px solid dodgerblue";
                    }else{
                    // console.log(`i is ${i} and current is ${current}`);
                        this.dots.children[i].style.backgroundColor="gray";
                        this.imgs.children[i].style.border="none";
                    }
                }
            }
        }
    }

    



handleClickNext(){
    this.setState((state,props)=>{
        return {current : this.state.current + 1}
    });
    this.handleShowIndex();
}

handleClickPrev(){
    if(this.state.current >0){
        this.setState((state,props)=>{
            return {current : this.state.current - 1}
        });    
        this.handleShowIndex();
    }else if(this.state.current===0){
        this.handleShowIndex();
    }
}
    render(){
        const {imagenes} = this.state;
        return(
            <Fragment>
                <div className="project-slider-ctr">
                <div className="slide-ctr">
                    <input type="button" onClick={this.handleClickPrev} className="btn-slide" id="btn-left" value="<"/>
                    <div className="slide-box"  ref={(img)=> this.imgs = img} >
                        { 
                            
                            imagenes.map(function(img ,index){
                            return (<div key={`img_${index}`} className="slide-item">
                                <SlideImage img={img} id={`img_${index}`}/>
                            </div>);
                            })

                        }

                       
                    </div>    
                    <input type="button" onClick={this.handleClickNext} className="btn-slide" id="btn-right" value=">"/>
                </div>
                <ul className="dots" ref={(dot)=> this.dots = dot}>
                    { 
                        imagenes.map(function(img ,index){
                            return (<li key={`dot_${index}`}></li>);
                        })
                    }
                </ul>
                </div>
            </Fragment>
        );
    }
}
export default ProjectsSlider;