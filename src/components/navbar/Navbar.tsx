import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import useTypeNavigation from '../../hooks/useTypeNavigation';

const Navbar = () => {
  const navigation = useTypeNavigation();
  return (
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
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="home-outline" size={18} color="#000000" />
          <Text
            style={{
              fontFamily: 'Familjen Grotesk',
              fontSize: 12,
              color: '#000000',
            }}>
            Home
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Reports')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon1 name="handshake-outline" size={18} color="#000000" />
          <Text
            style={{
              fontFamily: 'Familjen Grotesk',
              fontSize: 12,
              color: '#000000',
            }}>
            Reports
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('MissingReport')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon2 name="pluscircleo" size={18} color="#000000" />
          <Text
            style={{
              fontFamily: 'Familjen Grotesk',
              fontSize: 12,
              color: '#000000',
            }}>
            Upload
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Edit')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon3 name="dots-three-horizontal" size={18} color="#000000" />
          <Text
            style={{
              fontFamily: 'Familjen Grotesk',
              fontSize: 12,
              color: '#000000',
            }}>
            Profile
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;
