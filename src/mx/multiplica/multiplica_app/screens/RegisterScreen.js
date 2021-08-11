/**
 * @description Pantalla de Registro
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React, { useContext } from 'react';
import {
    View,
    Keyboard,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import GeneralStyles from '../styles/GeneralStyles';
import { AuthContext } from '../components/GlobalContextComponent';
import Styles from '../styles/LoginStyle';
import { ACTIVE_OPACITY } from '../utilities/GlobalConstantsUtilities';
import VersionInfo from 'react-native-version-info';

/**
 * @description Constante principal de RegisterScreen
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 * @return {*} Renderiza componentes
 */
const RegisterScreen = ({ navigation }) => {

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
            <View style={Styles.subMainContainer}>
                <View style={Styles.logoContainer}>
                    <Image
                        source={require('../resources/logos/logo-multiplica.png')}
                        style={Styles.logoMultiplicaSize}
                        resizeMode={'contain'}
                    />
                </View>
                {/* <View style={Styles.actionsContainer}> */}
                <View style={Styles.buttonsContainer}>
                    <TouchableOpacity
                        style={Styles.buttonStyle}
                        onPress={() => { console.log('REGISTER PRESSED'); }}
                        activeOpacity={ACTIVE_OPACITY}
                    >
                        <Text style={Styles.buttonTextStyle}>REGÍSTRATE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Styles.buttonStyle}
                        onPress={() => { console.log('LOGIN PRESSED'); }}
                        activeOpacity={ACTIVE_OPACITY}
                    >
                        <Text style={Styles.buttonTextStyle}>INICIA SESIÓN</Text>
                    </TouchableOpacity>
                </View>
                {/* </View> */}
            </View>
        </View >
    );
}

// SE ESPECIFICAN LOS VALORES DE LAS PROPS
RegisterScreen.propTypes = {
    navigation: PropTypes.object
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default RegisterScreen;
