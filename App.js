import { ReactText } from 'react';
import { StatusBar } from 'expo-status-bar';
// import { } from 'react-native';

// SCREENS 
import Login from './screens/Login';
import Home from './screens/Home';
import SingUp from './screens/SingUp';
import RegistroAccesos from './screens/RegistroAccesos';
import ListaDeUsers from './screens/ListaDeUsers';

// IMPORTACIONES DE REACT NAVIGATIONS 
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


export default function App() {
  return (<>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Iniciar sesión' component={Login} />
          <Stack.Screen name='Crear cuenta' component={SingUp} />
          <Stack.Screen name='Inicio' component={Home} />
          {/* <Stack.Screen name='Registro' component={RegistroAccesos} />
          <Stack.Screen name='Usuarios' component={ListaDeUsers} /> */}
        </Stack.Navigator>
      </NavigationContainer>

      {/* <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Inicio' component={Home} />
          <Drawer.Screen name='Registro' component={RegistroAccesos} />
          <Drawer.Screen name='Usuarios' component={ListaDeUsers} />
        </Drawer.Navigator> */}
  </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
