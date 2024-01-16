import React, { useState } from "react";
import { Image, View, StyleSheet, ScrollView, Alert } from "react-native";
import { BlurView } from "expo-blur";
import FondoLogin from "../assets/image/fondoLogin.jpg"
import LogoLogin from "../assets/image/logoCerradura.png"
import { StatusBar } from "expo-status-bar";
import Boton from "../components/button";
import InputLogin from "../components/Input"

// Importaciones de Firebase
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";

// Importaciones React Navigation 
import { useNavigation } from '@react-navigation/native';



export default SingUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const crearCuenta = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("Cuenta creada");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Login");
        
    }).catch((error) => {
        console.log(error, "Este es el error");
        Alert.alert(error.message, "Revisa tu correo o si tu contraseña es mayor a 6 caracteres");
    })
  }

  return <>
    <View style={styles.container}>
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
                     placeholder="Ingrese su correo"
                     boolInput={false}
                     onChangeText={(text) => setEmail(text)}/>
                    <InputLogin nameCampo="Contraseña"
                     placeholder="Ingrese su contraseña"
                     boolInput={true}
                     onChangeText={(text) => setPassword(text)}/>
                     <Boton 
                     accion={crearCuenta} 
                     textButton="Crear Cuenta" />
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
  }
})