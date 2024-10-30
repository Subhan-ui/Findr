import {ScrollView, View} from 'react-native';

import styles from './ProfileFlowStyles';
import useHandleFlow from './useProfileFlow';
import {
  TopBar,
  SearchInput,
  Filter,
  ProfileCard,
  Navbar,
} from '../../components';

const ProfileFlow = () => {
  const {change, dataF} = useHandleFlow();

  return (
    <View style={styles.full}>
      <View style={styles.headerWrap}>
        <TopBar text="All Missing Person" />
      </View>
      <SearchInput marginHorizontal={20} />
      <Filter changeFilter={change} />
      <ScrollView style={styles.scroll}>
        {dataF?.map(data => (
          <ProfileCard
            key={data?.postDate}
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
