/**
 * @description Hoja de estilos del componente Header
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */

// SCREEN DIMENSIONS
import {
    responsiveScreenHeight as sdh,
    responsiveScreenWidth as sdw,
} from "react-native-responsive-dimensions";

import {
    PURE_WHITE,
    RED_PRINCIPAL,
    TRANSPARENT
} from "../utilities/GlobalConstantsUtilities";

export default {
    customHeaderComponentContainer: {
        flexDirection: 'row',
        height: sdh(8),
        width: sdw(100),
        backgroundColor: RED_PRINCIPAL
    },
    sideBarHeaderIconContainer: {
        height: sdh(8),
        width: sdw(15),
        backgroundColor: TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centralLogoHeaderIconContainer: {
        height: sdh(8),
        width: sdw(70),
        backgroundColor: TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    anotherIconHeaderIconContainer: {
        height: sdh(8),
        width: sdw(15),
        backgroundColor: TRANSPARENT
    },
    logoCentralHeaderSize: {
        height: sdh(18),
        width: sdw(45),
        backgroundColor: TRANSPARENT
    },
    sideBarHeaderIconSize: {
        height: sdh(5),
        width: sdh(5),
        backgroundColor: TRANSPARENT,
        tintColor: PURE_WHITE
    },
    sideBarBackHeaderIconSize: {
        height: sdh(3),
        width: sdh(3),
        backgroundColor: TRANSPARENT,
        tintColor: PURE_WHITE
    }
}