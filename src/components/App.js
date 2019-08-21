import React from 'react';
//assets
import '../css/App.css';
//components
import Header from "./global/Header";
import Content  from "./global/Content";
import Footer from "./global/Footer";
import ContactForm from './ContactForm';

const App = (props)=> {
  return (
    <div className="App">
      <Header/>
      <Content content={props.children}/>
      <Footer>
          <ContactForm/>
      </Footer>
    </div>
  );
}

export default App;
