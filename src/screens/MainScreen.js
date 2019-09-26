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
		return <Image style={styles.FeatureMealImage} source={item.source} />
	}

	signatureMeals(item, index) {
		return (
			<View>
				<Image style={styles.SignatureMealImage} source={item.source} />
				<Text style={styles.SignatureMealTitle}>{item.title +' '+ (index+1)}</Text>
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
			<View style={styles.MainContainer}>
				<Header
					centerComponent={{ text: 'FOODWIZE', style: { color: '#fff' } }}
					containerStyle={styles.HeaderStyle}
				/>
                <ScrollView>
					<View>
						<Button title="Open Fridge"
							type='outline'
							containerStyle={{ marginTop: 40, alignItems: 'center' }}
							buttonStyle={styles.OpenFridgeBtn}
							onPress={() => this.props.navigation.navigate('BarcodeScreen')}
						/>
						<Carousel
							style={styles.Carousel}
							array={featureMeals}
							widthView={width}
							renderView={this.featuresMeals}
						/>
						<Text style={styles.SignatureTitle}>Signature meals</Text>
						<Carousel
							style={styles.Carousel}
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
	MainContainer: {
		flex: 1
	},
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
	FeatureMealImage: {
		width: width,
		height: featureMealCarouselImageHeight,
	},
	SignatureTitle:{
		marginTop: 8,
		marginLeft: 16,
		fontSize: 24,
	},
	SignatureMealImage: {
		width: signatureMealCarouselImageAspectRatio,
		height: signatureMealCarouselImageAspectRatio,
	},
	SignatureMealTitle:{
		textAlign: 'center',
		fontSize: 18,
	}
});