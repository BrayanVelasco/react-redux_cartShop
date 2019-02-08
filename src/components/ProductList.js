import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

import store from '../store/store'
import {addToCart} from '../store/actionCreators'

import {connect} from 'react-redux'
//import ProductList from './ProductList';


const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

/*class ProductList extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      products:[]
    }
  }*/

  const ProductList = (props) => (
      <div style={styles.products}>
        {props.products.map(product =>
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => props.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  
/*
  addToCart(product) {
    store.dispatch(addToCart(product))
  }*/

const mapStateToProps = (state) => {
  return {
    products : state.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart(product){
      dispatch(addToCart(product))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
