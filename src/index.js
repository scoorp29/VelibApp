import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from './navigations/HomeScreen';
import VelibStationsScreen from './navigations/VelibStationsScreen';
import StatusScreen from "./navigations/StatusScreen";
import MapsScreen from "./navigations/MapsScreen";
import SingleStationScreen from "./navigations/SingleStationScreen";


export default class AppNavigation extends React.Component {
    render() {
        return <AppContainer/>;
    }
}

const StackNavigator = createStackNavigator({
    Stations: {
        screen: VelibStationsScreen,
    },
    Details: {
        screen: SingleStationScreen,
    },
});

const AppNavigator = createBottomTabNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="ios-home" size={30} color={tintColor}/>
                )
            }
        },
        Stations: {
            screen: StackNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="ios-list-box" size={30} color={tintColor}/>
                )
            }
        },
        Maps: {
            screen: MapsScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="ios-pin" size={30} color={tintColor}/>
                )
            }
        },
        Status: {
            screen: StatusScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="ios-settings" size={30} color={tintColor}/>
                )
            }
        },
    }, {
        initialRouteName: "Home",
        tabBarOptions: {
            activeTintColor: '#ac599e'
        },
        animationEnabled: true,
    }
);

const AppContainer = createAppContainer(AppNavigator);