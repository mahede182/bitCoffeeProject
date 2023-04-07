import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet';
import DATA from '../utils/DATA';

// all component import here
import Item from '../component/Item';
import MidddleMenu from '../component/MidddleMenu';
import Separator from '../component/Separator';

const HomeScreen = ({navigation}) => {
  const [activeMenu, setActiveMenu] = useState('menu');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleMenuPress = menu => {
    setActiveMenu(menu);
  };

  const handleSearchPress = () => {
    setIsSearchVisible(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.sectionBgImage}
        source={require('../assets/headerImage.png')}>
        <View>
          <Text style={styles.headerLeftTextTitle}>My Rewards</Text>
          <Text style={styles.headerRightTextTitle}>$2.00</Text>
        </View>
        <View>
          <Text style={styles.headerLeftTextTitle}>Pickup </Text>
          <Text style={styles.headerRightTextTitle}>Select -</Text>
        </View>
      </ImageBackground>
      <View style={styles.itemBg}>
        <View style={styles.middleMenuWrapper}>
          {/* refactor and implementation reusable component */}
          <MidddleMenu
            menuName="menu"
            handleMenuPress={handleMenuPress}
            activeMenu={activeMenu}
          />
          <MidddleMenu
            menuName="favourite"
            handleMenuPress={handleMenuPress}
            activeMenu={activeMenu}
          />
          <MidddleMenu
            menuName="prevous"
            handleMenuPress={handleMenuPress}
            activeMenu={activeMenu}
          />
          {isSearchVisible ? (
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <TextInput
                style={{backgroundColor: '#fff'}}
                placeholder="search"
                onChangeText={text => console.log(text)}
              />
            </KeyboardAvoidingView>
          ) : (
            <TouchableOpacity onPress={handleSearchPress}>
              <Icon name="search" size={26} color="#ffffff" />
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item
              title={item.title}
              img={item.img}
              content={item.content}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionBgImage: {
    flex: 1,
    width: '100%',
    height: '120%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemBg: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161616',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
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
  // for middle menu
  middleMenuWrapper: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',
  },
});
export default HomeScreen;
