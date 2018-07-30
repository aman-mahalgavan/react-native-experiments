import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, DrawerNavigator } from 'react-navigation';
import Home from './components/home/home';
import About from './components/about/about';
import Navigation from './components/navigation/navigation';
import Gallery from './components/gallery/gallery';
import ContactUs from './components/contactUs/contactUs';

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null
      })
    },
    About: {
      screen: About,
      navigationOptions: () => ({
        header: null
      })
    },
    Gallery: {
      screen: Gallery,
      navigationOptions: () => ({
        header: null
      })
    },
    ContactUs: {
      screen: ContactUs,
      navigationOptions: () => ({
        header: null
      })
    }
  }
);

const customDrawerNavigation = DrawerNavigator({

  Main: {
    screen: StackNavigator,
  },
}, {
    contentComponent: props => {
      return (
        <Navigation {...props} />
      )
    },
    drawerWidth: 300
  });


export default customDrawerNavigation;