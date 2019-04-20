- Instalar Android Studio completo (se requiere para configurar el emulator)
- Crear un emulator (va a descargar la imagen del OS >800M)
- Agregar ANDROID_HOME=c:\Users\samuel\AppData\Local\Android\Sdk
- Agregar al PATH c:\Users\samuel\AppData\Local\Android\Sdk\platform-tools
- Con "adb devices" checar si el emulator ya es visible
- Settings/About Emulator Device tap many times Build Number until a promt says "You are now a developer!"
- Settings/System/Advances/Developer options habilitar

npm install -g react-native-cli
react-native init AwesomeProject
cd AwesomeProject
react-native run-android

Si se pone pantalla negra click en power button para reactivar.
Dos 'R' rapidas con foco en el emulador para recargar la app
Ctrl+M es el menu button para habilitar hot reloading

