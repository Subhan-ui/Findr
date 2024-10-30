import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

import styles from './HomeStyles';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import useGetReports from './useHome';
import {Logo, Card, Navbar, SearchInput} from '../../components';
import {colors} from '../../constants/colors/colors';
import { homeslider } from '../../constants/images';

const Home = () => {
  const navigation = useTypeNavigation();
  const {data} = useGetReports();
  return (
    <View >
      <ScrollView style={{marginBottom: 91}}>
      <View style={styles.logoWrap}>
        <Logo color={colors.blue} />
      </View>
      <SearchInput marginHorizontal={45} />
      <View style={styles.imageWrap}>
        <Image
          source={homeslider}
        />
      </View>
      <View style={styles.barWrap}>
        <Text style={styles.heading}>Featured Profiles</Text>
        <Text
          onPress={() => data?.length !== 0 && navigation.navigate('Profile')}
          style={styles.headingUnderline}>
          See More
        </Text>
      </View>
      <SafeAreaView>
        <ScrollView horizontal={true} style={styles.ScrollHorizon}>
          {data?.length === 0 ? (
            <View style={styles.noPerson}>
              <Text style={styles.noPersonText}>NO Missing Person yet</Text>
            </View>
          ) : (
            data?.map(da => (
              <Card
                postDate={da?.postDate}
                key={da?.postDate}
                name={da?.name}
                age={da?.age}
                location={da?.location}
                lastSeen={da?.lastSeen}
                gender={da?.gender}
                photo={da?.photo}
                email={da?.email}
              />
            ))
          )}
        </ScrollView>
      </SafeAreaView>
      </ScrollView>
      <View style={{position:'absolute', bottom: 0, zIndex: 5000, backgroundColor: 'white', left:0, right: 0, height: 89, }}>
      <Navbar />
      </View>
    </View>
  );
};


export default Home;
