import {View, Text, Button,ImageBackground, StyleSheet, Image, SafeAreaView, FlatList} from 'react-native'
// import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet';
const DATA = [
    {
        id: '1',
        title: 'Iced Drinks',
        img: require('../assets/ContentImage/Baked-Goods.png'),
        content: ['Iced Coffees','Teas','Espresso']
    },
    {
        id: '2',
        title: 'Hot Coffee Drinks',
        img: require('../assets/ContentImage/brew-coffee.png'),
        content: ['Coffees','Teas','Espresso','Lattes']
    },
    {
        id: '3',
        title: 'Hot Teas',
        img: require('../assets/ContentImage/Hot-Coffee-Drinks.png'),
        content: ['Ginger Tea','Peppermint Tea','Sage Tea']
    },
    {
        id: '4',
        title: 'Iced Latte',
        img: require('../assets/ContentImage/Iced-Drinks.png'),
        content: ['Ginger Tea','Peppermint Tea',' Espresso']
    },
    {
        id: '5',
        title: 'Iced Mocha',
        img: require('../assets/ContentImage/Iced-Latte.png'),
        content: ['Ginger Tea','Teas','Iced Coffees']
    },
    {
        id: '6',
        title: 'Lemonade',
        img: require('../assets/ContentImage/Teas.png'),
        content: ['Iced Coffees','Teas','Espresso']
    },
    {
        id: '7',
        title: 'kabab',
        img: require('../assets/ContentImage/Baked-Goods.png'),
        content: ['Iced Coffees','Teas','Espresso']
    },
  ];

const Item = ({id, title, img, content}) => (
<>
    <View style={styles.item}>
            <Image style = {styles.img} source={img}/>    
        <View style={{paddingLeft: 24}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{content}</Text>
        </View>
    </View>
</>
    
  );

const HomeScreen = ({navigation}) => {
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
        <SafeAreaView style={styles.itemBg}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} img={item.img} content={item.content}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
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
    subtitle:{
        color: '#A19E9F'
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
    }

  })
  export default HomeScreen;