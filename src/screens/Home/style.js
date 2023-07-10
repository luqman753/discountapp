import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../theme/Colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeScreen:{
    flex:1,
  },
  headerContainer: {
    height: '12%',
    borderBottomLeftRadius: 12,
    backgroundColor: COLORS.Headerbackground,
    borderBottomRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 3,
  },
  dropdownContainer: {
    width: '100%',
    height: 40,
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownMenu: {
    width: '40%',
  },
  dropdownWrapper: {
    width: '40%',
    marginLeft:"11%"
  },
  bellicon: {
    height: 20,
    width: 20,
    marginRight: '5%',
    marginTop: '1%',
  },
  mainswipercontainer: {
    marginTop: '5%',
    height: '30%',
    width: '96%',

    alignSelf: 'center',
  },
  swiper: {
    height: '80%',
  },
  swiperContainer: {
    // height:"10%",
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperimage: {
    resizeMode: 'contain',
    height: '70%',
    position:'absolute',
    top:0,
  },
  paginationDot: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activePaginationDot: {
    backgroundColor: COLORS.statusbarauth,
    width: 14,
    height: 14,
    borderRadius: 50,
    // marginHorizontal: 4,
  },
  flatListContainer:{
    // flex:1,
    marginLeft:"2%",
  },
  categories:{
    fontSize:27,
    fontStyle:'normal',
    // marginBottom:"3%",
    fontWeight:'700',
    // lineHeight:27
  }
});

export default styles;
