import { StyleSheet } from "react-native";
import {COLORS} from '../../theme/Colors/Colors'
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '20%',
    },
    otpInput: {
      width: 50,
      height: 50,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'gray',
      marginHorizontal: 5,
      fontSize: 20,
      textAlign: 'center',
      backgroundColor: '#ffffff',
    },
    infoText: {
      marginTop: 20,
      textAlign: 'center',
      color: 'white',
    },
    loginContainer: {
      borderRadius: 24,
      marginTop: '15%',
      width: 201,
      height: 47,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    loginContainerText: {
      color: 'white',
      fontSize: 16,
      lineHeight: 19,
      fontWeight: '700',
    },
    loginText: {
      marginTop: 50,
      marginLeft: '10%',
    },
    welcome: {
      color: COLORS.white,
      fontSize: 28,
      fontWeight: '700',
    },
    loginAccount: {
      color: COLORS.white,
      fontSize: 17,
      fontWeight: '600',
      letterSpacing: 1,
    },
    
  
  });
  export default styles;