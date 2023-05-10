import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../pages/MapScreen';
import PermissionScreen from '../pages/PermissionScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='PermissionScreen'
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="Notifications" component={PermissionScreen} />
            <Stack.Screen name="Home" component={MapScreen} />

        </Stack.Navigator>
    );
}