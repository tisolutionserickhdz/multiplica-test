# Multiplica Test App React Native

## Índice de contenido

  - [Requisitos: Tecnologías / IDES / Sistemas Operativos](#requisitos-tecnologías--ides--sistemas-operativos)
  - [Estructura de carpetas del proyecto](#estructura-de-carpetas-del-proyecto)
  - [Despliegue de proyecto en iOS con macOS](#despliegue-de-proyecto-en-ios-con-macos)
  - [FAQ's](#faqs)

## Requisitos: Tecnologías / IDES / Sistemas Operativos

- **Node JS** (versión 14.15.4)
- **npm** (versión 7.11.2)
- **gradlew** (versión 6.2)
- **openjdk** version "1.8.0_275"
- **OpenJDK** Runtime Environment (AdoptOpenJDK)(build 1.8.0_275-b01)
- **OpenJDK** 64-Bit Server VM (AdoptOpenJDK)(build 25.275-b01, mixed mode)
- **Visual Studio Code** (versión: 1.57.1)
- **Xcode** Version 12.5.1 (12E507) ---> Solo para iOS
- **CocoaPods** (versión 1.10.0) ---> Solo para iOS
- **Android Studio** 4.1.1
Build #AI-201.8743.12.41.6953283, built on November 4, 2020
Runtime version: 1.8.0_242-release-1644-b3-6915495 x86_64
VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o
- **Sistema operativo en Laptop:** Windows 8.1 en adelante, en cualquiera de sus versiones
- **Sistema operativo en MacBook o Mac:** macOS 11.4 macOS Big Sur
- Variables de entorno:
	- Nombre de la variable --> **ANDROID_HOME**
	    - [**Windows**] Ruta donde se instaló el SDK de Android es la siguiente:
			C:\\Users\\**Usuario**\\AppData\\Local\\Android\\Sdk 
	    - [**macOS**] Ruta donde se instaló el SDK de Android es la siguiente: 
	 		/Users/<colocar aquí nombre de usuario de la Mac>/Library/Android/sdk
    - Nombre de la variable --> **JAVA_HOME**
	    - [**Windows**] Ruta donde se instaló el JDK de Java es la siguiente:
			C:\\Program Files\\Java\\jdk[versión] 
	    - [**macOS**] Ruta donde se instaló el SDK de Android es la siguiente: 
	 		\Library\Java\Home\bin\java
    - Nombre de la variable --> **JRE_HOME**
	    - [**Windows**] Ruta donde se instaló el JDK de Java es la siguiente:
			C:\\Program Files\\Java\\jre[versión] 
	    - [**macOS**] Ruta donde se instaló el SDK de Android es la siguiente: 
	 		\Library\Java\Home\bin\java
    - Nombre de la variable --> **ANDROID_SDK_ROOT**
        - [**macOS**] Ruta donde se instaló el SDK de Android es la siguiente: 
            /Users/<colocar aquí nombre de usuario de la Mac>/Library/Android/sdk
    - Nombre de la variable --> **ANDROID_AVD_HOME**
        - [**macOS**] Ruta donde se instaló el SDK de Android es la siguiente: 
            /Users/<colocar aquí nombre de usuario de la Mac>/.android/avd

## Estructura de carpetas del proyecto

- src
	-	mx
		-	multiplica
            -	multiplica_app
                -	**components** (Componentes funcionales)
                -	**navigations** (Controlan las navegaciones entre pantallas y componentes, así como barras de navevación)
                -	**resources** (Recursos multimedia y fuentes de letra)
                -   **screens** (Pantallas / Vistas)
                -   **services** (Clases de mutations y queries de Servicios con GraphQL en caso de requerirse)
                -   **styles** (Estilos de elementos visuales dentro de cada pantalla o componente)
                -	**utilities** (Constantes, valores, propiedades que serán utilizados en cualquier parte del código fuente)
		
## Despliegue de proyecto en iOS con macOS

- Es requerido contar con un emulador o bien un dispositivo físico listo para el despliegue. [Consultar el siguiente enlace: [https://reactnative.dev/docs/running-on-device](https://reactnative.dev/docs/running-on-device)]
- Luego de contar con un emulador o dispositivo físico listo, ejecutar en el siguiente orden los comandos en una terminal BASH:
    - NOTA: Antes de desplegar el proyecto, es necesario realizar las siguientes acciones:
        - Abrir proyecto en finder en la ruta /multiplica-test/ios/
        - Abrir el archivo "multiplicatesterick.xcworkspace" con doble clic
        - Una vez abierto Xcode, dirigirse a la pestaña superior /Product/Scheme/Edit Scheme/ y desmarcar la casilla "Debug executable"
        - Ejecutar el siguiente comando para establecer Xcode como aplicación reconocida en la Mac: **sudo xcode-select --switch /Applications/Xcode.app**
        - Continuar con los siguientes pasos:
    - OPCIÓN 1 (Corriendo en emulador iOS):
        - 1. npm install
        - 2. cd ios/
        - 3. pod install
        - 4. cd ..
        - 5. react-native run-ios

## FAQ's

- En caso de tener problemas al ejecutar el comando: **pod install**
    - Posicionarse en la carpeta '/ios' ejecutar el comando: **pod install --repo-update**

- En caso de tener el siguiente problema:  [ CoreSimulator detected version change.  Framework version (704.12.2) does not match existing job version (704.12.1).  Attempting to remove the stale service in order to add the expected version. ] al ejecutar el comando: **react-native run-ios** 
    - En la terminal, posicionarse en la carpeta '/multiplica-test' y ejecutar el siguiente comando: **launchctl remove com.apple.CoreSimulator.CoreSimulatorService || true**