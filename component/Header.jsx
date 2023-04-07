import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const screenHeight = Dimensions.get('window').height;
const headerHeight = screenHeight * 0.3;

const Header = () => {
  return (
    <View style={[styles.headerContainer, {height: headerHeight}]}>
      <View>
        <Text style={styles.headerLeftTextTitle}>My Rewards</Text>
        <Text style={styles.headerRightTextTitle}>$2.00</Text>
      </View>
      <View>
        <Text style={styles.headerLeftTextTitle}>Pickup </Text>
        <Text style={styles.headerRightTextTitle}>Select -</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#07746E',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 18,
  },
  headerLeftTextTitle: {
    color: '#ffffff',
    paddingTop: 54,
    fontWeight: '200',
  },
  headerRightTextTitle: {
    padding: 10,
    color: '#1E2946',
    backgroundColor: '#ffffff',
    height: 40,
    width: 80,
    borderRadius: 10,
  },
});
