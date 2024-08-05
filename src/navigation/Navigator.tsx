import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigatorTypes} from '../types/types';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import auth from '@react-native-firebase/auth';
import {
  handleChangeEmail,
  handleChangeName,
  handleUser,
  selectUser,
} from '../store/features/loginSlice';
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

const Navigator = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const Stack = createNativeStackNavigator<navigatorTypes>();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(fUser => {
      if (fUser) {
        dispatch(
          handleUser({
            displayName: fUser.displayName,
            email: fUser.email,
            photoURL: fUser.photoURL,
            uid: fUser.uid,
          }),
        );
        dispatch(handleChangeName(fUser.displayName || ''));
        dispatch(handleChangeEmail(fUser.email || ''));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

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
