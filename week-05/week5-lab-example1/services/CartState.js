import { hookstate, useHookstate } from "@hookstate/core";

// needed to generate uuid for each cart item
import uuid from 'react-native-uuid';

// create the cartState object
// in this example it's an array so we want to init to an empty array
// the count could be derived from the length of the array but is added here just to show a second property of the state
const cartState = hookstate({
    cart: [],
    count: 0,
});

export function useCartState() {
    // assign state via the useHookstate hook, passing the object model above
    const state = useHookstate(cartState);

    // CRUD functions that we need to make available, as well as helpers like count
    return {
        addCartItem(newItem) {
            // generate a uuid since we might have the same product more than once
            // we'll need the id to be able to delete specific entrants
            let newId = uuid.v4();
            // console.log(newId);

            // use the spread syntax operator (...) to take the existing array and append the new item
            // each item consists of the uuid as well as the passed product information
            state.cart.set((cCart) => [...cCart, { id: newId, product: newItem }]);

            // again the length can be determined from the array
            // this is just meant to show that you can set more than one part of the state at a time
            state.count.set(state.cart.get().length);

            // for testing
            console.log('adding item: ' + newItem.desc);
            console.log('count is: ' + state.count.get());

            return true;
        },
        
        removeCartItem(id) {            
            // filters the matching cart item out and set the state
            state.cart.set((cCart) => cCart.filter((item) => item.id !== id));

            // reset the count member
            state.count.set(state.cart.get().length);
                        
            return true;
        },        

        clearCart() {
            // clear the array and reset the count to zero
            state.cart.set(() => []);
            state.count.set(0);
            return true;
        },

        getCart() {
            // get just the cart array
            return state.cart.get();
        },

        getCount() {
            // get just the count
            return state.count.get();
        },
        
    };
}


