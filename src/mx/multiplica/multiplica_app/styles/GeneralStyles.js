/**
 * @description Hoja de estilos generales
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */

// SCREEN DIMENSIONS
import {
    responsiveScreenWidth as sdw,
    responsiveScreenHeight as sdh,
    responsiveScreenFontSize as sdfz
} from "react-native-responsive-dimensions";

import {
    PURE_WHITE,
    TRANSPARENT,
    GREY_BUTTONS,
    GREY_TEXT
} from "../utilities/GlobalConstantsUtilities";

export default {
    mainContainer: {
        flex: 1,
        backgroundColor: PURE_WHITE
    },
    indicatorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // SIDEBAR MENU LATERAL
    sideBarMainContainer: {
        flex: 1,
        backgroundColor: TRANSPARENT
    },
    sideBarUserInfoContainer: {
        flex: 1.5,
        backgroundColor: TRANSPARENT,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: GREY_BUTTONS
    },
    sideBarSectionsContainer: {
        flex: 8,
        backgroundColor: PURE_WHITE
    },
    avatarUser: {
        width: sdw(12),
        height: sdw(12),
        backgroundColor: GREY_TEXT,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        fontSize: sdfz(2.8),
        color: PURE_WHITE
    },
    sideBarUserNameContainer: {
        width: sdw(42),
        height: sdh(8),
        backgroundColor: TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    userNameText: {
        fontSize: sdfz(1.8)
    },
    sideBarCloseButton: {
        width: sdw(4),
        height: sdh(4),
        backgroundColor: TRANSPARENT
    },
    sideBarSection: {
        width: 'auto',
        height: sdh(7),
        backgroundColor: PURE_WHITE,
        borderBottomWidth: 1,
        borderColor: GREY_BUTTONS,
        paddingHorizontal: sdw(3.5),
        justifyContent: 'center'
    },
    sectionText: {
        fontSize: sdfz(2)
    },
    logOutText: {
        fontSize: sdfz(2),
        textAlign: 'right'
    },
};