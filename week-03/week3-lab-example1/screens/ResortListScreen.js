import {useState, useEffect} from 'react';

import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import { Text } from '@rneui/themed';

import MyListItem from '../components/MyListItem';

export default function ResortListScreen({ navigation }) {

  // add the three useState for the fetch process
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataResult, setDataResult] = useState([]);

  // add useEffect for the fetch process
  useEffect(()=>{

    const uri = 'https://resortapi.mdia.ca/api/v1/resorts/read.php';

    fetch(uri)
      .then(res => res.json())
      .then(
        (result)=>{
          // successful load
          setDataResult(result);
          setIsLoaded(true);

          // console.log(result);
        },        
        (error)=>{
          // some error likely 404
          setError(error);
          setIsLoaded(true);
        });
  },[]);
 

  return (
    <View style={styles.container}>
      <Text h2 style={styles.heading}>Browse our list</Text>

      {displayDataContainer(error, isLoaded, dataResult, navigation)}
    </View>
  );
}

function displayDataContainer(error, isLoaded, dataResult, navigation){
  
  // since the flatlist will be in this function we need to move the renderItem here as well
  const renderItem = ({ item }) => (
    <MyListItem itemData={item} navigatorRef={navigation} />
  );

  if(error){
    // show an error message
    // NOTE: for production you wouldn't do this, handle gracefully instead
    return(
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  else if(!isLoaded){
    // show the activity indicator (spinner)
    return(
      <View>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  else if(dataResult.resorts === undefined){
    // NOTE: this part will vary based on the api you are using
    // not an error but no resorts, so show a message
    return(
      <View>
        <Text>No records found for this request</Text>        
      </View>
    );
  }
  else{
    // show the data
    return(
      <FlatList
        style={styles.resortList}
        data={dataResult.resorts}
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
    width: '100%'
  }
});