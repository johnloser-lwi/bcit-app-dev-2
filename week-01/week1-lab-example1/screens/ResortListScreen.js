import { useState, useEffect } from 'react';

import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import { Text } from '@rneui/themed';

import MyListItem from '../components/MyListItem';

// data file used to mock requests
import { getAllResorts } from '../data/resort-data';

export default function ResortListScreen({ navigation }) {

  // add the three useState for the fetch process
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataResult, setDataResult] = useState([]);

  // add useEffect for the fetch process
  useEffect(() => {
    const uri = "https://resortapi.mdia.ca/api/v1/resorts/read.php";

    fetch(uri)
      .then(res => res.json())
      .then(
        (result) => {
          setDataResult(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
  }, []);

  const displayDataContainer = (error, isLoaded, dataResult, navigation) => {
    const renderItem = ({item}) => (
      <MyListItem itemData={item} navigatorRef={navigation} />
    );

    if (error) {
      return (
        <View>
          <Text>Error: {error.message}</Text>
        </View>
      );
    }
    else if (!isLoaded) {
      return (
        <View>
          <Text>Loading...</Text>
          <ActivityIndicator size="large" color="#00ff00"/>
        </View>
      );
    }
    else if (dataResult.resorts === undefined) {
      return (
        <View>
          <Text>No records found for search</Text>
        </View>
      );
    }
    else {
      return (
        <FlatList 
          style={styles.resortList}
          data={dataResult.resorts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      );
    }
  }

  // const renderItem = ({ item }) => (
  //   <MyListItem itemData={item} navigatorRef={navigation} />
  // );

  return (
    <View style={styles.container}>
      <Text h2 style={styles.heading}>Browse our list</Text>

      {displayDataContainer(error, isLoaded, dataResult, navigation)}
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