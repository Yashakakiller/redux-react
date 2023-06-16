export const ADD = (product_item) => { // receive whole item
    return{
        type:"ADD_CART",
        payload:product_item
    }
}


export const DELETE = (id) => { // recieve item id
    return{
        type:"DELETE_CART",
        payload:id
    }
}


export const REMOVE_SINGLE = (item) => { // receive whole item
    return {
        type:"REMOVE_SINGLE",
        payload:item
    }
}