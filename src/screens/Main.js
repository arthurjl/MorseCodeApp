import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import GameScreen from './GameScreen.js';
import LevelsScreen from './LevelsScreen.js';
import HomePage from './HomePage.js';
import GameOverScreen from './GameOverScreen.js';
import OptionsScreen from './OptionsScreen.js';

const fade = (props) => {
  const {position, scene} = props;
  const index = scene.index;

  const translateX = 0;
  const translateY = 0;

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [0.3, 1, 0.3]
  })

  return {
    opacity,
    transform: [{translateX}, {translateY}]
  }
}

const RootStack = createStackNavigator(
  {
    Game: GameScreen,
    Levels: LevelsScreen,
    Home: HomePage,
    GameOver: GameOverScreen,
    Options: OptionsScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    transitionConfig: () => ({
      screenInterpolator: (props) => {
        return fade(props)
      }
    })
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Main extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
});


