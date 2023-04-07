import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
const Item = ({id, title, img, content, navigation}) => (
  <>
    <TouchableOpacity onPress={() => navigation.push('DetailScreen')}>
      <View style={styles.item}>
        <Image style={styles.img} source={img} />
        <View style={{paddingLeft: 24}}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.contentWrapper}>
            <Text style={styles.subtitle}>{content}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </>
);
export default Item;

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
    justifyContent: 'flex-start',
  },
});
