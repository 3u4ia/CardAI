import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState<'front' | 'back'>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) return <View />;
  if (!permission.granted)
    return (
      <View>
        <Text>No access to camera</Text>
        <Button title="Grant permission" onPress={requestPermission} />
      </View>
    );

  return <CameraView style={{ flex: 1 }} facing={facing} />;
}
