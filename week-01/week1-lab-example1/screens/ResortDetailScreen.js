import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { Text } from '@rneui/themed';

import ResortDetailContainer from '../components/ResortDetailContainer';

// data file used to mock requests
import { getResortById } from '../data/resort-data';

export default function ResortDetailScreen({ route, navigation }) {
  // get the params from the route
  const { detailId } = route.params;

  // add the three useState for the fetch process

  // add useEffect for the fetch process

  // get resort from static data set
  const currResort = getResortById(detailId);

  return (
    <View style={styles.container}>
      <ResortDetailContainer currResort={currResort} />
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
