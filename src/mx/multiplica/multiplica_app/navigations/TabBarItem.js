/**
 * @description Item de tabs del usuario que ya se ha firmado
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React from 'react';
import {
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../styles/CustomTabBarStyle';
import {
    LIGHT_BLUE,
    INICIO_TAB,
    PRODUCTOS_TAB,
    SERVICIOS_TAB
} from '../utilities/GlobalConstantsUtilities';
import GeneralStyle from '../styles/GeneralStyles';

const TabBarItem = ({ color, tab, onPress, icon }) => {

    return (
        <TouchableOpacity style={Styles.tabBarItem} onPress={onPress}>
            <Image
                source={icon}
                style={
                    color === LIGHT_BLUE
                        ? Styles.iconTabbarPressed
                        : Styles.iconTabbar
                }
                resizeMode={'contain'}
            />
            {
                tab.name !== '' && tab.name != null && tab.name != undefined
                    ? tab.name === INICIO_TAB
                        ? <Text style={[GeneralStyle.circularBoldLargeBlack, { color: color }]}>Inicio</Text>
                        : tab.name === PRODUCTOS_TAB
                            ? <Text style={[GeneralStyle.circularBoldLargeBlack, { color: color }]}>Productos</Text>
                            : tab.name === SERVICIOS_TAB
                                ? <Text style={[GeneralStyle.circularBoldLargeBlack, { color: color }]}>Servicios</Text>
                                : null
                    : null
            }
        </TouchableOpacity>
    )
}

// ESPECIFICACION DE PROPIEDADES DEL COMPONENTE
TabBarItem.propTypes = {
    color: PropTypes.any,
    tab: PropTypes.any,
    onPress: PropTypes.any,
    icon: PropTypes.any,
    size: PropTypes.any
};

export default TabBarItem;