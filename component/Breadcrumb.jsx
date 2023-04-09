import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const handlePress = itemId => {
  const item = items.find(dataItem => dataItem.id === itemId);
  if (item) {
    setSelectedItem(item.title);
  }
};
const Breadcrumb = ({navigation, items}) => {
  const [seletedItem, setSelectedItem] = useState('');

  const title = items.map(item => item.title);
  console.log(`This is navigation ${title} `);
  return (
    <View style={styles.breadcrumb}>
      <Text style={styles.breadcrumbItem}>Home `{'>'}`</Text>
      {items.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(item.id)}>
          <Text style={styles.breadcrumbItem}>
            {item.title}
            {index !== items.length - 1 ? ' > ' : ''}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  breadcrumbItem: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default Breadcrumb;
