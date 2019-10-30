import React from 'react'
import { Image } from 'react-native'
import { withTranslation } from 'react-i18next';

export const makeFoodWizeScreen = (component) => {
	const componentWithTranslation = withTranslation()(component);
	componentWithTranslation.navigationOptions = {
		header: null
	};
	return componentWithTranslation;
}

export const makeFoodWizeMainScreen = (component) => {
	const componentWithTranslation = withTranslation()(component);
	componentWithTranslation.navigationOptions = {
		headerTitle:
			<Image
				source={require('./assets/images/HeaderLogo.jpg')}
				style={{ width: '95%', height: '95%' }}
			/>
	};
	return componentWithTranslation;
}