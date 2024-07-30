import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import NavButton from './NavButton';

const Navbar = () => (
  <View
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 38,
    }}>
    <View
      style={{
        width: 277,
        height: 62,
        borderRadius: 42,
        paddingVertical: 8,
        paddingHorizontal: 26,
        borderWidth: 2,
        marginTop: 17,
        display: 'flex',
        flexDirection: 'row',
        gap: 28,
      }}>
      <NavButton text="Home" navigate="Home">
        <Icon name="home-outline" size={18} color="#000000" />
      </NavButton>

      <NavButton text="Reports" navigate="Reports">
        <Icon1 name="handshake-outline" size={18} color="#000000" />
      </NavButton>

      <NavButton text="Upload" navigate="MissingReport">
        <Icon2 name="pluscircleo" size={18} color="#000000" />
      </NavButton>

      <NavButton text="Profile" navigate="Edit">
        <Icon3 name="dots-three-horizontal" size={18} color="#000000" />
      </NavButton>
    </View>
  </View>
);

export default Navbar;
