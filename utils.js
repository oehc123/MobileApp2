import { withTranslation } from 'react-i18next';

export const makeFoodWizeScreen = (component) => {
	const componentWithTranslation = withTranslation()(component);
	componentWithTranslation.navigationOptions = {
		header: null
	};
	return componentWithTranslation;
}