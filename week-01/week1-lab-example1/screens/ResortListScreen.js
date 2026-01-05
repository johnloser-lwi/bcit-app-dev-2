import { StyleSheet, View, FlatList } from 'react-native';

import { Text } from '@rneui/themed';

import MyListItem from '../components/MyListItem';

// data file used to mock requests
import { getAllResorts } from '../data/resort-data';

export default function ResortListScreen({ navigation }) {

  // add the three useState for the fetch process

  // add useEffect for the fetch process

  const renderItem = ({ item }) => (
    <MyListItem itemData={item} navigatorRef={navigation} />
  );

  return (
    <View style={styles.container}>
      <Text h2 style={styles.heading}>Browse our list</Text>

      <FlatList
        style={styles.resortList}
        data={getAllResorts()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
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

  resortList: {
    width: '100%'
  }
});