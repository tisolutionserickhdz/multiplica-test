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

/**
 * @description Constante principal de SideBarMenuComponent
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
const SideBarMenuComponent = ({ navigation }) => {

    // CONSTANTES Y HOOKS
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('MX');
    const [capitalLetter, setCapitalLetter] = useState('MX');

    useEffect(() => {
        const user = auth().currentUser;
        const userDisplayName = JSON.stringify(user.displayName);
        setCapitalLetter(userDisplayName.charAt(1));
        const displayNameWithoutCommas = userDisplayName.replace(/['"]+/g, '');
        console.log('USUARIO RECUPERADO EN SIDE BARrrr: ' + displayNameWithoutCommas);
        setName(displayNameWithoutCommas);
        if (userDisplayName) {
            setLoading(false);
        }
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
                                .then((res) => {
                                    console.log('res de cerrar sesion: ', JSON.stringify(res));
                                    // setLoading(true);
                                });
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
