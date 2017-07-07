import React, { Component } from 'react';
import ButtonToTop from './ButtonToTop';


const Footer = () => {
    return(

        <footer className="footer">
           {/* {<ButtonToTop/>}*/}
            <div className="separatortop">
                <svg id="triangle" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0 0 V 100 H 0 L 50 0 L 100 100 H 100 V 0 Z" ></path></svg>
            </div>
            <div className="container">
              <div className="footer-container">
                <div className="footer__logo"><a href="http://sales-generator.ru"><img src="images/saleslogowhite.svg"  alt="Sales Generator logo"/></a></div>
                <address className="footer__address">
                    <p>info@salesgenerator.pro</p>
                    <p>г. Москва</p>
                    <a href="https://sales-generator.ru/Politika-konfidencialnosti.pdf" className="confidential-link" >Политика конфиденциальности</a>
                </address>
                    <div className="footer__phone">
                        <p>Звонок по России бесплатный</p>
                        <a href="tel:88003331293">8 (800) 333 12 93</a>
                    </div>
              </div>
            </div>
        </footer>
    );
};

export default Footer;