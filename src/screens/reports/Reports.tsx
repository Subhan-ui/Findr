import {View} from 'react-native';
import TopBar from '../../components/topBar/TopBar';
import Navbar from '../../components/navbar/Navbar';
import MissingReport from '../../components/missingReport/MissingReport';

const Reports = () => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 18,
            gap: 8,
          }}>
          <TopBar text="Reports" />
        </View>
        <MissingReport />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 1,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}>
        <Navbar />
      </View>
    </>
  );
};

export default Reports;
