import React, {useState} from 'react';
import {Text, View, StatusBar, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './style';
import {COLORS} from '../../theme/Colors/Colors';
import Swiper from 'react-native-swiper';
import Categories from '../../components/Categories/index';
import Featured from '../../components/Homeflatlist/index';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Lahore');
  const [items, setItems] = useState([
    {label: 'Lahore', value: 'Lahore'},
    {label: 'Karachi', value: 'Karachi'},
    {label: 'Islaamabad', value: 'Islaamabad'},
    {label: 'R Y K', value: 'R Y K'},
  ]);
  const dataCategories = [
    {
      title: 'Garments',
      imageSource: require('../../../assets/images/garmets.png'),
    },
    {title: 'Shoes', imageSource: require('../../../assets/images/shoes.png')},
    {
      title: 'Resturants',
      imageSource: require('../../../assets/images/resturants.png'),
    },
  ];
  const dataFeatured = [
    {
      sponsored: 'Sponsored ',
      title:"Tommy Hilfiger",
      salesText:"Shirts sale 20% off",
      imageSource: require('../../../assets/images/tommyhil.png'),
      salesText:"Shirts sale 20% off",
      discountText:"$25",
      discountedPrice:"$20",
      discountedPrice:"$20",
    },
    
    {sponsored: 'Sponsored ',
    title:"Toast restaurent",
    salesText:"discount 20%",
    imageSource: require('../../../assets/images/toastresturant.png'),
    salesText:"Discount 20%",
    discountText:"$25",
    discountedPrice:"$20",
  },
    
    {
      sponsored: 'Sponsored ',
      title:"Bata Flash", 
      salesText:"Sale 20% off",
      imageSource: require('../../../assets/images/bataflash.png'),
      salesText:"Sales 20% off",
      discountText:"$25",
      discountedPrice:"$20",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.Headerbackground} />
      <View style={styles.headerContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropdownContainer}
          textStyle={styles.dropdownText}
          dropDownStyle={styles.dropdownMenu}
          containerStyle={styles.dropdownWrapper}
          zIndex={2}
        />
        <Image
          source={require('../../../assets/images/bellicon.png')}
          style={styles.bellicon}
        />
      </View>
      <View style={styles.mainswipercontainer}>
        <Swiper
          style={styles.swiper}
          containerStyle={styles.swiperContainer}
          showsPagination // Enable pagination
          dotStyle={styles.paginationDot} // Style for the dots
          activeDotStyle={styles.activePaginationDot} // Style for the active dot
        >
          <View style={styles.slide}>
            <Image
              source={require('../../../assets/images/springsale.png')}
              style={styles.swiperimage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../../assets/images/springsale2.png')}
              style={styles.swiperimage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../../assets/images/springsale3.png')}
              style={styles.swiperimage}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.flatListContainer}>
        <Text style={styles.categories}>Categories</Text>
        <Categories data={dataCategories} />
      </View>
      <View style={styles.flatListContainer}>
        <Text style={styles.categories}>Featured</Text>
        <Featured data={dataFeatured} />
      </View>
    </View>
  );
};

export default Home;
