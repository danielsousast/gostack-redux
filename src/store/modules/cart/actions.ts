import { ActionTypes, IProduct } from "./types";

export function addToCartRequest(product: IProduct) {
    return {
        type: ActionTypes.ADD_TO_CART_REQUEST,
        payload: {
            product
        }
    }
}

export function addToCartSuccess(product: IProduct) {
    return {
        type: ActionTypes.ADD_TO_CART_SUCCESS,
        payload: {
            product
        }
    }
}

export function addToCartFailure(product: IProduct) {
    return {
        type: ActionTypes.ADD_TO_CART_FAILURE,
        payload: {
            product
        }
    }
}