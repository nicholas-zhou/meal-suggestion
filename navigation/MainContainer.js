import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import GroceriesScreen from './screens/GroceriesScreen';
import SettingsScreen from './screens/SettingsScreen';

const homeName = 'Home';
const scanName = 'Scan';
const groceriesName = 'Groceries';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === scanName) {
                            iconName = focused ? 'camera' : 'camera-outline'
                        } else if (rn === groceriesName) {
                            iconName = focused ? 'egg' : 'egg-outline'
                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: '#112A46',
                    tabBarInactiveTintColor: '#ffffff',
                    tabBarStyle: {padding: 10, height: 100, backgroundColor: '#f87c4c'},
                    tabBarLabelStyle: {paddingBottom: 10, fontSize: 10},
                })}>

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={scanName} component={ScanScreen}/>
                <Tab.Screen name={groceriesName} component={GroceriesScreen}/>
                <Tab.Screen name={settingsName} component={SettingsScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}