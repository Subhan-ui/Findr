import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {navigationLogged, navigationLog} from '../constants/navigations';
import {useNavigations} from './useTypeNavigation';
import SplashScreen from '../screens/splashScreen/SplashScreen';

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
        {user
          ? navigationLogged.map(nav => (
              <Stack.Screen
                key={nav.id}
                name={nav.name}
                component={nav.component}
                options={{headerShown: false}}
              />
            ))
          : navigationLog.map(nav => (
              <Stack.Screen
                key={nav.id}
                name={nav.name}
                component={nav.component}
                options={{headerShown: false}}
              />
            ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
