import { Image, StyleSheet, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Onboardscreen from '../../Screens/automatic_lacation_map/Onboardscreen';
import Driver1 from '../../Screens/automatic_lacation_map/Driver1Notification';
import Inputscreen from '../../Screens/automatic_lacation_map/Inputscreen';
import Loginscreen from '../../Screens/automatic_lacation_map/LoginScreen';
import Registerscreen from '../../Screens/automatic_lacation_map/RegisterScreen';


//we want to declare for stack it contains all loading screens
const Stack=createNativeStackNavigator();

export default function HomeScreen() {
  return (
  <Stack.Navigator initialRouteName='Loginscreen'>
    <Stack.Screen name='Onboard' component={Onboardscreen}/>
    <Stack.Screen name='Loginscreen' component={Loginscreen}/>
    <Stack.Screen name='Registerscreen' component={Registerscreen}/>
    <Stack.Screen name='Driver1' component={Driver1}/>
    <Stack.Screen name='Inputscreen' component={Inputscreen}/>

  </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
