import React from 'react'
import logo from './logo.svg'
import product_list from './data/product_list.json'
import ProductList from './ProductList'

class App extends React.Component {
  render() {  
    var productList = product_list.map(function(product) {
      return(<ProductList product={product} />)
    }); 
    
    return (
      <React.Fragment>
        <h1 style={{textAlign: "center"}}>Oneshop</h1>
        <hr></hr>
        <div className="row">
          <div className="col-sm-3 " style={{display: "contents"}}>
            { productList }
          </div>
        </div>
      </React.Fragment>
    );
  };
};

export default App;
