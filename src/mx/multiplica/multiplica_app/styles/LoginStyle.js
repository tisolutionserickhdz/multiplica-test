/**
 * @description Hoja de estilos de login
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */

import {
    responsiveScreenHeight as sdh,
    responsiveScreenWidth as sdw,
    responsiveScreenFontSize as sdfz
} from "react-native-responsive-dimensions";
import {
    TRANSPARENT,
    RED_PRINCIPAL,
    PURE_WHITE,
    GENERAL_BORDER_RADIUS,
    BLACK_TEXT
} from "../utilities/GlobalConstantsUtilities";

export default {
    backgroundLinearGradientContainer: {
        height: sdh(25),
        width: sdw(100),
        backgroundColor: TRANSPARENT
    },
    subMainContainer: {
        flex: 1,
        width: sdw(100),
        backgroundColor: PURE_WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        height: sdh(20),
        width: sdw(100),
        backgroundColor: TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoMultiplicaSize: {
        height: sdh(28),
        width: sdw(100),
    },
    actionsContainer: {
        height: sdh(65),
        width: sdw(100),
        backgroundColor: RED_PRINCIPAL,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        borderBottomRightRadius: 70,
        borderBottomLeftRadius: 70
    },
    buttonsContainer: {
        height: sdh(30),
        width: sdw(100),
        backgroundColor: TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        height: sdh(10),
        width: sdw(80),
        backgroundColor: RED_PRINCIPAL,
        borderRadius: GENERAL_BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: sdh(2)
    },
    buttonTextStyle: {
        fontSize: sdfz(2.5),
        color: PURE_WHITE
    },
    versionInfoContainer: {
        height: sdh(20),
        width: sdw(100),
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    versionTextStyle: {
        fontSize: sdfz(1.5),
        color: BLACK_TEXT
    }
};
