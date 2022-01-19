import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavStack, Authentication, OrderHistory, ChangeInfo} from '..';

function NavDrawer(props) {
  const Drawer = createDrawerNavigator();
  const {height} = Dimensions.get('window');
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          height: height/8,
        }
      }}>
      <Drawer.Screen name="Home" component={NavStack} />
      <Drawer.Screen name="Authentication" component={Authentication} />
      <Drawer.Screen name="OrderHistory" component={OrderHistory} />
      <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
    </Drawer.Navigator>
  );
}

export default NavDrawer;
