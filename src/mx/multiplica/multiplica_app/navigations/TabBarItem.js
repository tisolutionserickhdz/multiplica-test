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
    BUSCAR_TAB,
    INICIO_TAB,
    MIS_VIDEOS_TAB
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
                        : tab.name === BUSCAR_TAB
                            ? <Text style={[GeneralStyle.circularBoldLargeBlack, { color: color }]}>Buscar</Text>
                            : tab.name === MIS_VIDEOS_TAB
                                ? <Text style={[GeneralStyle.circularBoldLargeBlack, { color: color }]}>Mis videos</Text>
                                : <Text style={[GeneralStyle.circularBoldLargeBlack, { color: color }]}>Descargas</Text>
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