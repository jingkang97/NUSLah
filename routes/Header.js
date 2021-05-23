import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Documents from '../screens/Documents'
import Favourites from '../screens/Favourites'
import Search from '../screens/Search'

const screens = {
    Home:{
        screen: Documents
    },
    Favourites:{
        screen: Favourites
    },
    Search:{
        screen: Search
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)