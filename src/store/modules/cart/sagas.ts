import { AxiosResponse } from "axios";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { IAppState } from "../..";
import api from "../../../services/api";
import { addToCartFailure, addToCartRequest, addToCartSuccess } from "./actions";

type ICheckProductStock = ReturnType<typeof addToCartRequest>

interface IStockResponse {
    id: number;
    quantity: number;
}

function* checkProductStock({ payload }: ICheckProductStock) {
    const { product } = payload;

    const currentQuantity: number = yield select((state: IAppState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
    });

    const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

    if (availableStockResponse.data.quantity > currentQuantity) {
        yield put(addToCartSuccess(product));
    } else {
        yield put(addToCartFailure(product));
    }
}

export default all([
    takeLatest('ADD_TO_CART_REQUEST', checkProductStock)
]);