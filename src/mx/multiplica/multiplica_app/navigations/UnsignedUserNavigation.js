/**
 * @description Pila de Navegacion del usuario que aun no se ha firmado
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {
    responsiveHeight as h
} from 'react-native-responsive-dimensions';
import { PURE_WHITE } from '../utilities/GlobalConstantsUtilities';

// ESTILOS DE LA NAVEGACION GENERAL
const NAVIGATION_OPTIONS = {
    headerStyle: {
        backgroundColor: 'black',
    },
    headerTintColor: "#ffffff",
    headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: h(2.5),
        color: PURE_WHITE,
    },
    headerTitleAlign: "center",
    headerBackTitleVisible: false
};

// PILA DE NAVEGACION
const STACK = createStackNavigator();

// FUNCION QUE RETORNA LAS PILAS
const unsignedUserNavigation = () => {

    // SE RENDERIZAN ELEMENTOS VISUALES
    return (
        <STACK.Navigator
            initialRouteName={'Register'}
            screenOptions={{
                ...NAVIGATION_OPTIONS,
                title: 'Register',
            }}>
            <STACK.Screen
                name='Register'
                component={RegisterScreen}
                options={{
                    title: 'Register',
                    headerShown: false,
                }}
            />
            <STACK.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    title: 'Login',
                    headerShown: false,
                }}
            />
        </STACK.Navigator>
    );
};

// SE EXPORTA LA NAVEGACION DEL USUARIO NO FIRMADO
export default unsignedUserNavigation;
