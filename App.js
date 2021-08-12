/**
 * @description Clase principal de App que invoca las navegaciones y deriva todo el flujo
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React,
{
  useState,
  useEffect
} from 'react';
import {
  View,
  LogBox
} from 'react-native';
import GeneralStyles from './src/mx/multiplica/multiplica_app/styles/GeneralStyles';
import { NavigationContainer } from '@react-navigation/native';
import LoaderIndicatorComponent from './src/mx/multiplica/multiplica_app/components/LoaderIndicatorComponent';
import UnsignedUserNavigation from './src/mx/multiplica/multiplica_app/navigations/UnsignedUserNavigation';
import DrawerNavigation from './src/mx/multiplica/multiplica_app/navigations/DrawerNavigation';
import { RED_PRINCIPAL } from './src/mx/multiplica/multiplica_app/utilities/GlobalConstantsUtilities';
import StatusBarComponent from './src/mx/multiplica/multiplica_app/components/StatusBarComponent';
import auth from '@react-native-firebase/auth';

// IGNORA ALERTAS ESPECIFICAS
LogBox.ignoreLogs([
  'Warning:',
  'Require cycles are allowed',
  'Require',
  'VirtualizedLists',
  'Task orphaned',
  'Sending',
  'Found screens'
]);

/**
 * @description Constante principal de archivo App
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 * @return {*} Renderiza componentes
 */
const App = () => {

  // HOOKS
  const [loadingApp, setLoadingApp] = useState(true);

  // ESTABLECE UN ESTADO DE INICIALIZACIÓN MIENTRAS FIREBASE SE CONECTA
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  /**
   * @description Funcion que se ejecuta existe un cambio en la autenticacion de firebase
   * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
   * @version 1.0 - 08/08/2021
   */
  async function onAuthStateChanged(usuario) {
    setUser(usuario);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoadingApp(false);
    }, 3000);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (loadingApp) {
    return (
      <View style={GeneralStyles.mainContainer}>
        <LoaderIndicatorComponent />
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <StatusBarComponent
          backgroundColor={RED_PRINCIPAL}
          translucent={true}
          statusBarFontStyle={'light-content'}
          hidden={false}
        />
        {
          user ?
            <DrawerNavigation />
            :
            <UnsignedUserNavigation />
        }
      </NavigationContainer>
    );
  }
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default App;
