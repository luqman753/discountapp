import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './style';
import {COLORS} from '../../theme/Colors/Colors';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/button';
const ConfirmEmail = () => {
  const navigation = useNavigation();
  const handleForget = () => {
    navigation.navigate("Home");
  };
  return (
    <ImageBackground
      source={require('../../../assets/images/authbackground.png')}
      style={styles.imageBackground}
      resizeMode="cover">
      <StatusBar backgroundColor={COLORS.statusbarauth} />
      <View style={styles.tickContainer}>
        <Image
          source={require('../../../assets/images/emails.png')}
          style={styles.imageBackground}
        />
        <Text style={styles.confirmemailText}>Confirm Your Email Address</Text>
      </View>
      <View style={styles.emailcontainer}>
        <Text style={styles.sendConfirm}>We send confirmation email to: </Text>
        <Text style={styles.emailText}>Email@gmail.com</Text>

        <View style={styles.checkemailContainer}>
          <Text style={styles.checkemailtext}>
            Check your email and click on
          </Text>
          <Text style={styles.checkemailtext}>
            the confirmation link to continue.
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.loginContainer} onPress={handleForget}>
        <Button title={'GO TO email'} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ConfirmEmail;
