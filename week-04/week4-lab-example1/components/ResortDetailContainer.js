import { useState, useRef, useEffect } from 'react';

import { StyleSheet, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

import { Image, Text, Divider, Button, Icon, FAB, Overlay } from '@rneui/themed';

import Carousel from 'react-native-anchor-carousel';

import { getFavArrayByUser, updateFavArrayByUser, checkFavorite, addFavorite, delFavorite } from '../services/FavoriteManager';

import { currUser } from '../services/LoginManager';

export default function ResortDetailContainer({ currResort }) {
  // state for dialog
  const [visibleAlert, setVisibleAlert] = useState(false);

  // state for favorite flag and call to init favorite status from LS
  const [isFavorite, setIsFavorite] = useState(null);

  // useEffect to call the initFavoriteState function
  useEffect(() => {
    initFavoriteState(currUser.id, currResort, setIsFavorite);
  }, []);

  // amenities map
  const amenItems = currResort.amenities.map((currAmen) =>
    <View key={currAmen.key} style={styles.amenListItem}>
      <Icon type='ionicon' name='ribbon-outline' />
      <Text>{currAmen.value}</Text>
    </View>
  );

  // conditional variable for long description
  let longDescription;

  if (currResort.longDesc === 'TBA' || currResort.longDesc === undefined) {
    longDescription = <Text>Additional details for this resort are not avaliable at this time</Text>;
  }
  else {
    longDescription = <Text>{currResort.longDesc}</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>

        {getFeatureImageComponent(currResort)}

        <View style={styles.titleContainer}>
          <Text h3>{currResort.name}</Text>

          {/* favorite icon to go here */}
          <Icon 
            type='ionicon'
            name={isFavorite ? 'heart' : 'heart-outline'}
            color={isFavorite !== null ? "#cc0000" : "#ffffff"}
            onPress={() => {
              toggleFav(currUser.id, currResort, isFavorite, setIsFavorite);
            }}
          />
        </View>

        <Text>{currResort.shortDesc}</Text>

        <Divider inset={true} insetType="middle" />

        <Text h3>Amenities</Text>

        {
          currResort.amenities.length > 0 ?
            amenItems :
            <Text>No ameninities listed</Text>
        }

        <Divider inset={true} insetType="middle" />

        <Text h3>About</Text>

        {longDescription}

      </ScrollView>

      <FAB
        onPress={() => setVisibleAlert(true)}
        placement="right"
        icon={{
          type: 'ionicon',
          name: 'cart',
        }}
      />

      <Overlay isVisible={visibleAlert} >
        <Text h3>Sorry</Text>

        <Text>
          The booking feature is currently unavailable
        </Text>

        <Button
          title="Close"
          onPress={() => setVisibleAlert(false)}
        />
      </Overlay>
    </View>
  );
}

function getFeatureImageComponent(currResort) {
  // reference is needed for onPress handler
  const carouselRef = useRef(null);

  // screen width is needed for container
  const { width: windowWidth } = Dimensions.get('window');

  // returns the image wrapped in a TouchableOpacity container
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      activeOpacity={.7}
      style={[styles.caroItem]}

      onPress={() => {
        carouselRef.current.scrollToIndex(index);
      }}>

      <Image
        style={styles.caroImage}
        source={{ uri: item.uri }}
      />
    </TouchableOpacity>
  );

  // add a conditional here to check for otherImages
  if (currResort.otherImages.length === 0) {
    // no otherimages so just show the key image
    return (
      <Image
        style={styles.resortImage}
        source={{ uri: currResort.keyImage }}
      />
    );
  }
  else {
    // if there's more than 3 images then start at image 3 (index 2) so there's some on either side
    let initIndex = (currResort.otherImages.length > 3 ? 2 : 0);

    return (
      <Carousel
        style={styles.carousel}
        data={currResort.otherImages}
        renderItem={renderItem}
        initialIndex={initIndex}

        itemWidth={windowWidth * 0.7}
        inActiveScale={0.6}
        separatorWidth={15}
        containerWidth={windowWidth}

        inActiveOpacity={0.3}

        ref={carouselRef}
      />
    );
  }

}

/*
    - function to take the current user and resort and then check to see
      if that resort is in the user's favorite list in local storage
    - calls back to setIsFavorite state setter in main setting true/false
*/
function initFavoriteState(currUserId, currResort, setIsFavorite) {

  getFavArrayByUser(currUserId)
    .then(
      (result) => {
        const currFavList = JSON.parse(result);

        // if not null or empty array then set with value
        if (currFavList !== null && currFavList.length > 0) {
          // checkFavorite returns a bool so use it directly to set the state
          setIsFavorite(checkFavorite(currResort.id, currFavList));
        }
        else {
          // otherwise default to false
          setIsFavorite(false);
        }
      },
      (e) => {
        console.log('error: ' + e);
      }
    );
}

/* 
    - function to toggle the current fav flag for this resort and user
    - if the resort isn't a fav, it's added to fav array and LS is updated
    - if the resort is a fav, it's removed from the array and LS is updated
    - the callback changes the state in the main component which will re-render the heart icon
*/
function toggleFav(currUserId, currResort, isFav, setIsFav) {

  let currFavList;

  // get the current array
  getFavArrayByUser(currUserId)
    .then(
      (result) => {
        currFavList = JSON.parse(result);

        // if null key doesn't exist so init an empty array
        if (currFavList === null) {
          currFavList = [];
        }

        // checkFavorite returns a bool so use it directly to set the state
        if (isFav) {
          // remove from favorites (passes back the filtered version so we need to assign to a temp var)
          let updatedFavList = delFavorite(currResort, currFavList);          

          // then update LS
          updateFavArrayByUser(currUserId, updatedFavList);
        }
        else {
          // add to favorites
          addFavorite(currResort, currFavList);

          // then update LS
          updateFavArrayByUser(currUserId, currFavList);
        }
      },
      (e) => {
        console.log('error: ' + e);
      }
    )
    .then(
      // after updating LS then use the call-back to update state and make the icon to re-render
      setIsFav(!isFav)
    );
}



const styles = StyleSheet.create({
  resortImage: {
    aspectRatio: 1,
    height: 250,
  },
  carousel: {
    flexGrow: 0,
    height: 200,
  },
  caroItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  caroImage: {
    width: '100%',
    aspectRatio: 1,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10
  },
  amenListItem: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
  },
});