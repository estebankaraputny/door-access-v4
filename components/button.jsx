import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";


export default Boton = ( {accion, textButton} ) => {
    return (
        <>
            <TouchableOpacity  style={styles.buttonLogin} onPress={accion}> 
              <Text style={styles.textButtonLogin}>{textButton}</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity  style={styles.buttonRegistration} onPress={crear}> 
              <Text style={styles.textButtonRegistration}>Registrarme</Text>
            </TouchableOpacity> */}
        </>
    )
}

const styles = StyleSheet.create({ 
  buttonLogin: {
    width: 300,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#26826870"
  },
  textButtonLogin: {
    fontSize: 22,
    fontWeight: "400",
    color: "#fff"
    },
//   buttonRegistration: {
//     width: 300,
//     height: 40,
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 10,
//     backgroundColor: "#feaffa"
//   },
//   textButtonRegistration: {
//     fontSize: 20,
//     fontWeight: "400",
//     color: "#fff"
//   },
})