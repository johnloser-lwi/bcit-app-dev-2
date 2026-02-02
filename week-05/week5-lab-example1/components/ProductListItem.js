import { ListItem, Button, } from '@rneui/themed';

export default function ProductListItem({ pItem }) {

    // get the cartState from the library    

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
                    
                }}
            />
        </ListItem>        
    );
}