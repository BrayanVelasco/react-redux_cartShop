import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk' //middleware para retornar una funcionde llamado asincronico




const products = (state=[], action) => {
    if(action.type === "REPLACE_PRODUCTS"){
        return action.products //con combine
        
        /*return { //no debemos retornar todo el estado solo lo necesario 
            //products: action.products
            //Con combine
            
        }*/
    }
    return state
}
const cart = (state=[], action) => {
    
    if(action.type === "ADD_TO_CART"){
        return state.concat(action.product)
        /*return{
            
            cart: state.cart.concat(action.product)
         }*/
    }else if(action.type === "REMOVE_FROM_CART"){
        
        return state.filter(product => product.id !== action.product.id)
        /*return{
            
            cart: state.cart.filter(product => product.id != action.product.id)
        }*/
    }
    return state
}

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }

export default createStore(combineReducers({cart:cart , products:products}), applyMiddleware(logger, thunk)); //reducer, estado inicial

//combine reducer recibe un objeto 
//cart recibe la funcion que maneja un solo pedazo de estado
//products 
//Para definir estado inicial podemos crear el objeto y pasarlo por defecto, o si es simple
//pasarlo por defecto