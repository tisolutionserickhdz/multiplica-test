/**
 * @description Componente de tabs de tabbar
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React, { useState } from 'react';
import {
    View
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../styles/CustomTabBarStyle';
import TabBarItem from './TabBarItem';
import {
    LIGHT_BLUE,
    BACKGROUND_BLUE,
    INICIO_TAB
} from '../utilities/GlobalConstantsUtilities';

const CustomTabBarComponent = ({ state, navigation }) => {

    const { routes } = state;
    const [selected, setSelected] = useState(INICIO_TAB);

    const renderColor = (currentTab) => currentTab === selected ? LIGHT_BLUE : BACKGROUND_BLUE;
    const renderSize = (currentTab) => currentTab === selected ? 30 : 20;

    const handlePress = (activeTab, index) => {
        if (state.index !== index) {
            console.log(activeTab);
            setSelected(activeTab);
            navigation.navigate(activeTab);
        }
    };

    return (
        <View style={Styles.tabBarWrapper}>
            <View style={Styles.tabBarContainer}>
                {
                    routes.map(
                        (route, index) =>
                            <TabBarItem
                                tab={route}
                                icon={route.params.icon}
                                onPress={() => handlePress(route.name, index)}
                                color={renderColor(route.name)}
                                size={renderSize(route.name)}
                                key={route.key}
                            />
                    )
                }
            </View>
        </View>
    );
}

// ESPECIFICACION DE PROPIEDADES DEL COMPONENTE
CustomTabBarComponent.propTypes = {
    state: PropTypes.any,
    navigation: PropTypes.object
};

export default CustomTabBarComponent;