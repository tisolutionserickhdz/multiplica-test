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
    GREY_TEXT,
    RED_PRINCIPAL,
    BLACK_TEXT,
    GENERAL_BORDER_RADIUS
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
        width: sdw(40),
        height: sdh(8),
        backgroundColor: TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    userNameText: {
        fontSize: sdfz(1.6)
    },
    userEmailText: {
        fontSize: sdfz(1.2)
    },
    sideBarCloseButton: {
        width: sdw(4),
        height: sdh(4),
        backgroundColor: TRANSPARENT,
        tintColor: RED_PRINCIPAL
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
    // PANTALLA DE PRODUCTOS
    productsMainContainer: {
        width: sdw(100),
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: sdh(5)
    },
    welcomeContainer: {
        width: sdw(90),
        backgroundColor: TRANSPARENT,
    },
    productsLabelText: {
        fontSize: sdfz(2.5),
        fontWeight: 'bold',
        color: GREY_TEXT,
        alignSelf: 'center',
        textAlign: 'center'
    },
    productsLabelTextCenteredDescription: {
        fontSize: sdfz(2),
        fontWeight: '500',
        color: GREY_TEXT,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: sdh(2)
    },
    productsLabelTextCenteredEmail: {
        fontSize: sdfz(2),
        fontWeight: 'bold',
        color: RED_PRINCIPAL,
        alignSelf: 'center',
        textAlign: 'center'
    },
    productsContainer: {
        width: sdw(90),
        backgroundColor: TRANSPARENT,
        marginTop: sdh(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    productContainerCard: {
        height: sdw(60),
        width: sdw(60),
        backgroundColor: TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: GENERAL_BORDER_RADIUS,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
        marginHorizontal: sdw(2.5)
    },
    productImageSize: {
        height: sdw(60),
        width: sdw(60),
    },
    overlayImage: {
        height: sdw(60),
        width: sdw(60),
        backgroundColor: 'rgba(0,0,0,0.55)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: GENERAL_BORDER_RADIUS,
        overflow: 'hidden',
        position: 'absolute'
    },
    productTitle: {
        fontSize: sdfz(2.5),
        fontWeight: 'bold',
        color: PURE_WHITE,
        textAlign: 'center'
    },
    productsDescriptionContainer: {
        width: sdw(85),
        height: sdh(15),
        backgroundColor: TRANSPARENT,
        marginTop: sdh(2.5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    productDescription: {
        fontSize: sdfz(2),
        fontWeight: '600',
        color: BLACK_TEXT,
        textAlign: 'center'
    },
    redDivider: {
        fontSize: sdfz(2),
        fontWeight: 'bold',
        color: RED_PRINCIPAL,
        alignSelf: 'center'
    }
};