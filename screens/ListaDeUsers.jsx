import React from "react";
// import { View, Text } from "react-native";
import Home from "./Home";
import RegistroAccesos from "./RegistroAccesos"

// React Navigation 
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import { View } from "react-native";


const Drawer = createDrawerNavigator();

export default ListaDeUsers = () =>  {
    return(<> 
        <View>
            <Text>Lista de usuarios</Text>
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