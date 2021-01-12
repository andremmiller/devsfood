export const initialState = {
    token: false,
    cart: {
        products: [],
        address: [],
        discount: 0,
        delivery: 0
    }
}

export const UserReducer = (state, action) => {
    let products = [...state.cart.products] 
    let newState = {}

    switch(action.type) {
        case 'ADD_PRODUCT':
            let id = action.payload.data.id

            let index = products.findIndex(item => item.id === id)

            if(index > -1) {
                products[index].quantity += action.payload.quantity
            } else {
                products.push({
                    ...action.payload.data,
                    quantity: action.payload.quantity
                })
            }

            newState = {...state}
            newState.cart.products = products

            return newState
        case 'CHANGE_PRODUCT':
            if(products[action.payload.key]) {
                switch(action.payload.operation) {
                    case '-':
                        products[action.payload.key].quantity--
                        
                        if( products[action.payload.key].quantity <= 0 ) {
                            products = products.filter((item, index) => index != action.payload.key)
                        }
                    break;
                    case '+':
                        products[action.payload.key].quantity++  
                    break;
                }
            }

            newState = {...state}
            newState.cart.products = products

            return newState
        default:
            return state
    }
}