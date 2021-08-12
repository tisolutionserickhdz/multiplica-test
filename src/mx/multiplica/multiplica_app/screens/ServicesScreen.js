/**
 * @description Pantalla de Servicios dummy
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
 import React from 'react';
 import {
     View,
     Text
 } from 'react-native';
 import PropTypes from 'prop-types';
 import GeneralStyles from '../styles/GeneralStyles';
 
 /**
  * @description Constante principal de ServicesScreen
  * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
  * @version 1.0 - 08/08/2021
  * @return {*} Renderiza componentes
  */
 const ServicesScreen = ({ navigation }) => {
 
     // CONSTANTES Y HOOKS
    
     // SE RENDERIZAN ELEMENTOS VISUALES
     return (
         <View style={GeneralStyles.mainContainer}>
             <Text>SERVICES SCREEN</Text>
         </View>
     );
 }
 
 // SE ESPECIFICAN LOS VALORES DE LAS PROPS
 ServicesScreen.propTypes = {
     navigation: PropTypes.object
 };
 
 // SE EXPORTA CONSTANTE DE ARCHIVO
 export default ServicesScreen;
 