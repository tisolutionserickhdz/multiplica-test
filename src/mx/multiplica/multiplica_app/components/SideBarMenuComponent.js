/**
 * @description Componente de menu lateral
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import GeneralStyles from '../styles/GeneralStyles';
import { AuthContext } from '../components/GlobalContextComponent';
import LoaderIndicatorComponent from './LoaderIndicatorComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @description Constante principal de SideBarMenuComponent
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
const SideBarMenuComponent = ({ navigation }) => {

    // CONSTANTES Y HOOKS
    const [loading, setLoading] = useState(true);
    const { signOutContext } = useContext(AuthContext);
    const [userId, setUserId] = useState(1);
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {

        {
            // VALIDACION DE TOKEN DE USUARIO
            // console.log('ENTRA A RECUPERAR TOKEN DE USUARIO EN SIDEBAR');
            try {
                AsyncStorage.getItem('@userAuthTokenObject').then(response => {
                    // console.log('OBJETO userAuthTokenObject RECUPERADO CON EXITO: ', response);
                    setUserToken(response);
                    setLoading(false);
                })
            } catch (error) {
                console.log('ERROR RECUPERANDO OBJETO userAuthTokenObject: ', error);
            }
        }

    }, [userId]);

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
                            <Text style={[GeneralStyles.circularMediumExtraLargeBlueLight, GeneralStyles.avatarText]}>{'M' + 'X'}</Text>
                        </View>
                        <View style={GeneralStyles.sideBarUserNameContainer}>
                            <Text style={GeneralStyles.userNameText}>{'Usuario'}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('EditarPerfil')}>
                                <Text style={GeneralStyles.userNameText}>Editar perfil</Text>
                            </TouchableOpacity>
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
                        <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                            <Text style={GeneralStyles.sectionText}>Inicio</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={GeneralStyles.sideBarSection}>
                        <TouchableOpacity onPress={() => {
                            // NOTA: INVOCAR ESTA LLAMADA CUANDO SE CIERRE SESION EN FIREBASE
                            signOutContext(userToken);
                        }}>
                            <Text style={GeneralStyles.logOutText}>Cerrar sesión</Text>
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
