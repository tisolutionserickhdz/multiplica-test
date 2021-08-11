/**
 * @description Componente para modificar color y comportamiento de la barra de estado/notificaciones
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
 import React from 'react';
 import { View, StatusBar } from 'react-native';
 import StatusBarStyles from '../styles/StatusBarStyle';
 import PropTypes from 'prop-types';
 
 /**
  * @description Constante principal de StatusBarComponent
  * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
  * @version 1.0 - 08/08/2021
  */
 const StatusBarComponent = ({ backgroundColor, hidden, ...props }) => (
     <View style={[StatusBarStyles.statusBarHeight, { backgroundColor }]}>
         <StatusBar
             barStyle={props.statusBarFontStyle}
             translucent
             backgroundColor={backgroundColor}
             hidden={hidden}
             {...props}
         />
     </View>
 );
 
 // ESPECIFICACION DE PROPIEDADES DEL COMPONENTE
 StatusBarComponent.propTypes = {
     backgroundColor: PropTypes.any,
     statusBarFontStyle: PropTypes.string,
     hidden: PropTypes.bool
 };
 
 // SE EXPORTA CONSTANTE DE ARCHIVO
 export default StatusBarComponent;