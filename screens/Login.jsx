import React, { useState } from "react";
import { Image, Text, View, StyleSheet, ScrollView, Alert, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import FondoLogin from "../assets/image/fondoLogin.jpg"
import LogoLogin from "../assets/image/logoCerradura.png"
import { StatusBar } from "expo-status-bar";
import Boton from "../components/button";
import InputLogin from "../components/Input"
import Home from "./Home";
import SingUp from "./SingUp";

// Importaciones de Firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";

// Importaciones React Navigation 
import { useNavigation } from '@react-navigation/native';


export default Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  const ingresarSesion = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("Crear cuenta");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Inicio")
    })
    .catch((error) => {
        console.log(error, "Tipo de error al crear cuenta");
        Alert.alert(error.message, "Error a iniciar sesión, revisa tus datos");
    })
}

  const irASingUp = () => {
    navigation.navigate("Crear cuenta");
  }

  return <>
    <View style={styles.container} initial>
    <StatusBar style="auto" />
      <Image source={FondoLogin} style={[styles.imageFondo, StyleSheet.absoluteFill]} />
      <ScrollView contentContainerStyle={{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <BlurView intensity={90}>
            <View style={styles.contLogin}>
                <Image source={LogoLogin} style={styles.logoCerradura}/>
                <View>
                    <InputLogin nameCampo="Correo electrónico"
                     placeholder="ejemplo@gmail.com"
                     boolInput={false}
                     onChangeText={(text) => setEmail(text)}/>
                    <InputLogin nameCampo="Contraseña"
                     placeholder="Contraseña"
                     boolInput={true}
                     onChangeText={(text) => setPassword(text)}/>
                     <Boton 
                     accion={ingresarSesion} 
                     textButton="Ingresar" />
                     <View style={styles.contCrear}>
                      <Text style={styles.textCrear}>¿No tines una cuenta?</Text>
                      <TouchableOpacity onPress={irASingUp}>
                        <Text style={styles.buttonCrear}>Registrarme</Text>
                      </TouchableOpacity>
                     </View>
                </View>
            </View>
        </BlurView>
      </ScrollView>
    </View>
  </>;
};


const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  imageFondo:{
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  contLogin:{
    width: 350,
    height: 500,
    borderRadius: 15,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  logoCerradura:{
    width: 100,
    height: 100,
    borderRadius: 30
  }, 
  buttonLogin: {
    width: 300,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  contCrear: {
    flexDirection: "row",
    justifyContent: "center", 
    alignItems: "center"
  }, 
  textCrear: {
    color: "#ffffff"
  },
  buttonCrear: {
    color: "#ffffff",
    textDecorationLine: "underline",
    padding: 5
  }
})