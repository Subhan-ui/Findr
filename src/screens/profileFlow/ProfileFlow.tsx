import {ScrollView, View} from 'react-native';
import {
  TopBar,
  SearchInput,
  Filter,
  ProfileCard,
  Navbar,
} from '../../components';
import useHandleFlow from '../../hooks/profileFlow/useHandleFlow';

const ProfileFlow = () => {
  const {change, dataF} = useHandleFlow();

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 8,
          alignItems: 'center',
          marginTop: 8,
          marginLeft: 26,
        }}>
        <TopBar text="All Missing Person" />
      </View>
      <SearchInput marginHorizontal={20} />
      <Filter changeFilter={change} />
      <ScrollView style={{height: '62%'}}>
        {dataF?.map(data => (
          <ProfileCard
            key={data?.id}
            postDate={data?.postDate}
            name={data?.name}
            age={data?.age}
            photo={data?.photo}
            location={data?.location}
            lastSeen={data?.lastSeen}
            gender={data?.gender}
            email={data?.email}
          />
        ))}
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default ProfileFlow;
