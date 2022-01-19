import React from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions} from 'react-native';

function Search(props) {
  const [text, setText] = React.useState('');
  return (
    <View>
      <TextInput style={styles.input} onChangeText={setText} value={text} placeholder='What do you want to buy?'/>
    </View>
  );
}

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  input: {
    height: height / 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#34B089",
    marginVertical: 8,
    backgroundColor: "#fff",
    fontSize: 12,
    paddingHorizontal: 10,
    width: "110%"
  },
});

export default Search;
