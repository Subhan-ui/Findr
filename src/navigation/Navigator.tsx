import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {
  Home,
  EditProfile,
  ForgotPassword,
  Login,
  MissingReport,
  ProfileFlow,
  Registration,
  SplashScreen,
  Reports,
} from '../screens';
import {useNavigations} from './useTypeNavigation';

const Navigator = () => {
  const {Stack, user} = useNavigations();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {user ? (
          <>
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
          </>
        ) : (
          <>
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
              name="ForgotPassword"
              component={ForgotPassword}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
