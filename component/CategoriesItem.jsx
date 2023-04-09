import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
const CategoriesItem = ({id, title, img, content, categories, navigation}) => (
  <>
    <TouchableOpacity onPress={() => navigation.push('DetailsScreen')}>
      <View style={styles.item}>
        <View style={{paddingLeft: 24}}>
          <Text style={styles.title}>{categories[0]}</Text>
          <View style={styles.contentWrapper}>
            <Text style={styles.subtitle}>{content}</Text>
          </View>
        </View>
        <Image style={styles.img} source={img} />
      </View>
    </TouchableOpacity>
  </>
);
export default CategoriesItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#ffffff',
  },
  contentWrapper: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  subtitle: {
    color: '#A19E9F',
    flex: 1,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
