import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Camera, CameraType } from "expo-camera";

export default function Camara() {
  const [tienepermiso, setTienepermiso] = useState(null);
  const [type, setType] = useState(CameraType.back);



  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setTienepermiso(status === 'granted');
    })();
  }, []);


  if (tienepermiso === false) {
    return <SafeAreaView>No Tienes Permiso </SafeAreaView>
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)}>
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>

        </View>
      </Camera>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
