import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";


export default InputLogin = ({ nameCampo, placeholder, boolInput, onChangeText }) => {
    return (
        <>
            <View>
              <Text style={styles.labelLogin}>{ nameCampo }</Text>
              <TextInput onChangeText={onChangeText} style={styles.inputLogin} placeholder={placeholder} secureTextEntry={boolInput}/>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
  labelLogin:{
    fontSize: 22,
    fontWeight: "400",
    color: "#fff"
  },
  inputLogin:{
    width: 300,
    height: 40,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    marginBottom: 20
  },
})