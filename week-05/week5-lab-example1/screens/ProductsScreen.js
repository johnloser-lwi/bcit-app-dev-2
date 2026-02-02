import { StyleSheet, View, FlatList } from 'react-native';
import { Text, Button, ListItem } from '@rneui/themed';

// list item for the FlatList's renderItem 
import ProductListItem from '../components/ProductListItem';

// faux data request, gets by the type passed as a routing param
import { getProducts } from '../data/ProductData';

export default function ProductsScreen({ navigation, route }) {

    // since we use the same ProductScreen for both clothing and decor 
    // we pass as routing params what type of item and a label
    const { type, typeLabel } = route.params;

    const renderItem = ({ item }) => (
        <ProductListItem pItem={item} />
    );

    return (
        <View style={styles.container}>
            <Text h1>{typeLabel} Items</Text>

            <View>
                <FlatList
                    keyExtractor={item => item.prodid}
                    data={getProducts(type)}
                    renderItem={renderItem}
                />
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

