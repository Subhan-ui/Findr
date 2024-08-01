import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import useTypeNavigation from '../../hooks/useTypeNavigation';
import useGetReports from '../../hooks/home/useGetReports';
import {Logo, Card, Navbar, SearchInput,} from '../../components'
import { colors } from '../../constants/colors';

const Home = () => {
  const navigation = useTypeNavigation();
  const {data} = useGetReports();
  return (
    <ScrollView alwaysBounceVertical={true}>
      <View style={{display: 'flex', alignItems: 'center', marginTop: 8}}>
        <Logo color={colors.blue} />
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
          onPress={() => data.length !== 0 && navigation.navigate('Profile')}
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
          {data.length === 0 ? (
            <View
              style={{
                height: 300,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat',
                  fontWeight: '600',
                }}>
                NO Missing Person yet
              </Text>
            </View>
          ) : (
            data?.map(da => (
              <Card
                postDate={da.postDate}
                key={da.id}
                name={da.name}
                age={da.age}
                location={da.location}
                lastSeen={da.lastSeen}
                gender={da.gender}
                photo={da.photo}
                email={da.email}
              />
            ))
          )}
        </ScrollView>
      </SafeAreaView>
      <Navbar />
    </ScrollView>
  );
};

export default Home;
