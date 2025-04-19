import React from 'react';
import { ImageBackground, StyleSheet} from 'react-native-web';

function WelcomeScreen(props) {
    return (
        <ImageBackground> source={require('../assets/icon.png')}</ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundColor: "#ff8ad8",
    width: '50%',
    height: '30%',
    justifySelf: "center",
    alignSelf: "center",
    flexWrap: "wrap",
    top: 20
})

export default WelcomeScreen;