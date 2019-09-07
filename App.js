import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './src/screens/MainScreen';
import BarcodeScreen from './src/screens/BarcodeScreen';
import HeadsUpScreen from './src/screens/HeadsUpScreen';

const AppNavigator = createStackNavigator({
    MainScreen: MainScreen,
    BarcodeScreen: BarcodeScreen,
    HeadsUpScreen: HeadsUpScreen
  },
  {
    initialRouteName: 'MainScreen',
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount(){
    setTimeout( () => {this.setState({ isReady: true })}, 1000)
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={styles.container}>
            <Text style={styles.banner}>Foodwize App</Text>
        </View>
      );
    }

    return (
      <AppContainer />
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