import React from 'react';
import {Button, View, Text} from 'react-native';

function Authentication({navigation}) {
  return (
    <Button title="Go back" onPress={() => navigation.goBack()} />
  );
}

export default Authentication;
