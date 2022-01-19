import React from 'react';
import {View} from 'react-native';
import {Collection, TopProduct, ListCategory} from '../../../';

function Home() {
  return (
    <View>
      <Collection/>
      <ListCategory/>
      <TopProduct/>
    </View>
  );
}

export default Home;
