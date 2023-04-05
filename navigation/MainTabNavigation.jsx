import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#CC9366"
      inactiveColor="#FFFfff"
      barStyle={{ backgroundColor: '#0B0B0B', padding:5, shadowRadius: 20}}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ice-cream" color={"#CC9366"} size={30} />
          ),
          tabBarColor: "#ffffff",
          
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cards-heart-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={30} />
          ),
          tabBarBadge: 3
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MainTabNavigator;