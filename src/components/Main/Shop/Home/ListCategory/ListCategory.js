import React from 'react';
import Swiper from 'react-native-swiper';
import {Text, View, Dimensions, StyleSheet, Image} from 'react-native';
import littleImage from '../../../../../Asset/media/temp/little.jpg';
import maxiImage from '../../../../../Asset/media/temp/maxi.jpg';
import partyImage from '../../../../../Asset/media/temp/party.jpg';
function ListCategory(props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.bannerText}>LIST OF CATEGORY</Text>
      <View style={styles.swipper}>
        <Swiper showsButtons={false} loop autoplay>
          <View style={styles.imageContain}>
            <Text style={styles.imageText}>Maxi Dress</Text>
            <Image source={maxiImage} style={styles.bannerImage} />
          </View>
          <View style={styles.imageContain}>
            <Text style={styles.imageText}>Little Dress</Text>
            <Image source={littleImage} style={styles.bannerImage} />
          </View>
          <View style={styles.imageContain}>
            <Text style={styles.imageText}>Party Dress</Text>
            <Image source={partyImage} style={styles.bannerImage} />
          </View>
        </Swiper>
      </View>
    </View>
  );
}

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bannerText: {
    flex: 1,
    color: '#afaeaf',
    justifyContent: 'center',
  },
  swipper: {
    flex: 4,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  imageContain: {
    justifyContent: "center",
    alignItems: "center"
  },
  imageText: {
    position: "absolute",
    zIndex: 1,
    color: "#9a9a9a"
  }
});

export default ListCategory;
