import 'react-native-gesture-handler';
import React, { Component } from "react";
import { View, Platform } from 'react-native'
import { Menu } from "./Menu";
import { DISHES } from "../common/dishes";
import { DishDetail } from "./DishDetail";
import { createStackNavigator } from 'react-navigation'

export const PAGE_NAME = {
  MENU: 'Menu',
  DISH_DETAIL: 'DishDetail'
}

const MenuNavigator = createStackNavigator({
  [PAGE_NAME.MENU]: { screen: Menu },
  [PAGE_NAME.DISH_DETAIL]: { screen: DishDetail },

}, {
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#0e42dc'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff'
    }
  }
})

export class Main extends Component {

  render() {
    const { dishes, selectedDish } = this.state;

    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Contains.statusBarHeight }}>
        <MenuNavigator />
      </View>
    );
  }
}
