import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { Button, Image, Text } from 'react-native-elements'
import { makeFoodWizeMainScreen } from '../../utils.js';
import { Carousel } from '../components/Carousel';

const { width } = Dimensions.get('window');
const featureMealCarouselImageHeight = width * 0.5
const signatureMealCarouselImageAspectRatio = width * 0.4

class MainScreen extends Component {
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
		
		const { t, i18n } = this.props
		return (
			<View style={styles.mainContainer}>
				<ScrollView>
					<View>
						<Button title="Open Fridge Travis"
							type='outline'
							containerStyle={{ paddingTop: 25, paddingHorizontal: 10, alignItems: 'center' }}
							buttonStyle={styles.openFridgeBtn}
							onPress={() => this.props.navigation.navigate('BarcodeScreen')}
						/>
						<View style={{ paddingTop: 20, paddingHorizontal: 10 }}>
							<Carousel
								array={featureMeals}
								widthView={width}
								renderView={this.featuresMeals}
							/>
						</View>
						<Text style={styles.signatureTitle}>{ t("signature-meals-carousel-title") }</Text>
						<View style={{ paddingHorizontal: 10 }}>
							<Carousel
								array={signatureMeals}
								widthView={signatureMealCarouselImageAspectRatio}
								showPageViews={false}
								pagingEnabled={false}
								renderView={this.signatureMeals}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingTop: 0,
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
		paddingTop: 20,
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

export default makeFoodWizeMainScreen(MainScreen);
