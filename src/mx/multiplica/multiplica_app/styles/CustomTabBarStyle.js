/**
 * @description Hoja de estilos del Tab Bar Component
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2
 */

// SCREEN DIMENSIONS
import { Platform } from "react-native";
import {
    responsiveScreenHeight as sdh,
    responsiveScreenWidth as sdw
} from "react-native-responsive-dimensions";

import {
    BACKGROUND_BLUE,
    GREY_BUTTONS,
    LIGHT_BLUE,
    PURE_WHITE
} from "../utilities/GlobalConstantsUtilities";

export default {
    tabBarWrapper: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBarContainer: {
        width: sdw(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: PURE_WHITE,
        paddingBottom: Platform.OS === 'android' ? sdh(1.5) : sdh(3),
        borderTopWidth: 1,
        borderColor: GREY_BUTTONS
    },
    tabBarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    iconTabbarPressed: {
        width: sdw(6),
        height: sdh(6),
        tintColor: LIGHT_BLUE
    },
    iconTabbar: {
        width: sdw(4),
        height: sdh(4),
        tintColor: BACKGROUND_BLUE
    }
}