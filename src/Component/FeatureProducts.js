import React, { Component } from 'react';
import product_list from '../data/product_list.json'
import ProductList from './ProductList'

class FeatureProducts extends Component {
  render(){
    var productList = product_list.map(function(product) {
        return(<ProductList product={product} />)
      });
    return (
      <React.Fragment>
        <div className="row">
          <div style={{display: "contents"}}>
            { productList }
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default FeatureProducts;