import React from 'react'

class ProductList extends React.Component {
  constructor() {
    super()  
  }
  
  addToCart() {
    alert("Product added to cart")
  }

  render() {
    return (
      <div className="card" style={{width: "33rem", marginLeft: "20px", marginTop: "5px"}}>
          <img className="card-img-top" src={this.props.product.image_url} alt="Card image cap"></img>
          <div className="card-body">
              <h5 className="card-title">{this.props.product.name}</h5>
              <p className="card-text">{this.props.product.description}</p>
              <p className="card-text">{this.props.product.price}</p>
              <a href="#" className="btn btn-primary" onClick={this.addToCart}>Add To Cart</a>
          </div>
      </div>
    )
  }
}


export default ProductList