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
    BLACK_TEXT,
    GREY_TEXT,
    GREY_BUTTONS,
    RED_PRINCIPAL_WITH_OPACITY
} from "../utilities/GlobalConstantsUtilities";

export default {
    // MAIN SCREEN
    logoContainer: {
        height: sdh(20),
        width: sdw(100),
        backgroundColor: TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoMultiplicaSize: {
        height: sdh(20),
        width: sdw(100),
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
        marginTop: sdh(1)
    },
    buttonStyleDisabled: {
        backgroundColor: RED_PRINCIPAL_WITH_OPACITY,
        height: sdh(10),
        width: sdw(80),
        borderRadius: GENERAL_BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: sdh(1)
    },
    buttonTextStyle: {
        fontSize: sdfz(2.5),
        color: PURE_WHITE
    },
    // LOGIN SCREEN
    actionsContainer: {
        flex: 1,
        width: sdw(100),
        backgroundColor: TRANSPARENT,
        paddingHorizontal: sdw(5)
    },
    logoLoginContainer: {
        height: sdh(10),
        width: sdw(80),
        backgroundColor: TRANSPARENT,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoLoginMultiplicaSize: {
        height: sdh(10),
        width: sdw(50),
    },
    loginLabelText: {
        fontSize: sdfz(3),
        fontWeight: 'bold',
        color: GREY_TEXT,
        alignSelf: 'center'
    },
    redDivider: {
        fontSize: sdfz(2),
        fontWeight: 'bold',
        color: RED_PRINCIPAL,
        alignSelf: 'center'
    },
    formContainer: {
        // height: sdh(40),
        width: sdw(90),
        backgroundColor: TRANSPARENT,
        marginTop: sdh(2.5)
    },
    formLabelText: {
        fontSize: sdfz(2),
        fontWeight: '500',
        color: GREY_TEXT
    },
    textInput: {
        width: sdw(90),
        height: sdh(6),
        backgroundColor: GREY_BUTTONS,
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: GREY_TEXT,
        fontSize: sdfz(1.5),
        marginTop: sdh(1),
        marginBottom: sdh(1),
        borderColor: GREY_BUTTONS,
        borderRadius: GENERAL_BORDER_RADIUS,
        borderWidth: 1,
        paddingHorizontal: sdw(2.5)
    },
    centered: {
        alignSelf: 'center'
    },
    alreadyAccountTextStyle: {
        fontSize: sdfz(2),
        fontWeight: '400',
        color: GREY_TEXT,
        marginTop: sdh(2.5),
        alignSelf: 'center'
    },
    goToRegisterTextStyle: {
        fontSize: sdfz(2.2),
        fontWeight: '600',
        color: RED_PRINCIPAL,
        alignSelf: 'center'
    },
    flexGrowOne: {
        flexGrow: 1
    },
    flexOne: {
        flex: 1
    },
};
