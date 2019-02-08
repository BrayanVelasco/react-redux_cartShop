import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';

import store from '../store/store'
import {removeFromCart} from '../store/actionCreators'

import {connect} from 'react-redux'
//import ShoppingCart from './ShoppingCart';
const styles = {
  footer: {
    fontWeight: 'bold'
  }
}



//class ShoppingCart extends Component {
  /*
  redux puro
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    }
    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart
      })
    })

  }*/

  const ShoppingCart = (props) => { //ya no usamos el this en la funcion
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {props.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => props.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${props.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
  }
  /*redux puro
  removeFromCart(product) {
    store.dispatch(removeFromCart(product))

  }*/


//
const  mapStateToProps = (state) => { //retorna un objeto que pasamos como props
  return {
    cart: state.cart
  }
}
const mapDispatchToProps = (dispatch) => { //retorna un objeto con los metodos
  return {
    removeFromCart(product){//metodo local
      dispatch(removeFromCart(product))//actioncreator
    }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
