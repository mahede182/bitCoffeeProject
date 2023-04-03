import {View, Text, Button, StyleSheet} from 'react-native'

const DetailsScreen = ({navigation })  => {
  // const { itemId, otherParam } = route.params;
    return (
      <View style={styles.DetailsScreen}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('ProfileScreen')}
        />

        {/* passing parameter to routes  */}
      {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}

        <Button style={{padding: 10}} title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
const styles = StyleSheet.create({
    DetailsScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
  export default DetailsScreen;