import {ScrollView, View} from 'react-native';
import TopBar from '../../components/topBar/TopBar';
import SearchInput from '../../components/ui/searchInput/SearchInput';
import Filter from '../../components/filter/Filter';
import ProfileCard from '../../components/profileCard/ProfileCard';
import Navbar from '../../components/navbar/Navbar';
import {useState} from 'react';
import MissingPersonModal from '../../components/missingPersonModal/MissingPersonModal';

const ProfileFlow = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(prev => !prev);
  };
  return (
    <View>
      <MissingPersonModal
        modalVisible={modalVisible}
        handleModal={handleModal}
      />
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
      <Filter />
      <ScrollView style={{height: '62%'}}>
        <ProfileCard handleModal={handleModal} />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default ProfileFlow;
