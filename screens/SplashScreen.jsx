import React,{useEffect} from "react";

import { View,Text, ImageBackground, StyleSheet } from "react-native";

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        const timer = setTimeout(()=>{
        navigation.replace('HomeScreen')
    },2000);
    return () => clearTimeout(timer);
    },[navigation])
    
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