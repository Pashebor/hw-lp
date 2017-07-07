import React from 'react';
import { Component } from 'react';
import NeedsAnalysis from './need-analysis/NeedsAnalysis';
import SuccessKey from './key-to-success/SuccessKey';
import Worry from './worry/Worry';
import ButtonToTop from '../ButtonToTop';


class Main extends Component{
    render() {
        return(
           <main>
               <NeedsAnalysis/>
               <SuccessKey/>
               <Worry/>
               <ButtonToTop/>
           </main>
        )
    };
}

export default Main;

