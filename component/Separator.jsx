import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Separator = () => {
  return <View style={styles.separator} />;
};
const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#6B6A6A',
  },
});

export default Separator;
