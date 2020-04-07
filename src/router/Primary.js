/** @format */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import EventListScreen from '../screens/EventListScreen';
import NameEntryScreen from '../screens/NameEntryScreen';
import TrackingViewScreen from '../screens/TrackingViewScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Primary = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="NameEntryScreen" component={NameEntryScreen} />
      <Stack.Screen name="EventListCompoundScreen">
        {() => (
          <Tab.Navigator
            initialRouteName="EventList"
            tabBar={() => null}
            swipeEnabled>
            <Tab.Screen name="EventListScreen" component={EventListScreen} />
            <Tab.Screen
              name="TrackingViewScreen"
              component={TrackingViewScreen}
            />
          </Tab.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen name="EventDetailsCompoundScreen">
        {() => (
          <Tab.Navigator
            initialRouteName="EventDetails"
            tabBar={() => null}
            swipeEnabled>
            <Tab.Screen
              name="EventDetailsScreen"
              component={EventDetailsScreen}
            />
            <Tab.Screen
              name="TrackingViewScreen"
              component={TrackingViewScreen}
            />
          </Tab.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default Primary;
