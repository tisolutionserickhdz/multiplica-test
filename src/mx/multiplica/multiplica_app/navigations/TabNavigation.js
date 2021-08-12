/**
 * @description Navegacion de tabbar del usuario que ya se ha firmado
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  INICIO_TAB, PRODUCTOS_TAB, SERVICIOS_TAB
} from '../utilities/GlobalConstantsUtilities';
import CustomTabBarComponent from '../navigations/CustomTabBarComponent';
import SignedUserNavigation from '../navigations/SignedUserNavigation';
import ProductsScreen from '../screens/ProductsScreen';
import ServicesScreen from '../screens/ServicesScreen';

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
      <TAB.Screen
        name={PRODUCTOS_TAB}
        component={ProductsScreen}
        initialParams={{ icon: require('../resources/icons/products-tabbar-icon.png') }}
      />
      <TAB.Screen
        name={SERVICIOS_TAB}
        component={ServicesScreen}
        initialParams={{ icon: require('../resources/icons/services-tabbar-icon.png') }}
      />
    </TAB.Navigator>
  );
}