import {useState, useEffect} from 'react';

import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { Text } from '@rneui/themed';

import ResortDetailContainer from '../components/ResortDetailContainer';

export default function ResortDetailScreen({ route, navigation }) {
  // get the params from the route
  const { detailId } = route.params;

  // add the three useState for the fetch process
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataResult, setDataResult] = useState([]);

  // add useEffect for the fetch process
  useEffect(()=>{

    const uri = 'https://resortapi.mdia.ca/api/v1/resorts/read.php?id=' + detailId;

    // console.log('checking:' + uri);

    fetch(uri)
      .then(res => res.json())
      .then(
        (result)=>{
          // successful load
          setDataResult(result);
          setIsLoaded(true);          
        },        
        (error)=>{
          // some error likely 404
          setError(error);
          setIsLoaded(true);
        });
  },[]);

  return (
    <View style={styles.container}>
      {displayData(error, isLoaded, dataResult)}
    </View>
  );
}

function displayData(error, isLoaded, dataResult) {

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
        <ActivityIndicator size="large" color="#00ff00" />
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
      <ResortDetailContainer currResort={dataResult.resorts[0]} />
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
});
