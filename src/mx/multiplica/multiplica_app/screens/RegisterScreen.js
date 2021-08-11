/**
 * @description Pantalla de registro de usuario
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Keyboard
} from 'react-native';
import PropTypes from 'prop-types';
import GeneralStyles from '../styles/GeneralStyles';
import { AuthContext } from '../components/GlobalContextComponent';
/**
 * @description Constante principal de RegisterScreen
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 * @return {*} Renderiza componentes
 */
const RegisterScreen = ({ navigation }) => {

    // CONSTANTES Y HOOKS
    const [emailInputValue, setEmailInputValue] = useState('');
    const [recoveryEmailInputValue, setRecoveryEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);
    const [sendButtonDisabled, setSendButtonDisabled] = useState(true);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [isRecoveryPasswordForm, setIsRecoveryPasswordForm] = useState(false);

    // CONTEXT PARA MANEJO DE SESION DEL USUARIO
    const { signInContext } = useContext(AuthContext);


    /**
     * @description Funcion para iniciar sesión después de registrar al usuario
     * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
     * @version 1.0 - 08/08/2021
     */
    const loginFunction = async (username, password) => {
        // console.log('ENTRA A MUTATION functionLoginUser con username: ', username, ' y password: ', password);
        Keyboard.dismiss();

        //  NOTA: INVOCAR ESTE LLAMADO CUANDO SE HAGA INICIO DE SESION CON FIREBASE
        // signInContext(username, password, accessToken, userId);


    }



    // SE RENDERIZAN ELEMENTOS VISUALES
    return (
        <View style={GeneralStyles.mainContainer}>
            <Text>REGISTER SCREEN</Text>
        </View>
    );
}

// SE ESPECIFICAN LOS VALORES DE LAS PROPS
RegisterScreen.propTypes = {
    navigation: PropTypes.object
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default RegisterScreen;
