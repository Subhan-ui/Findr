import {navTypes} from '../../../types/types';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';

const items: navTypes = [
  {
    id: 1,
    text: 'Home',
    navigate: 'Home',
    child: <Icon name="home-outline" size={18} color="black" />,
  },
  {
    id: 2,
    text: 'Reports',
    navigate: 'Reports',
    child: <Icon1 name="handshake-outline" size={18} color="black" />,
  },
  {
    id: 3,
    text: 'Reports',
    navigate: 'MissingReport',
    child: <Icon2 name="pluscircleo" size={18} color="black" />,
  },
  {
    id: 4,
    text: 'Profile',
    navigate: 'Edit',
    child: <Icon3 name="dots-three-horizontal" size={18} color="black" />,
  },
];

export default items;