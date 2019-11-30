import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Second from '../screens/Second';

//Creating Stack Navigator for All Routes in Application
const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Second: {screen: Second},
  },
  {
    headerMode: 'none',
    title: 'none',
    initialRouteName: 'Home',
  },
);

//Make App Navigator to creating app container
const AppContainer = createAppContainer(AppNavigator);

//exporting App Conrainer with all routing pages
export default AppContainer;
