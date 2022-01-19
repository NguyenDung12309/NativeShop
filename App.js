import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {NavStack, NavDrawer, NavBottomTab} from './src/components';


const App = () => {
  return (
    <NavigationContainer>
      {/* <NavStack/> */}
      <NavDrawer/>
      {/* <NavBottomTab /> */}
    </NavigationContainer>
  );
};

export default App;
