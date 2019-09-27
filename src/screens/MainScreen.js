import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { Header, Button, Image, Text } from 'react-native-elements'

import { Carousel } from '../components/Carousel';

const { width } = Dimensions.get('window');
const featureMealCarouselImageHeight = width * 0.5
const signatureMealCarouselImageAspectRatio = width * 0.4


export default class MainScreen extends Component {
	static navigationOptions = {
		header: null
	};

	featuresMeals(item, index) {
		return <Image style={styles.featureMealImage} source={item.source} />
	}

	signatureMeals(item, index) {
		return (
			<View>
				<Image style={styles.signatureMealImage} source={item.source} />
				<Text style={styles.signatureMealTitle}>{item.title +' '+ (index+1)}</Text>
			</View>
		)
	}

	render() {
		const featureMeals = [
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
		const signatureMeals = [
			{
				title: 'Meal',
				source: require('../../assets/images/signature.sample.png'),
			},
			{
				title: 'Meal',
				source: require('../../assets/images/signature.sample.png'),
			},
			{
				title: 'Meal',
				source: require('../../assets/images/signature.sample.png'),
			},
			{
				title: 'Meal',
				source: require('../../assets/images/signature.sample.png'),
			},
			{
				title: 'Meal',
				source: require('../../assets/images/signature.sample.png'),
			},
			{
				title: 'Meal',
				source: require('../../assets/images/signature.sample.png'),
			},
			{
				title: 'Meal',
				source: require('../../assets/images/signature.sample.png'),
			},
			{
				title: 'Meal',
				source: require('../../assets/images/signature.sample.png'),
			},
			{
				title: 'Meal',
				source: require('../../assets/images/signature.sample.png'),
			},
			{
				title: 'Meal',
				source: require('../../assets/images/signature.sample.png'),
			},
		];
		return (
			<View style={styles.mainContainer}>
				<Header
					centerComponent={{ text: 'FOODWIZE', style: { color: '#fff' } }}
					containerStyle={styles.headerStyle}
				/>
                <ScrollView>
					<View>
						<Button title="Open Fridge"
							type='outline'
							containerStyle={{ marginTop: 40, alignItems: 'center' }}
							buttonStyle={styles.openFridgeBtn}
							onPress={() => this.props.navigation.navigate('BarcodeScreen')}
						/>
						<Carousel
							style={styles.carousel}
							array={featureMeals}
							widthView={width}
							renderView={this.featuresMeals}
						/>
						<Text style={styles.signatureTitle}>Signature meals</Text>
						<Carousel
							style={styles.carousel}
							array={signatureMeals}
							widthView={signatureMealCarouselImageAspectRatio}
							showPageViews={false}
							pagingEnabled={false}
							renderView={this.signatureMeals}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	openFridgeBtn: {
		height: 100,
		width: 250,
		borderColor: '#7dbf5c',
		borderWidth: 8,
		borderRadius: 5
	},
	headerStyle: {
		backgroundColor: '#7dbf5c',
		alignContent: 'center',
		justifyContent: 'space-around',
	},
	featureMealImage: {
		width: width,
		height: featureMealCarouselImageHeight,
	},
	signatureTitle: {
		marginTop: 8,
		marginLeft: 16,
		fontSize: 24,
	},
	signatureMealImage: {
		width: signatureMealCarouselImageAspectRatio,
		height: signatureMealCarouselImageAspectRatio,
	},
	signatureMealTitle: {
		textAlign: 'center',
		fontSize: 18,
	}
});