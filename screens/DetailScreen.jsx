import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import Header from '../component/Header';
import MidddleMenu from '../component/MidddleMenu';
import DATA from '../utils/DATA';
import Separator from '../component/Separator';
import Breadcrumb from '../component/Breadcrumb';
import CategoriesItem from '../component/CategoriesItem';

const DetailsScreen = ({navigation}) => {
  const handleMenuPress = menu => {
    setActiveMenu(menu);
  };

  const handleSearchPress = () => {
    setIsSearchVisible(true);
  };

  const filterData = id => {
    return (items = DATA.filter(data => data.id === id));
  };
  // const { itemId, otherParam } = route.params;
  return (
    <View style={styles.DetailsScreen}>
      <Header />
      <View style={styles.itemBg}>
        <Breadcrumb navigation={navigation} items={DATA} />
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <CategoriesItem
              title={item.title}
              img={item.img}
              content={item.content}
              categories={item.categories}
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
