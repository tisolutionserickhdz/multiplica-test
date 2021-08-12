/**
 * @description Pantalla de Registro
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React, { useState } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import PropTypes from 'prop-types';
import GeneralStyles from '../styles/GeneralStyles';
import Styles from '../styles/LoginStyle';
import { ACTIVE_OPACITY } from '../utilities/GlobalConstantsUtilities';
import auth from '@react-native-firebase/auth';
import LoaderIndicatorComponent from '../components/LoaderIndicatorComponent';

/**
 * @description Constante principal de RegisterScreen
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 * @return {*} Renderiza componentes
 */
const RegisterScreen = ({ navigation }) => {

    // CONSTANTES Y HOOKS
    const [loading, setLoading] = useState(false);
    const [isRegisterForm, setIsRegisterForm] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [nameInputValue, setNameInputValue] = useState('');
    const [lastNameInputValue, setLastNameInputValue] = useState('');
    const [secondLastNameInputValue, setSecondLastNameInputValue] = useState('');
    const [emailInputValue, setEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');

    /**
     * @description Funcion para limpiar inputs de registro
     * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
     * @version 1.0 - 08/08/2021
     */
    const cleanUpAllInputs = () => {
        // INPUTS
        setNameInputValue('');
        setLastNameInputValue('');
        setSecondLastNameInputValue('');
        setEmailInputValue('');
        setPasswordInputValue('');
    }

    /**
     * @description Funcion para registrar un usuario nuevo
     * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
     * @version 1.0 - 08/08/2021
     */
    const registerAnUser = () => {
        console.log('--- registerAnUser ---');
        setLoading(true);
        auth()
            .createUserWithEmailAndPassword(emailInputValue.trim(), passwordInputValue)
            .then(async (res) => {
                const WHITE_SPACE = ' ';
                res.user.updateProfile({
                    displayName: nameInputValue.trim() + WHITE_SPACE + lastNameInputValue.trim() + WHITE_SPACE + secondLastNameInputValue.trim()
                })
                console.log('User registered successfully!');
                setLoading(false);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Correo electrónico en uso', 'Introduce otro correo electrónico válido');
                    setLoading(false);
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert('Correo electrónico no válido', 'Introduce un correo electrónico válido');
                    setLoading(false);
                }

                if (error.code === 'auth/weak-password') {
                    Alert.alert('Contraseña incorrecta', 'Introduce una contraseña alfanumérica');
                    setLoading(false);
                }

                setLoading(false);
                console.error('other error: ', error);
            });
    }

    // SE RENDERIZAN ELEMENTOS VISUALES
    if (loading) {
        return (
            <LoaderIndicatorComponent />
        );
    } else {
        return (
            <View style={GeneralStyles.mainContainer}>
                {
                    isRegisterForm == false ?
                        <View>
                            <View style={Styles.logoContainer}>
                                <Image
                                    source={require('../resources/logos/logo-multiplica.png')}
                                    style={Styles.logoMultiplicaSize}
                                    resizeMode={'contain'}
                                />
                            </View>
                            <View style={Styles.buttonsContainer}>
                                <TouchableOpacity
                                    style={Styles.buttonStyle}
                                    onPress={() => {
                                        console.log('REGISTER PRESSED');
                                        setIsRegisterForm(true);
                                    }}
                                    activeOpacity={ACTIVE_OPACITY}
                                >
                                    <Text style={Styles.buttonTextStyle}>REGÍSTRATE</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={Styles.buttonStyle}
                                    onPress={() => { navigation.navigate('Login') }}
                                    activeOpacity={ACTIVE_OPACITY}
                                >
                                    <Text style={Styles.buttonTextStyle}>INICIA SESIÓN</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <KeyboardAvoidingView
                            enabled
                            behavior={Platform.OS === 'ios' ? 'padding' : null}
                            style={Styles.flexGrowOne}
                        >
                            <ScrollView
                                bounces={false}
                                style={Styles.flexOne}
                                showsVerticalScrollIndicator={false}
                            >
                                <View style={Styles.logoLoginContainer}>
                                    <Image
                                        source={require('../resources/logos/logo-multiplica.png')}
                                        style={Styles.logoLoginMultiplicaSize}
                                        resizeMode={'cover'}
                                    />
                                </View>
                                <Text style={Styles.loginLabelText}>Registro de usuario</Text>
                                <Text style={Styles.redDivider}>__________________________________</Text>


                                <View style={Styles.actionsContainer}>
                                    <View style={Styles.formContainer}>
                                        <Text style={Styles.formLabelText}>Nombre(s)</Text>
                                        <TextInput
                                            style={Styles.textInput}
                                            placeholderTextColor={'grey'}
                                            placeholder={'Ingresa tu(s) nombre(s)'}
                                            value={nameInputValue}
                                            autoCapitalize={'words'}
                                            multiline={false}
                                            maxLength={100}
                                            textContentType={'name'}
                                            keyboardType={'default'}
                                            returnKeyType={'next'}
                                            onChangeText={(formatted) => {
                                                console.log('NOMBRE(S): ', formatted);
                                                setNameInputValue(formatted);
                                            }}
                                        />
                                        <Text style={Styles.formLabelText}>Apellido Paterno</Text>
                                        <TextInput
                                            style={Styles.textInput}
                                            placeholderTextColor={'grey'}
                                            placeholder={'Ingresa tu apellido paterno'}
                                            value={lastNameInputValue}
                                            autoCapitalize={'words'}
                                            multiline={false}
                                            maxLength={100}
                                            textContentType={'name'}
                                            keyboardType={'default'}
                                            returnKeyType={'next'}
                                            onChangeText={(formatted) => {
                                                console.log('APELLIDO PATERNO: ', formatted);
                                                setLastNameInputValue(formatted);
                                            }}
                                        />
                                        <Text style={Styles.formLabelText}>Apellido Materno</Text>
                                        <TextInput
                                            style={Styles.textInput}
                                            placeholderTextColor={'grey'}
                                            placeholder={'Ingresa tu apellido materno'}
                                            value={secondLastNameInputValue}
                                            autoCapitalize={'words'}
                                            multiline={false}
                                            maxLength={100}
                                            textContentType={'name'}
                                            keyboardType={'default'}
                                            returnKeyType={'next'}
                                            onChangeText={(formatted) => {
                                                console.log('APELLIDO MATERNO: ', formatted);
                                                setSecondLastNameInputValue(formatted);
                                            }}
                                        />
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
                                            textContentType={'newPassword'}
                                            keyboardType={'default'}
                                            secureTextEntry={true}
                                            returnKeyType={'next'}
                                            onChangeText={(formatted) => {
                                                console.log('PASSWORD: ', formatted);
                                                setPasswordInputValue(formatted);
                                                formatted !== '' &&
                                                    nameInputValue !== '' &&
                                                    lastNameInputValue !== '' &&
                                                    secondLastNameInputValue !== '' &&
                                                    emailInputValue !== '' ?
                                                    setButtonDisabled(false)
                                                    :
                                                    setButtonDisabled(true)
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            style={
                                                buttonDisabled == false
                                                    ? [Styles.buttonStyle, Styles.centered]
                                                    : [Styles.buttonStyle, Styles.centered, Styles.buttonStyleDisabled]
                                            }
                                            onPress={() => {
                                                registerAnUser();
                                            }}
                                            activeOpacity={ACTIVE_OPACITY}
                                            disabled={buttonDisabled}
                                            disabledOpacity={ACTIVE_OPACITY}
                                        >
                                            <Text style={Styles.buttonTextStyle}>CONTINUAR</Text>
                                        </TouchableOpacity>
                                        <Text style={Styles.redDivider}>__________________________________</Text>
                                        <Text style={Styles.alreadyAccountTextStyle}>¿Ya tienes una cuenta?</Text>
                                        <TouchableOpacity
                                            onPress={() => {
                                                navigation.navigate('Login');
                                                cleanUpAllInputs();
                                            }}
                                            activeOpacity={ACTIVE_OPACITY}
                                        >
                                            <Text style={Styles.goToRegisterTextStyle}>Inicia sesión</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </KeyboardAvoidingView>
                }
            </View >
        );
    }
}

// SE ESPECIFICAN LOS VALORES DE LAS PROPS
RegisterScreen.propTypes = {
    navigation: PropTypes.object
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default RegisterScreen;
