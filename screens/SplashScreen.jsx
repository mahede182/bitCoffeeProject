import React from "react";

import { View,Text, ImageBackground, StyleSheet } from "react-native";

const SplashScreen = ({navigation}) => {
    setTimeout(()=>{
        navigation.replace('HomeScreen')
    },2000)
    return(
        <>
            <ImageBackground style={styles.imageContainer} source={require('../assets/Splash.png')}>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    imageContainer :{
        flex: 1
    }
})
export default SplashScreen;