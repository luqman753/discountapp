import React from 'react';
import { View, FlatList, StyleSheet, Text, ImageBackground } from 'react-native';
import { COLORS } from '../../theme/Colors/Colors';

const MyComponent = ({data}) => {
 
  const renderItem = ({ item }) => (
    <ImageBackground
      source={item.imageSource}
      style={styles.itemContainer}
      imageStyle={styles.itemBackground}
    >
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    // borderWidth:1,
  },
  itemContainer: {
    width: 120,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:13
  },
  itemBackground: {
    resizeMode: 'cover',
  },
  itemTextContainer: {
    backgroundColor:'background: rgba(114, 60, 184, 0.9)',
    width:"100%",
    height:30,
    borderRadius: 10,
    justifyContent:'center',
  },
  itemText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.white,
    alignSelf:'center',
  },
});

export default MyComponent;
