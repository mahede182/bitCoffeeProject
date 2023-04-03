import {View, Text, Button, StyleSheet} from 'react-native'
// import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet';

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.homeScreen}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('DetailScreen')}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
  })
  export default HomeScreen;