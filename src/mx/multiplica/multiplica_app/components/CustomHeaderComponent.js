/**
 * @description Componente de encabezado personalizado
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import * as React from 'react';
import {
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Styles from '../styles/CustomHeaderStyle';
import PropTypes from 'prop-types';

const CustomHeaderComponent = ({ navigation }) => {
    return (
        <View style={Styles.customHeaderComponentContainer}>
            <View style={Styles.sideBarHeaderIconContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.toggleDrawer()
                }}>
                    <Image
                        source={require('../resources/icons/burger-menu-sidebar-icon.png')}
                        style={Styles.sideBarHeaderIconSize}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>
            </View>
            <View style={Styles.centralLogoHeaderIconContainer}>
                <Image
                    source={require('../resources/logos/logo-multiplica.png')}
                    style={Styles.logoCentralHeaderSize}
                    resizeMode={'contain'}
                />
            </View>
            <View style={Styles.anotherIconHeaderIconContainer}>

            </View>
        </View>
    );
}

// SE ESPECIFICAN LOS VALORES DE LAS PROPS
CustomHeaderComponent.propTypes = {
    navigation: PropTypes.object,
    isHome: PropTypes.bool.isRequired
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default CustomHeaderComponent;
