import React from 'react';
import { connect } from "react-redux"

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({ additionalPrice, car, additionalFeatures }) => {
 
  const removeItem = item => {
    console.log('working')
  };

  const buyItem = item => {
    console.log(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures removeItem={removeItem} car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={additionalFeatures} buyItem={buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {})(App);
