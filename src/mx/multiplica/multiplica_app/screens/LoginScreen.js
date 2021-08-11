/**
 * @description Pantalla de inicio de sesion
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Keyboard,
    ImageBackground
} from 'react-native';
import PropTypes from 'prop-types';
import GeneralStyles from '../styles/GeneralStyles';
import { AuthContext } from '../components/GlobalContextComponent';
import LinearGradient from 'react-native-linear-gradient';
import { RED_PRINCIPAL } from '../utilities/GlobalConstantsUtilities';
import Styles from '../styles/LoginStyle';

/**
 * @description Constante principal de LoginScreen
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 * @return {*} Renderiza componentes
 */
const LoginScreen = ({ navigation }) => {

    // CONSTANTES Y HOOKS


    // CONTEXT PARA MANEJO DE SESION DEL USUARIO
    const { signInContext } = useContext(AuthContext);


    /**
     * @description Funcion para iniciar sesión
     * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
     * @version 1.0 - 08/08/2021
     */
    const loginFunction = async (username, password) => {
        // console.log('ENTRA A MUTATION functionLoginUser con username: ', username, ' y password: ', password);
        Keyboard.dismiss();
        //  NOTA: INVOCAR ESTE LLAMADO CUANDO SE HAGA INICIO DE SESION CON FIREBASE
        // signInContext(username, password, accessToken, userId);
    }

    /**
     * @description Funcion para recuperar contraseña
     * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
     * @version 1.0 - 08/08/2021
     */
    const recoveryPasswordFunction = async (email) => {
        console.log('ENTRA A recoveryPasswordFunction');
    }

    // SE RENDERIZAN ELEMENTOS VISUALES
    return (
        <View style={GeneralStyles.mainContainer}>
            <View style={Styles.subMainContainer}></View>
        </View>
    );
}

// SE ESPECIFICAN LOS VALORES DE LAS PROPS
LoginScreen.propTypes = {
    navigation: PropTypes.object
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default LoginScreen;
