import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Menu, NavBottomTab} from '..';

function NavStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home"  headerMode="none" >
      <Stack.Screen name="Home" component={NavBottomTab} />
      {/* authentication navigation direction from right to left, reverse from right to left */}
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          gestureDirection: 'horizontal-inverted',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, 
        }}
      />
      {/* <Stack.Screen
        name="ChangeInfo"
        component={ChangeInfo}
        options={{
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      /> */}
    </Stack.Navigator>
  );
}

export default NavStack;
