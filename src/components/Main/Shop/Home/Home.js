import React from 'react';
import {Button, Text, View} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Authentication, ChangeInfo, OrderHistory, Menu, Main} from '../../../';
import {NavigationContainer} from '@react-navigation/native';
function Home({navigation}) {
  return (
    <View>
      <Text>home</Text>
    </View>
  );
}

export default Home;
