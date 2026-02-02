import { ListItem, Button, } from '@rneui/themed';
import { useCartState } from '../states/CartState';


export default function ProductListItem({ pItem }) {

    // get the cartState from the library    
    const cartState = useCartState();

    return(
        <ListItem>
            <ListItem.Content>
                <ListItem.Title>{pItem.desc}</ListItem.Title>
                <ListItem.Subtitle>${pItem.price}</ListItem.Subtitle>
            </ListItem.Content>
            <Button
                title="Add"
                iconPosition='right'
                icon={{
                    name: 'cart-plus',
                    type: 'material-community',
                    color: 'white',
                }}
                buttonStyle={{
                    borderRadius: 15,
                }}
                onPress={() => {
                    // add to cart using the global state service
                    cartState.addCartItem({
                        prodid: pItem.prodid,
                        type: pItem.type,
                        desc: pItem.desc,
                        price: pItem.price,
                    });
                }}
            />
        </ListItem>        
    );
}