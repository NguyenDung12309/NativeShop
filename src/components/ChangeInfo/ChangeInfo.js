import React from 'react';
import {View, Text, Button} from "react-native";
function ChangeInfo({navigation}) {
  return (
    <Button title="Go back" onPress={() => navigation.goBack()} />
  );
}

export default ChangeInfo;