import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.banner}>FoodWize App</Text>
            <Text style={styles.message}>In coming...</Text>
            <Button style={{ marginTop: 20 }}
                title='explore App'
                type='solid'
                onPress={() => this.props.navigation.navigate('MainScreen')}
            />
        </View>
        );
    }
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