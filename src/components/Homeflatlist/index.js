import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, ImageBackground} from 'react-native';
import {COLORS} from '../../theme/Colors/Colors';
import {Rating} from 'react-native-ratings';
const Homeflatlist = ({data}) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = newRating => {
    setRating(newRating);
  };
  const renderItem = ({item}) => (
    <View>
      <ImageBackground
        source={item.imageSource}
        style={styles.itemContainer}
        imageStyle={styles.itemBackground}></ImageBackground>
      <Text style={styles.sponsoredText}>{item.sponsored}</Text>
      <Text>{item.title}</Text>
      <Text>{item.salesText}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>{rating}</Text>
        <Rating
          ratingCount={3}
          imageSize={10}
          onFinishRating={handleRatingChange}
          style={{paddingVertical: 10}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.discountText}>{item.discountText}</Text>
        <Text style={styles.discountedPrice}>{item.discountedPrice}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  itemContainer: {
    width: 120,
    height: 95,
    marginRight: 13,
  },
  itemBackground: {
    resizeMode: 'cover',
  },
  itemTextContainer: {
    backgroundColor: 'background: rgba(114, 60, 184, 0.9)',
    width: '100%',
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.white,
    alignSelf: 'center',
  },
  discountText: {
    textDecorationLine: 'line-through',
  },
  sponsoredText:{
  }
});

export default Homeflatlist;
