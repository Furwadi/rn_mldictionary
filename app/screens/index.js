import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home'
import HeroesScreen from './Heroes'
import SettingsScreen from './Settings'


const index = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            title: 'Home',
            label: 'Home'
        },
        Heroes: {
            screen: HeroesScreen,
            title: 'Heroes'
        },
        Settings: {
            screen: SettingsScreen,
            title: 'Settings'
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state
                let IconComponent = Ionicons
                let iconName
                if( routeName === 'Home' ) {
                    iconName = `ios-home`
                } else if (routeName === 'Heroes') {
                    iconName = `ios-folder`
                }else if (routeName === 'Settings') {
                    iconName = `ios-settings`
                }

                return <IconComponent name={iconName} size={25} color={tintColor} />
            }
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        }
    }
)

export default createAppContainer(index)