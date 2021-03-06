/**
 * @description Navegacion lateral del usuario que ya se ha firmado
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation.js';
import SideBarMenuComponent from '../components/SideBarMenuComponent';
import { PRODUCTOS_TAB } from '../utilities/GlobalConstantsUtilities.js';

const DRAWER = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <DRAWER.Navigator initialRouteName={PRODUCTOS_TAB} drawerContent={props => <SideBarMenuComponent {...props} />}>
            <DRAWER.Screen name="Inicio" component={TabNavigation} options={{ headerShown: false }} />
        </DRAWER.Navigator>
    );
}