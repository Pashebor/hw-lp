import React from 'react';
import { Component } from 'react';
import NeedsAnalysis from './need-analysis/NeedsAnalysis';
import SuccessKey from './key-to-success/SuccessKey';
import Worry from './worry/Worry';
import ButtonToTop from '../ButtonToTop';
import  Training from './astro-training/Training';
import  WorkingScheme from './working-scheme/WorkingScheme';
import  ProductCost from './product-cost/ProductCost';


class Main extends Component{
    render() {
        return(
           <main>
               <NeedsAnalysis/>
               <SuccessKey/>
               <Worry/>
               <ButtonToTop/>
               <Training />
               <WorkingScheme />
               <ProductCost />
           </main>
        )
    };
}

export default Main;

