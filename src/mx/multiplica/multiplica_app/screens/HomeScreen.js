/**
 * @description Pantalla de inicio
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React, { useEffect, useState } from 'react';
import {
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import GeneralStyles from '../styles/GeneralStyles';
import auth from '@react-native-firebase/auth';
import LoaderIndicatorComponent from '../components/LoaderIndicatorComponent';

/**
 * @description Constante principal de HomeScreen
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 * @return {*} Renderiza componentes
 */
const HomeScreen = ({ navigation }) => {

    // CONSTANTES Y HOOKS
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = auth().currentUser;
        console.log('USUARIO RECUPERADO EN HOME: ' + JSON.stringify(user.displayName));

        if (JSON.stringify(user.displayName)) {
            setLoading(false);
        }
    }, []);

    // SE RENDERIZAN ELEMENTOS VISUALES
    if (loading) {
        return (
            <LoaderIndicatorComponent />
        );
    } else {
        return (
            <View style={GeneralStyles.mainContainer}>
                <Text>HOME SCREEN</Text>
            </View>
        );
    }
}

// SE ESPECIFICAN LOS VALORES DE LAS PROPS
HomeScreen.propTypes = {
    navigation: PropTypes.object
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default HomeScreen;
