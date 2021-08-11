/**
 * @description Componente de indicador para tiempo de carga entre pantallas y componentes
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
 import React from 'react';
 import { View } from 'react-native';
 import GeneralStyles from '../styles/GeneralStyles';
 import { NineCubesLoader } from 'react-native-indicator';
 import { BLUE_TEXT } from '../utilities/GlobalConstantsUtilities';
 
 /**
  * @description Constante principal de LoaderIndicatorComponent
  * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
  * @version 1.0 - 08/08/2021
  * @return {*} Renderiza componentes
  */
 const LoaderIndicatorComponent = () => {
 
     // SE RENDERIZAN ELEMENTOS VISUALES
     return (
         <View style={GeneralStyles.indicatorContainer}>
             <NineCubesLoader
                 color={BLUE_TEXT}
                 size={50} />
         </View>
     );
 }
 
 // SE EXPORTA CONSTANTE DE ARCHIVO
 export default LoaderIndicatorComponent;
 