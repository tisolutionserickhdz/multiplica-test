/**
 * @description Clase principal de App que invoca las navegaciones y deriva todo el flujo
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */
import React,
{
  useState,
  useEffect,
  useMemo,
  useReducer
} from 'react';
import {
  View,
  LogBox
} from 'react-native';
import GeneralStyles from './src/mx/multiplica/multiplica_app/styles/GeneralStyles';
import { AuthContext } from './src/mx/multiplica/multiplica_app/components/GlobalContextComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const [tokenStored, setTokenStored] = useState('');

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

  // INICIALIZACION DE ESTADO DE VALORES PARA CONTEXT
  const initialLoginState = {
    userId: null,
    userToken: null,
    userEmail: null,
    userPassword: null
  }

  // REDUCER PARA MANEJAR ACTIVACION DE ESTADO DEPENDIENDO VALORES PREDETERMINADOS
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token
        };
      case 'LOGIN':
        return {
          ...prevState,
          userId: action.id,
          userToken: action.token,
          userName: action.email,
          userPassword: action.password
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userId: null,
          userToken: null
        };
      case 'REGISTER':
        return {
          ...prevState,
          userId: action.id,
          userToken: action.token
        };
    }
  }

  // DECLARACION DE DISPATCHER PARA CAMBIAR VALOR DE ESTADO
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  // CONTEXTO DE INICIO DE SESION, REGISTRO, RECUPERANDO TOKEN O SESION INICIADA
  const authContext = useMemo(() => ({
    signInContext: async (username, userpassword, accesstoken, userid) => {
      setLoadingApp(true);
      setTokenStored(accesstoken);
      console.log('ENTRA A signInContext desde App.js');
      console.log('userid: ', userid);
      console.log('accesstoken: ', accesstoken);
      console.log('username: ', username);
      console.log('userpassword: ', userpassword);
      if (accesstoken != undefined && accesstoken != null) {
        await AsyncStorage.setItem('@userAuthTokenObject', accesstoken).then(() => {
          console.log('GUARDADO DE OBJETO EXITOSO @userAuthTokenObject');
          setLoadingApp(false);
        }).catch(error => {
          console.log('ERROR GUARDANDO OBJETO @userAuthTokenObject: ', error);
        })
      }
      dispatch({ type: 'LOGIN', id: userid, token: accesstoken, email: username, password: userpassword });
    },
    signOutContext: async (accesstoken) => {
      if (accesstoken != null) {
        setTokenStored(accesstoken);
        try {
          // SE ELIMINA TODA LA INFO DE ASYNCSTORAGE
          await AsyncStorage.multiRemove([
            '@userAuthTokenObject',
            '@loginInformationObject'
          ]).then(() => {
            console.log('INFO DE ASYNCSTORAGE ELIMINADA CORRECTAMENTE');
          })
        } catch (error) {
          console.log("ERROR AL ELIMINAR LOS DATOS DEL ASYNCSTORAGE: ", error);
        }

        dispatch({ type: 'LOGOUT', id: null, token: null });
      } else {
        console.log('NO SE RECIBE ACCESS TOKEN');
      }
    }

  }), []);

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
      <AuthContext.Provider value={authContext}>
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
      </AuthContext.Provider>
    );
  }
};

// SE EXPORTA CONSTANTE DE ARCHIVO
export default App;
