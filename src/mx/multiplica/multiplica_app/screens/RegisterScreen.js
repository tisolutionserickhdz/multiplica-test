/**
 * @description Pantalla de Registro
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React, { useState, useContext } from 'react';
import {
    View,
    Keyboard,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import PropTypes from 'prop-types';
import GeneralStyles from '../styles/GeneralStyles';
import { AuthContext } from '../components/GlobalContextComponent';
import Styles from '../styles/LoginStyle';
import { ACTIVE_OPACITY } from '../utilities/GlobalConstantsUtilities';

/**
 * @description Constante principal de RegisterScreen
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 * @return {*} Renderiza componentes
 */
const RegisterScreen = ({ navigation }) => {

    // CONSTANTES Y HOOKS
    const [isRegisterForm, setIsRegisterForm] = useState(false);
    const [nameInputValue, setNameInputValue] = useState('');
    const [lastNameInputValue, setLastNameInputValue] = useState('');
    const [secondLastNameInputValue, setSecondLastNameInputValue] = useState('');
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
        setNameInputValue('');
        setLastNameInputValue('');
        setSecondLastNameInputValue('');
        setEmailInputValue('');
        setPasswordInputValue('');
    }

    // SE RENDERIZAN ELEMENTOS VISUALES
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
                                        }}
                                    />
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={[Styles.buttonStyle, Styles.centered]}
                                        onPress={() => { console.log('Login function called'); }}
                                        activeOpacity={ACTIVE_OPACITY}
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




                        {/* <View style={Styles.actionsContainer}>

                            <View style={Styles.logoLoginContainer}>
                                <Image
                                    source={require('../resources/logos/logo-multiplica.png')}
                                    style={Styles.logoLoginMultiplicaSize}
                                    resizeMode={'cover'}
                                />
                            </View>
                            <Text style={Styles.loginLabelText}>Registro de usuario</Text>
                            <Text style={Styles.redDivider}>__________________________________</Text>



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
                                    autoCapitalize={'words'}
                                    multiline={false}
                                    maxLength={100}
                                    textContentType={'name'}
                                    keyboardType={'default'}
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
                                    textContentType={'name'}
                                    keyboardType={'default'}
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
                                <Text style={Styles.alreadyAccountTextStyle}>¿Ya tienes una cuenta?</Text>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('Login') }}
                                    activeOpacity={ACTIVE_OPACITY}
                                >
                                    <Text style={Styles.goToRegisterTextStyle}>Inicia sesión</Text>
                                </TouchableOpacity>
                            </View>

                        </View> */}

                    </KeyboardAvoidingView>
            }
        </View >
    );
}

// SE ESPECIFICAN LOS VALORES DE LAS PROPS
RegisterScreen.propTypes = {
    navigation: PropTypes.object
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default RegisterScreen;
