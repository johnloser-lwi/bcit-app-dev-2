import { useState, useEffect } from 'react';

import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import { Text } from '@rneui/themed';

import MyListItem from '../components/MyListItem';

import { getFavArrayByUser } from '../services/FavoriteManager';

import { currUser } from '../services/LoginManager';

export default function UserFavoriteScreen({ navigation }) {  
  // state variables for getting favorites
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataResult, setDataResult] = useState([]);

  // useEffect to get favorites from LocalStorage
  useEffect(() => {
    getFavArrayByUser(currUser.id)
      .then(
        result => {
          setDataResult(JSON.parse(result));
          setIsLoaded(true);
        },
        error => {
          setError(error);
          setIsLoaded(true);
        }
      )
  }, [dataResult]);

  const willFocusSubscription = navigation.addListener("focus", () => {
    setDataResult(false);
    setIsLoaded(false);
  });

  return (    
      <View style={styles.container}>
        <Text h2 style={styles.heading}>User Favorites</Text> 

        {displayDataContainer(error, isLoaded, dataResult, navigation)}
      </View>    
  );
}

function displayDataContainer(error, isLoaded, dataResult, navigation) {
  // since the flatlist will be moved to this function we'll need the renderItem in scope
  const renderItem = ({ item }) => (
    <MyListItem itemData={item} navigatorRef={navigation} />
  );

  if (error) {
    // show an error message    
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  else if (!isLoaded) {
    // show the ActivityIndicator (spinner)
    return (
      <View>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  else if (dataResult === null || dataResult.length === 0) {
    // not an error but no resorts, so show a message
    return (
      <View>
        <Text>No favorites found for currently logged in user</Text>
      </View>
    );
  }
  else {
    // show the data in the FlatList
    return (
      <FlatList
        style={styles.resortList}
        data={dataResult}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    );
  }

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
    width: '100%',
  }

});