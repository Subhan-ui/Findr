import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import EditProfile from '../screens/editProfile/EditProfile';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import Login from '../screens/login/Login';
import MissingReport from '../screens/missingReport/MissingReport';
import ProfileFlow from '../screens/profileFlow/ProfileFlow';
import Registration from '../screens/registration/Registration';
import Reports from '../screens/reports/Reports';
import SpashScreen from '../screens/spashScreen/SpashScreen';
import {navigatorTypes} from '../types/navigatorTypes';

const Navigator = () => {
  const Stack = createNativeStackNavigator<navigatorTypes>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SpashScreen"
          component={SpashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Registration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MissingReport"
          component={MissingReport}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileFlow}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Reports"
          component={Reports}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
