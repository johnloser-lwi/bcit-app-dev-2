import { StyleSheet, View, } from 'react-native';
import { Text, Button, } from '@rneui/themed';

export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text h1>Cart Example</Text>

            <View style={styles.btnContainer}>               
                <Button
                    title="Clothes List"
                    onPress={() => navigation.navigate('Products', {
                        type:'clothing',
                        typeLabel:'Clothing'
                    })}
                />
            </View>
            <View style={styles.btnContainer}>               
                <Button
                    title="Decor List"
                    onPress={() => navigation.navigate('Products', {
                        type:'decor',
                        typeLabel:'Decor'
                    })}
                />
            </View>
            <View style={styles.btnContainer}>               
                <Button
                    title="View Cart"
                    onPress={() => navigation.navigate('Cart')}
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

    btnContainer: {
        padding: 15,        
    },
});