import React from "react";
import { View, Text } from "react-native";
import Home from "./Home";
import ListaDeUsers from "./ListaDeUsers"

// React Navigation 
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';


const Drawer = createDrawerNavigator();

export default RegistroAccesos = () =>  {
    return(<> 
        <View>
            <Text>Registro</Text>

        </View>
        {/* <NavigationContainer>  
            <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{ drawerLabel: 'Inicio' }}
            />
            <Drawer.Screen
                name="ResgistroAccesos"
                component={RegistroAccesos}
                options={{ drawerLabel: 'Registro de accesos' }}
            />
            <Drawer.Screen
                name="ListaDeUsers"
                component={ListaDeUsers}
                options={{ drawerLabel: 'Usuarios' }}
            />
            </Drawer.Navigator>
        </NavigationContainer> */}
    </>
    )
}