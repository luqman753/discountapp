import {View, Image} from 'react-native';
import React from 'react';
import Home from '../screens/Home/index';
import Favourite from '../screens/Favourite/index';
import Cart from '../screens/Cart/index';
import Profile from '../screens/Profile/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'red',
          borderTopWidth: 0,
          elevation: 0, // for Android
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        iconStyle: {
          width: 30,
          height: 30,
        },
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused && (
                <View
                  style={{
                    width: 28,
                    height: 7,
                    backgroundColor: '#7625DE',
                    borderRadius: 30,
                    marginBottom: 4,
                  }}
                />
              )}
              <Image
                source={require('../../assets/images/home.png')}
                style={{width: 20, height: 20}}
              />
            </View>
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Favourite"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused && (
                <View
                  style={{
                    width: 28,
                    height: 7,
                    backgroundColor: '#7625DE',
                    borderRadius: 30,
                    marginBottom: 4,
                  }}
                />
              )}
              <Image
                source={require('../../assets/images/heart.png')}
                style={{width: 20, height: 20}}
              />
            </View>
          ),
        }}
        component={Favourite}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused && (
                <View
                  style={{
                    width: 28,
                    height: 7,
                    backgroundColor: '#7625DE',
                    borderRadius: 30,
                    marginBottom: 4,
                  }}
                />
              )}
              <Image
                source={require('../../assets/images/shopping-cart.png')}
                style={{width: 20, height: 20}}
              />
            </View>
          ),
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused && (
                <View
                  style={{
                    width: 28,
                    height: 7,
                    backgroundColor: '#7625DE',
                    borderRadius: 30,
                    marginBottom: 4,
                  }}
                />
              )}
              <Image
                source={require('../../assets/images/usernotfill.png')}
                style={{width: 20, height: 20}}
              />
            </View>
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
