import {useNavigation, NavigationProp} from '@react-navigation/native';
import {navigatorTypes} from '../types/navigatorTypes';

const useTypeNavigation = () => useNavigation<NavigationProp<navigatorTypes>>();

export default useTypeNavigation;
