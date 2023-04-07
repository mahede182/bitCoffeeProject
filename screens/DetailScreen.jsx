import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import Header from '../component/Header';
import MidddleMenu from '../component/MidddleMenu';
import DATA from '../utils/DATA';
import Separator from '../component/Separator';
import Item from '../component/Item';
const DetailsScreen = ({navigation}) => {
  const handleMenuPress = menu => {
    setActiveMenu(menu);
  };

  const handleSearchPress = () => {
    setIsSearchVisible(true);
  };

  // const { itemId, otherParam } = route.params;
  return (
    <View style={styles.DetailsScreen}>
      <Header />
      <View style={styles.itemBg}>
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
  DetailsScreen: {},
  itemBg: {
    backgroundColor: '#161616',
  },
});
export default DetailsScreen;
