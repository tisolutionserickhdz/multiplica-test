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
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import GeneralStyles from '../styles/GeneralStyles';
import { AuthContext } from '../components/GlobalContextComponent';
import LinearGradient from 'react-native-linear-gradient';
import { ACTIVE_OPACITY, RED_PRINCIPAL } from '../utilities/GlobalConstantsUtilities';
import Styles from '../styles/LoginStyle';

/**
 * @description Constante principal de LoginScreen
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 * @return {*} Renderiza componentes
 */
const LoginScreen = ({ navigation }) => {

    // CONSTANTES Y HOOKS
    const [emailInputValue, setEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');

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

    /**
     * @description Funcion para limpiar inputs de registro
     * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
     * @version 1.0 - 08/08/2021
     */
    const cleanUpAllInputs = () => {
        // INPUTS
        setEmailInputValue('');
        setPasswordInputValue('');
    }

    // SE RENDERIZAN ELEMENTOS VISUALES
    return (
        <View style={GeneralStyles.mainContainer}>
            <View style={Styles.actionsContainer}>
                <ScrollView
                    bounces={false}
                    style={Styles.flexOne}
                >
                    <View style={Styles.logoLoginContainer}>
                        <Image
                            source={require('../resources/logos/logo-multiplica.png')}
                            style={Styles.logoLoginMultiplicaSize}
                            resizeMode={'cover'}
                        />
                    </View>
                    <Text style={Styles.loginLabelText}>Inicio de sesión</Text>
                    <Text style={Styles.redDivider}>__________________________________</Text>
                    <View style={Styles.formContainer}>
                        <Text style={Styles.formLabelText}>Correo electrónico</Text>
                        <TextInput
                            style={Styles.textInput}
                            placeholderTextColor={'grey'}
                            placeholder={'Ingresa tu correo electrónico'}
                            value={emailInputValue}
                            autoCapitalize={'words'}
                            multiline={false}
                            maxLength={100}
                            textContentType={'emailAddress'}
                            keyboardType={'email-address'}
                            returnKeyType={'next'}
                            onChangeText={(formatted) => {
                                console.log('EMAIL: ', formatted);
                                setEmailInputValue(formatted);
                            }}
                        />
                        <Text style={Styles.formLabelText}>Contraseña</Text>
                        <TextInput
                            style={Styles.textInput}
                            placeholderTextColor={'grey'}
                            placeholder={'Ingresa tu contraseña'}
                            value={passwordInputValue}
                            autoCapitalize={'words'}
                            multiline={false}
                            maxLength={100}
                            textContentType={'password'}
                            keyboardType={'default'}
                            secureTextEntry={true}
                            returnKeyType={'next'}
                            onChangeText={(formatted) => {
                                console.log('PASSWORD: ', formatted);
                                setPasswordInputValue(formatted);
                            }}
                        />
                        <TouchableOpacity
                            style={[Styles.buttonStyle, Styles.centered]}
                            onPress={() => { console.log('Login function called'); }}
                            activeOpacity={ACTIVE_OPACITY}
                        >
                            <Text style={Styles.buttonTextStyle}>CONTINUAR</Text>
                        </TouchableOpacity>
                        <Text style={Styles.redDivider}>__________________________________</Text>
                        <Text style={Styles.alreadyAccountTextStyle}>¿Aún no tienes una cuenta?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Register');
                                cleanUpAllInputs();
                            }}
                            activeOpacity={ACTIVE_OPACITY}
                        >
                            <Text style={Styles.goToRegisterTextStyle}>Regístrate</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

// SE ESPECIFICAN LOS VALORES DE LAS PROPS
LoginScreen.propTypes = {
    navigation: PropTypes.object
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default LoginScreen;
