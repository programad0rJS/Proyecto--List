import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Share, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function Galeria() {

  const [selectedImage, setSelectedImage] = useState(null);




  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('¡Se requiere permiso para acceder al carrete de la cámara! ');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ coke: pickerResult.uri })

  };




  return (
    <ScrollView>
      <Text style={styles.posicion}> Suban Un Imagen </Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={openImagePickerAsync}>
          <Image source={{ uri: selectedImage !== null ? selectedImage.coke : 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.instructions}>
         Haga Clic En El Imagen  

        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  posicion: {
    paddingTop: 25,
    paddingLeft: 25
  },
  container: {
    paddingTop: 22,
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },


});
