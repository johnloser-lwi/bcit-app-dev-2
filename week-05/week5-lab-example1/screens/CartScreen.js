import { StyleSheet, View, FlatList } from 'react-native';
import { Text, Button, ListItem, } from '@rneui/themed';

import { useCartState } from '../states/CartState';

export default function CartScreen({ navigation }) {
    
    // get the cartState from the library
    const cartState = useCartState();

    const renderProdList = ({ item }) => (
        <ListItem>
            <ListItem.Content>
                <ListItem.Title>{item.product.desc}</ListItem.Title>
                <ListItem.Subtitle>${item.product.price}</ListItem.Subtitle>
            </ListItem.Content>
            <Button
                title="Remove"
                iconPosition='right'
                icon={{
                    name: 'cart-remove',
                    type: 'material-community',
                    color: 'white',
                }}
                buttonStyle={{
                    borderRadius: 15,
                    backgroundColor: '#f00'
                }}
                onPress={() => {
                    // remove this item using the global state function                    
                    cartState.removeCartItem(item.id);
                }}
            />
        </ListItem>
    );

    if (cartState.getCount() > 0) {
        return (
            <View style={styles.container}>
                <Text h1> Your Cart</Text>
                <FlatList 
                    data={cartState.getCart()}
                    renderItem={renderProdList}
                />

                <View>
                    <Button 
                        title="Clear"
                        onPress={() => cartState.clearCart()}
                    />
                </View>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <Text h1>Your Cart</Text>
                <View>
                    <Text>Your cart is currently empty</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
    },
});
