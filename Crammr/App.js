import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar, Platform, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
export default function App() {
  console.log("app executed");
  const handlePress = () => alert("Text pressed");

  return (cardView())

}

function cardView() {
  return (
    <SafeAreaView style={styles.background}> 
    <View style={styles.topToolbar}>
    </View>
    <ScrollView style={styles.noteCardRegion}>
      <View style={
        styles.noteCard
      }> 
      <Text style={styles.text}>Cardh 1</Text>
      </View>
      <View style={
        styles.noteCard
      }> 
      <Text style={styles.text}>Cardhyc</Text>
      </View>
      <View style={
        styles.noteCard
      }> 
      <Text style={styles.text}>Card 2</Text>
      </View>
      <View style={
        styles.noteCard
      }> 
      <Text style={styles.text}>Card 2</Text>
      </View>
      <View style={
        styles.noteCard
      }> 
      <Text style={styles.text}>Card 2</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
);
}

function CameraComponent() {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  if (!hasPermission) {
    return <Text>No camera permission</Text>;
  }

  if (device == null) {
    return <Text>Loading camera...</Text>;
  }

  return (
    <Camera device={device} isActive={true} style={absoluteFill}
    />
  );

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#dbffd4',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  noteCardRegion: {
    backgroundColor: '#dbffd4',
    flexGrow: 1,
    padding: 20
  },
  noteCard: {
    backgroundColor: "#ffb6c1",
    width: '50%',
    height: '30%',
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 20,
    top: 20,
    columnGap: 20,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    color: 'black'
  },
  topToolbar: {
    backgroundColor: '#126e00',
    height: '10%',
    top: 0
  },

  absoluteFill: {
    height: '100%',
    width: '100%'
  }

});