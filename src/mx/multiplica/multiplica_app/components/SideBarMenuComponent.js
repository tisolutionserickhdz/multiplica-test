/**
 * @description Componente de menu lateral
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import GeneralStyles from '../styles/GeneralStyles';
import LoaderIndicatorComponent from './LoaderIndicatorComponent';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @description Constante principal de SideBarMenuComponent
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
const SideBarMenuComponent = ({ navigation }) => {

    // CONSTANTES Y HOOKS
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('Usuario');
    const [email, setEmail] = useState('usuario@example.com');
    const [capitalLetter, setCapitalLetter] = useState('MX');

    useEffect(() => {
        AsyncStorage.getItem('@userInfoSignedObject').then((res) => {
            const parsedResponse = JSON.parse(res);
            console.log('@userInfoSignedObject RECUPERADO EN SIDE BAR: ', parsedResponse);
            setName(parsedResponse.displayName);
            setEmail(parsedResponse.email);
            setCapitalLetter(parsedResponse.displayName.charAt(0));
            setLoading(false);
        });
    }, []);

    // SE RENDERIZAN ELEMENTOS VISUALES
    if (loading) {
        return (
            <View style={GeneralStyles.mainContainer}>
                <LoaderIndicatorComponent />
            </View>
        )
    } else {
        return (
            <View style={GeneralStyles.sideBarMainContainer}>

                {
                    <View style={GeneralStyles.sideBarUserInfoContainer}>
                        <View style={GeneralStyles.avatarUser}>
                            <Text style={[GeneralStyles.circularMediumExtraLargeBlueLight, GeneralStyles.avatarText]}>{capitalLetter}</Text>
                        </View>
                        <View style={GeneralStyles.sideBarUserNameContainer}>
                            <Text style={GeneralStyles.userNameText}>{name}</Text>
                            <Text style={GeneralStyles.userEmailText}>{email}</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                            <Image
                                source={require('../resources/icons/close-drawer-icon.png')}
                                style={GeneralStyles.sideBarCloseButton}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                    </View>
                }

                <View style={GeneralStyles.sideBarSectionsContainer}>
                    <View style={GeneralStyles.sideBarSection}>
                        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                            <Text style={GeneralStyles.sectionText}>Productos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={GeneralStyles.sideBarSection}>
                        <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                            <Text style={GeneralStyles.sectionText}>Servicios</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={GeneralStyles.sideBarSection}>
                        <TouchableOpacity onPress={() => {
                            // NOTA: INVOCAR ESTA LLAMADA CUANDO SE CIERRE SESION EN FIREBASE
                            auth()
                                .signOut()
                                .then(() => {
                                    AsyncStorage.removeItem('@userInfoSignedObject').then(() => { console.log('@userInfoSignedObject REMOVIDO') })
                                });
                        }}>
                            <Text style={GeneralStyles.logOutText}>Cerrar sesi??n</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    }
}

// ESPECIFICACION DE PROPIEDADES DEL COMPONENTE
SideBarMenuComponent.propTypes = {
    navigation: PropTypes.object
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default SideBarMenuComponent;
