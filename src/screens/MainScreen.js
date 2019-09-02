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
					centerComponent={{ text: 'FOODWIZE', style: { color: '#fff' } }}
					containerStyle={styles.HeaderStyle}
				/>

				<Button title="Open Fridge"
					type='outline'
					containerStyle={{marginTop: 40, alignItems: 'center'}}
					buttonStyle={styles.OpenFridgeBtn}
					onPress={ ()=> this.props.navigation.navigate('BarcodeScreen')}
				/>

			</View>
		);
	}
}

const styles = StyleSheet.create({
  OpenFridgeBtn: {
		height: 100,
		width: 250,
		borderColor: '#7dbf5c',
		borderWidth: 8,
		borderRadius: 5
	},
	HeaderStyle: {
		backgroundColor: '#7dbf5c',
		alignContent: 'center',
		justifyContent: 'space-around',
	}
});