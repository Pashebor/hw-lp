import React from 'react';
import Header from './Header.jsx';
import Main from './main/Main.jsx';
import Footer from './Footer.jsx';
import ModalForm from './ModalForm';
import  { configureAnchors } from 'react-scrollable-anchor';

class HappyWitchLP extends React.Component{
   constructor() {
       super();
       configureAnchors({offset: 0, scrollDuration: 1000});
   }
    render() {
       return(
           <div className="container">
               {/*<ModalForm/>*/}
               <Header/>
               <Main/>
              {/* <Footer/>*/}
           </div>
       )
   }
}

export default HappyWitchLP;