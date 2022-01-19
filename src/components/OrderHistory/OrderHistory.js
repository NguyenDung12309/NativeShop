import React from 'react';
import {View, Text, Button} from "react-native";
function OrderHistory({navigation}) {
  return (
    <Button title="Go back" onPress={() => navigation.goBack()} />
  );
}

export default OrderHistory;