/**
 * @description Hoja de estilos de barra de estado/notificaciones
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import {
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native';
import {
    responsiveHeight as h,
} from 'react-native-responsive-dimensions';


const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? h(5) : StatusBar.currentHeight;

export default StyleSheet.create({

    statusBarHeight: {
        height: STATUSBAR_HEIGHT
    }
});
