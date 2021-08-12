/**
 * @description Pantalla de inicio de sesion
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert
} from 'react-native';
import PropTypes from 'prop-types';
import GeneralStyles from '../styles/GeneralStyles';
import { ACTIVE_OPACITY } from '../utilities/GlobalConstantsUtilities';
import Styles from '../styles/LoginStyle';
import auth from '@react-native-firebase/auth';
import LoaderIndicatorComponent from '../components/LoaderIndicatorComponent';

/**
 * @description Constante principal de LoginScreen
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 * @return {*} Renderiza componentes
 */
const LoginScreen = ({ navigation }) => {

    // CONSTANTES Y HOOKS
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [emailInputValue, setEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');

    /**
     * @description Funcion para iniciar sesion 
     * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
     * @version 1.0 - 08/08/2021
     */
    const loginUser = () => {
        console.log('--- registerAnUser ---');
        setLoading(true);
        auth()
            .signInWithEmailAndPassword(emailInputValue.trim(), passwordInputValue)
            .then((res) => {
                console.log('User signed in!');
                setLoading(false);
                console.log('res: ' + res);
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    Alert.alert('Cuenta de usuario no encontrada', 'Introduce una cuenta existente');
                    setLoading(false);
                }

                if (error.code === 'auth/wrong-password') {
                    Alert.alert('Cuenta de usuario no encontrada', 'Contraseña o correo eletrónico incorrecto');
                    setLoading(false);
                }

                setLoading(false);
                console.log('other error: ', error);
            });
    }

    /**
     * @description Funcion para limpiar inputs de inicio de sesión
     * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
     * @version 1.0 - 08/08/2021
     */
    const cleanUpAllInputs = () => {
        // INPUTS
        setEmailInputValue('');
        setPasswordInputValue('');
    }

    // SE RENDERIZAN ELEMENTOS VISUALES
    if (loading) {
        return (
            <LoaderIndicatorComponent />
        );
    } else {
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
                                autoCapitalize={'none'}
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
                                autoCapitalize={'none'}
                                multiline={false}
                                maxLength={100}
                                textContentType={'password'}
                                keyboardType={'default'}
                                secureTextEntry={true}
                                returnKeyType={'next'}
                                onChangeText={(formatted) => {
                                    console.log('PASSWORD: ', formatted);
                                    setPasswordInputValue(formatted);
                                    formatted !== '' && emailInputValue !== ''
                                        ? setButtonDisabled(false)
                                        : setButtonDisabled(true)
                                }}
                            />
                            <TouchableOpacity
                                style={
                                    buttonDisabled == false
                                        ? [Styles.buttonStyle, Styles.centered]
                                        : [Styles.buttonStyle, Styles.centered, Styles.buttonStyleDisabled]
                                }
                                onPress={() => {
                                    loginUser();
                                }}
                                activeOpacity={ACTIVE_OPACITY}
                                disabled={buttonDisabled}
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
}

// SE ESPECIFICAN LOS VALORES DE LAS PROPS
LoginScreen.propTypes = {
    navigation: PropTypes.object
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default LoginScreen;
