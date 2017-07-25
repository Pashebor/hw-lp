import React from 'react';
import { Component } from 'react';
import NeedsAnalysis from './need-analysis/NeedsAnalysis';
import SuccessKey from './key-to-success/SuccessKey';
import Worry from './worry/Worry';
import ButtonToTop from '../ButtonToTop';
import  Trainings from './trainings/Trainings';
import  WorkingScheme from './working-scheme/WorkingScheme';
import  ProductCost from './product-cost/ProductCost';
import  Reviews from './reviews/Reviews';
import  Facts from './facts/Facts';


class Main extends Component{
    render() {
        return(
           <main>
               <NeedsAnalysis/>
               <SuccessKey/>
               <Worry/>
               <ButtonToTop/>
               <Trainings />
               <WorkingScheme />
               <Reviews/>
               <Facts/>
               <ProductCost />
           </main>
        )
    };
}

export default Main;

