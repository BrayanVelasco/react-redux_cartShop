import axios from 'axios' //llamados http

const addToCart = (product) => ({
        type:"ADD_TO_CART", //ACTION
        product
      }
)

const removeFromCart = product => (
    {
        type:"REMOVE_FROM_CART",
        product
      }
)



const loadProducts = () =>{
    return dispatch =>{
        return axios.get("http://localhost:3001/products")//promesa
            .then(response => { //cuando llega el resultado se depachan los productos
                dispatch({
                    type:"REPLACE_PRODUCTS",
                    products: response.data
                })
            })
    }

}

export  {addToCart, removeFromCart, loadProducts}