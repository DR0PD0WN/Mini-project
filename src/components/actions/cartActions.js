
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from './action-types/cart-actions'

//เพิ่มของ
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//ลบของ
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//ลบจำนวน
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//เพิ่มจำนวน
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
