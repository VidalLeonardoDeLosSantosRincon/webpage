//dependencies
import React,{Component, Fragment} from "react";
//assets
import "../css/ContactForm.css";

class ContactForm extends Component{

    /*constructor(props){
        super(props);
    }*/
    render(){
        return(
            <Fragment>
                <div className="form-box">
                    <label htmlFor="contact-form">Formulario de contacto</label>
                    <form >
                        <input className="field" type="text" name="message" id="message"/>
                        <input className="btn" type="submit" value="Enviar mensaje"/>
                    </form>
                </div>
            </Fragment>
        );
    }
}
export default ContactForm;