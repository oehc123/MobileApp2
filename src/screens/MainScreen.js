import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Header, Button, Image, Text, ScrollView } from 'react-native-elements'

import { Carousel } from '../components/Carousel';

const { width } = Dimensions.get('window');
const featureMealCarouselImageHeight = width * 0.5

export default class MainScreen extends Component {
  
  static navigationOptions = {
    header: null
  };

  featuresMeals(item, index){
    return <Image style={styles.mealImage} source={item.source} />
  }

  render() {
	const mealImages = [
		//{ source: { uri: 'https://source.unsplash.com/user/erondu/1600x900', }, },
		{
		  source: require('../../assets/images/meal.sample.1.jpg'),
		},
		{
		  source: require('../../assets/images/meal.sample.2.jpg'),
		},
		{
		  source: require('../../assets/images/meal.sample.3.jpg'),
		},
	];
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
				<Carousel 
            style = { styles.Carousel } 
            array = { mealImages }
            widthView = { width }
            renderView = { this.featuresMeals }/>
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
  },
  mealImage: {
    width: width,
    height: featureMealCarouselImageHeight,
  },
});