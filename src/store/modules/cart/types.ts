export enum ActionTypes {
    ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST",
    ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS",
    ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE",
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
}

export interface ICartItem {
    product: IProduct;
    quantity: number
}

export interface ICartState {
    items: ICartItem[];
    failedStockCheck: number[];
}