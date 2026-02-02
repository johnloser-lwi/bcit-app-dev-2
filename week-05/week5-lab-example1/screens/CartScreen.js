import { StyleSheet, View, FlatList } from 'react-native';
import { Text, Button, ListItem, } from '@rneui/themed';

export default function CartScreen({ navigation }) {
    
    // get the cartState from the library

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
                }}
            />
        </ListItem>
    );

    
    return (
        <View style={styles.container}>
            <Text h1>Your Cart</Text>
            <View>
                <Text>Your cart is currently empty</Text>
            </View>
        </View>
    );
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
