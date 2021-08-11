/**
 * @description Pila de Navegacion del usuario que ya se ha firmado
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
 import React from 'react';
 import { createStackNavigator } from '@react-navigation/stack';
 import HomeScreen from '../screens/HomeScreen';
 
 import {
     responsiveHeight as h
 } from 'react-native-responsive-dimensions';
 import {
     INICIO_TAB,
     PURE_WHITE
 } from '../utilities/GlobalConstantsUtilities';
 
 
 // ESTILOS DE LA NAVEGACION GENERAL
 const NAVIGATION_OPTIONS = {
     headerStyle: {
         backgroundColor: 'black',
     },
     headerTintColor: '#ffffff',
     headerTitleStyle: {
         textAlign: 'center',
         alignSelf: 'center',
         fontSize: h(2.5),
         color: PURE_WHITE,
     },
     headerTitleAlign: 'center',
     headerBackTitleVisible: false
 };
 
 // PILA DE NAVEGACION
 const STACK = createStackNavigator();
 
 // FUNCION QUE RETORNA LAS PILAS
 const signedUserNavigation = () => {
 
     // SE RENDERIZAN ELEMENTOS VISUALES
     return (
         <STACK.Navigator
             initialRouteName={INICIO_TAB}
             screenOptions={{
                 ...NAVIGATION_OPTIONS
             }}
         >
 
             <STACK.Screen
                 name={INICIO_TAB}
                 component={HomeScreen}
                 options={{
                     headerShown: false
                 }}
             />
         </STACK.Navigator>
     );
 };
 
 // SE EXPORTA LA NAVEGACION DEL USUARIO FIRMADO
 export default signedUserNavigation;
 