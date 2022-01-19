import React from 'react';
import {Dimensions, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  NavStack,
  Authentication,
  OrderHistory,
  ChangeInfo,
  HeaderShop,
} from '..';

function NavDrawer(props) {
  const Drawer = createDrawerNavigator();
  const {height} = Dimensions.get('window');
  return (
    <Drawer.Navigator
      screenOptions={({navigation, route}) => ({
        headerTitle: () => <HeaderShop ></HeaderShop>,
        headerStyle: {
          height: height / 8,
          backgroundColor: '#34B089',
        },
        headerTitleAlign: 'center',
        headerTintColor: "#fff"
      })}>
      <Drawer.Screen name="Home" component={NavStack} />
      <Drawer.Screen name="Authentication" component={Authentication} />
      <Drawer.Screen name="OrderHistory" component={OrderHistory} />
      <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
    </Drawer.Navigator>
  );
}

export default NavDrawer;
