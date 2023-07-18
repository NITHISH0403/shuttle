import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import logo from '../Images/shuttle.png';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'white',
    },
    logo: {
        width: 100,
        height: 100,
    }
})
export default IntroScreen;