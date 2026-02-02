import { hookstate, useHookstate } from "@hookstate/core";

import uuid from "react-native-uuid";

const cartState = hookstate({
    cart: [],
    count: 0,
});

export function useCartState() {
    const state = useHookstate(cartState);

    return {
        addCartItem(newItem) {
            let newId = uuid.v4();

            state.cart.set(cCart => [...cCart, {id:newId, product: newItem}]);
            state.count.set(state.cart.get().length);

            console.log("adding item: " + newItem.desc);
            console.log("count is: " + state.count.get());

            return true;
        },
        removeCartItem(id) {
            state.cart.set(cCart => cCart.filter(item => item.id !== id));
            state.count.set(state.cart.get().length);

            return true;
        },
        clearCart() {
            state.cart.set(() => []);
            state.count.set(0);

            return true;
        },
        getCart() {
            return state.cart.get();
        },
        getCount() {
            return state.count.get();
        }
    };
}