import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

const IntroScreen = ({ navigation }) => {
    return (
      <SafeAreaView style = {styles.container}>
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to My App</Text>
            <Text style={styles.subtitle}>Your go-to app for all things...</Text>
        </View>
      </SafeAreaView>
    );
  }
  
  const {height, width} = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
      },

  })
  export default IntroScreen;