import React,{useState} from 'react'
import {View, Text, Button,ImageBackground, StyleSheet, Image, SafeAreaView, FlatList, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { TextInput } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet';
const DATA = [
    {
        id: '1',
        title: 'Iced Drinks',
        img: require('../assets/ContentImage/Baked-Goods.png'),
        content: 'Iced Coffees , Teas , Espresso and more',
        categories: ['Iced Latte','Iced Mocha','Cold Brew','Lemonade']
    },
    {
        id: '2',
        title: 'Hot Coffee Drinks',
        img: require('../assets/ContentImage/brew-coffee.png'),
        content: 'Coffees , Teas , Espresso , Lattes and more',
        categories: ['Americano','Espresso','Red Eye','Black Eye']
    },
    {
        id: '3',
        title: 'Hot Teas',
        img: require('../assets/ContentImage/Hot-Coffee-Drinks.png'),
        content: 'Ginger Tea , Peppermint Tea , Sage Tea and more',
        categories: ['Black Tea','Green Tea','Purple Tea']
    },
    {
        id: '4',
        title: 'Iced Latte',
        img: require('../assets/ContentImage/Iced-Drinks.png'),
        content: 'Ginger Tea , Peppermint Tea , Espresso and more',
        categories: ['Hazelnut Latte','Bianco Latte','Iced Cinnamon']
    },
    {
        id: '5',
        title: 'Iced Mocha',
        img: require('../assets/ContentImage/Iced-Latte.png'),
        content: 'Ginger Tea , Teas , Iced Coffees and more',
        categories: ['milk','chocolate']
    },
    {
        id: '6',
        title: 'Lemonade',
        img: require('../assets/ContentImage/Teas.png'),
        content: 'Iced Coffees , Teas , Espresso and more',
        categories: [ 'lemon' , 'water', 'sugar']
    },
    {
        id: '7',
        title: 'kabab',
        img: require('../assets/ContentImage/Baked-Goods.png'),
        content: 'Iced Coffees , Teas , Espresso and more',
        categories: ['Kalmi Kabab','Paneer Kabab','Reshmi Kabab']
    },
  ];

const Separator = () => <View style={styles.separator} />;

const Item = ({id, title, img, content, navigation}) => (
<> 
<TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
    <View style={styles.item}>
            <Image style = {styles.img} source={img}/>    
        <View style={{paddingLeft: 24}}>
            <Text style={styles.title}>{title}</Text>
            <View style = {styles.contentWrapper}>
                <Text style={styles.subtitle}>{content}</Text> 
            </View>
        </View>
    </View>
</TouchableOpacity>  
</>
);



const HomeScreen = ({navigation}) => {
    const [activeMenu,setActiveMenu] = useState('menu');
    const [isSearchVisible,setIsSearchVisible] = useState(false)

    const handleMenuPress = (menu) => {
        setActiveMenu(menu)
    }

    const handleSearchPress = () => {
        setIsSearchVisible(true);
      };
    
    
    
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.sectionBgImage} source={require('../assets/headerImage.png')}>
            <View>
                <Text style={{color: '#ffffff',paddingLeft: 24, paddingTop: 54, fontWeight: '200' }}>My Rewards</Text>
                <Text style={{padding: 10, color: '#1E2946', backgroundColor: '#ffffff',height: 40, width: 60,marginLeft: 35,borderRadius: 10}}>$2.00</Text>
            </View>
            <View>
                <Text style={{color: '#ffffff',paddingLeft: 24, paddingTop: 54, fontWeight: '200' }}>Pickup </Text>
                <Text style={{padding: 10, color: '#1E2946', backgroundColor: '#ffffff',height: 40, width: 120,marginLeft: 35,borderRadius: 10}}>Select -</Text>
            </View>    
        </ImageBackground>
        <View style={styles.itemBg}>
            <View style = {{flexDirection: 'row', padding: 5, justifyContent: 'space-around'}}>
                <TouchableOpacity onPress={()=>handleMenuPress('menu')}>
                    <Text style={{color: activeMenu === 'menu'?"#FF8400":'#ccc',
                    textDecorationLine: activeMenu === 'menu'? "underline":"none",
                    textDecorationColor: activeMenu === 'menu'?"#FF8400":"#161616"
                }}>Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleMenuPress('favourite')}>
                    <Text style={{color: activeMenu === 'favourite'?"#FF8400":'#ccc',
                    textDecorationLine: activeMenu === 'favourite'? "underline":"none",
                    textDecorationColor: activeMenu === 'favourite'?"#FF8400":"#161616"
                }}>Favourite</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleMenuPress('prevous')}>
                    <Text style={{color: activeMenu === 'prevous'?"#FF8400":'#ccc',
                    textDecorationLine: activeMenu === 'prevous'? "underline":"none",
                    textDecorationColor: activeMenu === 'prevous'?"#FF8400":"#161616"
                }}>Prevous</Text>
                </TouchableOpacity>
                {
                    isSearchVisible ? (
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <TextInput
                    style={{backgroundColor: '#fff'}}
                    placeholder='search'
                    onChangeText = { (text) => console.log(text)}
                    />
                    </KeyboardAvoidingView>
                    ):(
                    <TouchableOpacity onPress={handleSearchPress}>
                    <Icon name="search" size={26} color="#ffffff" />
                    </TouchableOpacity>
                    )
                }   
             </View>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} img={item.img} content={item.content} navigation={navigation}/>}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={Separator}
            />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    homeScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionBgImage: {
        flex: 1,
        width: '100%',
        height: '120%',
        flexDirection: 'row',
        justifyContent: 'space-around'
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
    title:{
        fontSize:24,
        color: '#ffffff'
    },
    contentWrapper:{
        flexGrow: 1, 
        flexDirection: "row"
    },
    subtitle:{
        color: '#A19E9F',
        flex: 1
    },
    img:{
        width: 100,
        height: 100, 
        borderRadius: 100 / 2 
    },
    item:{
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    separator: {
        height: 1,
        backgroundColor: '#6B6A6A',
      }
  })
  export default HomeScreen;