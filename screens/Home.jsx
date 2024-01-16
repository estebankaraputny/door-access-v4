import React from "react";
import { View, Text } from "react-native";
import RegistroAccesos from "./RegistroAccesos";
import ListaDeUsers from "./ListaDeUsers";
import Boton from "../components/button"


export default Home = ({ navigation }) => {
    return (
        <>
        <Boton
          textButton="Ir a registros"
          accion={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate('Registro');
          }}
        />
        <Boton
          textButton="Ir a la lista de usuarios"
          accion={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate('Usuarios');
          }}
        />
        </>
    );
  }