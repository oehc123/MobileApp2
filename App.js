import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.banner}>FoodWize App</Text>
      <Text style={styles.message}>In comming...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7dbf5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner:{
    color: '#dbf4a9',
    fontSize: 24,
    fontWeight: "bold"
  },
  message:{
    color: '#dbf4a9',
  },
});
