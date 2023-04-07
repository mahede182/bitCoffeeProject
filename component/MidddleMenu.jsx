import {TouchableOpacity, Text} from 'react-native';
import React from 'react';

const MidddleMenu = ({menuName, handleMenuPress, activeMenu}) => {
  return (
    <TouchableOpacity onPress={() => handleMenuPress(menuName)}>
      <Text
        style={{
          color: activeMenu === menuName ? '#FF8400' : '#ccc',
          textDecorationLine: activeMenu === menuName ? 'underline' : 'none',
          textDecorationColor: activeMenu === menuName ? '#FF8400' : '#616161',
        }}>
        {menuName}
      </Text>
    </TouchableOpacity>
  );
};

export default MidddleMenu;
