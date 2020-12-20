import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import {Home} from './Home'
import { Menu } from "./Menu";
import {PAGE_NAME} from '../common/navigationConst'
import {DishDetail} from './DishDetail'


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const MenuWrapper = () => (
    <Stack.Navigator initialRouteName={PAGE_NAME.MENU}>
        <Stack.Screen
            name={PAGE_NAME.MENU}
            component={Menu}
            options={{ title: "Меню" }}
        />
        <Stack.Screen
            name={PAGE_NAME.DISH_DETAIL}
            component={DishDetail}
            options={{ title: "Состав блюда" }}
        />
    </Stack.Navigator>
)

export const Main = () => {
    return (
      <View style={{ flex: 1, paddingTop: 0 }}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName={PAGE_NAME.HOME}>
            <Drawer.Screen name={PAGE_NAME.HOME} component={Home} />
            <Drawer.Screen name={PAGE_NAME.MENU} component={MenuWrapper} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    );
}
