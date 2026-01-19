import { StyleSheet, View, } from 'react-native';

import { Text } from '@rneui/themed';

export default function UserFavoriteScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text h2 style={styles.heading}>User Favorites</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    heading: {
        marginTop: 10,
        marginBottom: 10,
    },
});