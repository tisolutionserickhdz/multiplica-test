/**
 * @description Navegacion de tabbar del usuario que ya se ha firmado
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  INICIO_TAB
} from '../utilities/GlobalConstantsUtilities';
import CustomTabBarComponent from '../navigations/CustomTabBarComponent';
import SignedUserNavigation from '../navigations/SignedUserNavigation';

const TAB = createBottomTabNavigator();

export default function TabNavigation() {
  return (

    <TAB.Navigator initialRouteName={INICIO_TAB} tabBar={(props) => <CustomTabBarComponent {...props} />}>
      {/* SE UNE SignedUserNavigation CON TabNavigation COLOCANDOLO EN RUTA INICIAL */}
      <TAB.Screen
        name={INICIO_TAB}
        component={SignedUserNavigation}
        initialParams={{ icon: require('../resources/icons/home-tabbar-icon.png') }}
      />
    </TAB.Navigator>
  );
}