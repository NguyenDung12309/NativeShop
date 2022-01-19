import React from 'react';
import {Text, View, Dimensions, StyleSheet, Image} from 'react-native';
import BannerImage from "../../../../../Asset/media/temp/banner.jpg";
function TopProduct(props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.bannerText}>TopProduct</Text>
      <Image source={BannerImage} style={styles.bannerImage}/>
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
    color: "#afaeaf",
    justifyContent: "center"
  },
  bannerImage: {
    flex: 4,
    width: "100%"
  }
});

export default TopProduct;
