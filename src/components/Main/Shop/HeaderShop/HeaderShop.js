import React from 'react';
import {Text, View, StyleSheet, } from 'react-native';
import { block } from 'react-native-reanimated';
import {Search} from '../../../';

function HeaderShop(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>WEARING A DRESS</Text>
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 5,
  },
  headerText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold"
  }
})

export default HeaderShop;
