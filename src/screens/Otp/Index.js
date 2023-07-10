import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../theme/Colors/Colors';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/button';
import styles from './style'
const Index = ({route}) => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const {changeNavigation} = route.params;
  // console.log(changeNavigation);
  const handleOtpChange = otp => {
    setOtp(otp);
  };

  const handleOtpSubmit = () => {
    // Handle OTP submission logic here
    console.log('OTP submitted:', otp);
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/authbackground.png')}
      style={styles.container}
      resizeMode="cover">
      <StatusBar backgroundColor={COLORS.statusbarauth} />
      <View style={styles.loginText}>
        <Text style={styles.welcome}>OTP</Text>
        <Text style={styles.loginAccount}>Please Enter your OTP</Text>
      </View>
      <OTPTextInput
        containerStyle={styles.otpContainer}
        textInputStyle={styles.otpInput}
        handleTextChange={handleOtpChange}
        inputCount={4}
        keyboardType="numeric"
      />
      <Text style={styles.infoText}>
        Please enter the OTP sent to your mobile number
      </Text>
      <TouchableOpacity
        style={styles.loginContainer}
        onPress={() => navigation.navigate(changeNavigation)}>
        <Button title={'CONTINUE'} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Index;
