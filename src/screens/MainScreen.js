import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Button } from 'react-native-elements'

export default class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View>
				<Header
					leftComponent={{ icon: 'menu', color: '#fff' }}
					centerComponent={{ text: 'FOODWIZE', style: { color: '#fff' } }}
					rightComponent={{ icon: 'home', color: '#fff' }}
					containerStyle={{
						backgroundColor: '#7dbf5c',
						alignContent: 'center',
						justifyContent: 'space-around',
					}}
				/>
				<Button title="Open Fridge"
					type='outline' 
					containerStyle={styles.OpenFridgeBtn}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  OpenFridgeBtn: {
    marginTop: 20,
		alignItems: 'center',
		borderColor: '#7dbf5c',
  }
});