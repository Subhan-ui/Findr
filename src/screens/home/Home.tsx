import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import Logo from '../../components/logo/Logo';
import Card from '../../components/cards/Card';
import Navbar from '../../components/navbar/Navbar';
import SearchInput from '../../components/ui/searchInput/SearchInput';
import useTypeNavigation from '../../hooks/useTypeNavigation';

const Home = () => {
  const navigation = useTypeNavigation();
  return (
    <ScrollView alwaysBounceVertical={true}>
      <View style={{display: 'flex', alignItems: 'center', marginTop: 8}}>
        <Logo color="#5b59fe" />
      </View>
      <SearchInput marginHorizontal={45} />
      <View style={{display: 'flex', alignItems: 'center', marginTop: 43}}>
        <Image source={require('../../assets/icons/images/homeSlider.png')} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 27,
          paddingRight: 9,
        }}>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 23,
            color: 'black',
          }}>
          Featured Profiles
        </Text>
        <Text
          onPress={() => navigation.navigate('Profile')}
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            color: '#0802a3',
            textDecorationLine: 'underline',
          }}>
          See More
        </Text>
      </View>
      <SafeAreaView>
        <ScrollView
          horizontal={true}
          style={{
            marginHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            marginTop: 12,
            height: 304,
          }}>
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </SafeAreaView>
      <Navbar />
    </ScrollView>
  );
};

export default Home;
