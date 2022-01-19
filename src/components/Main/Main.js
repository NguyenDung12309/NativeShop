import React from 'react';
import {View, Text, Button} from 'react-native';
function Main({navigation}) {
  return (
    <View>
      <Button
        title="Go to Authentication"
        onPress={() => navigation.navigate('Authentication')}
      />
      <Button
        title="Go to OrderHistory"
        onPress={() => navigation.navigate('OrderHistory')}
      />  
      <Button
        title="Go to ChangeInfo"
        onPress={() => navigation.navigate('ChangeInfo')}
      />
    </View>
  );
}

export default Main;
