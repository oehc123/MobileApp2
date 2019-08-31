import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './src/screens/SplashScreen';
import MainScreen from './src/screens/MainScreen';

const AppNavigator = createStackNavigator({
    Splash: SplashScreen,
    MainScreen: MainScreen
  },
  {
    initialRouteName: 'Splash',
});

export default createAppContainer(AppNavigator);