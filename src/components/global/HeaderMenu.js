import React,{Fragment} from "react";

//assets 
import "../../css/HeaderMenu.css";

const HeaderMenu = (props)=>{

    const {menuItems} = props;
    return(
        <Fragment>
            <ul className="header-menu">
                {
                    menuItems.map((item,index)=>{
                        console.log(item.path);
                        return <a key={index} href={item.path}><li>{item.name}</li></a>;
                    }) 
                }
            </ul>
        </Fragment>
    );
};

export default HeaderMenu;