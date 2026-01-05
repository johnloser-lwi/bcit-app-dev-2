import React, { useState, useRef } from 'react';

import { StyleSheet, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

import { Image, Text, Divider, Button, Icon, FAB, Overlay } from '@rneui/themed';

import Carousel from 'react-native-anchor-carousel';

export default function ResortDetailContainer({ currResort }) {
  // state for dialog
  const [visibleAlert, setVisibleAlert] = useState(false);

  // amenities map
  const amenItems = currResort.amenities.map((currAmen) =>
    <View key={currAmen.key} style={styles.amenListItem}>
      <Icon type='ionicon' name='ribbon-outline' />
      <Text>{currAmen.value}</Text>
    </View>
  );

  // conditional variable for long description

  return (
    <View style={styles.container}>
      <ScrollView>

        {getFeatureImageComponent(currResort)}

        <Text h3>{currResort.name}</Text>

        <Text>{currResort.shortDesc}</Text>

        <Divider inset={true} insetType="middle" />

        <Text h3>Amenities</Text>
        
        {amenItems}

        <Divider inset={true} insetType="middle" />

        <Text h3>About</Text>

        <Text>{currResort.longDesc}</Text>

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

  return (
    <Carousel
      style={styles.carousel}
      data={currResort.otherImages}
      renderItem={renderItem}
      initialIndex={2}

      itemWidth={windowWidth * 0.7}
      inActiveScale={0.6}
      separatorWidth={15}
      containerWidth={windowWidth}

      inActiveOpacity={0.3}

      ref={carouselRef}
    />
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

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

  amenListItem: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
  },

});