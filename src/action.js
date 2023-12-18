export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DERCREASE_QUANTITY';
export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
export const ADD_PRODUCT= 'ADD_PRODUCT'

export const increaseQuantity =id=>({type:
INCREASE_QUANTITY , payload:id});
export const decreaseQuantity =id=>({type:
    DECREASE_QUANTITY , payload:id});
    export const updateAmount =id=>({type:
        UPDATE_AMOUNT,payload:id});
        export const addProduct =id=>({type:
        ADD_PRODUCT,payload:id});

