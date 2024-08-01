import {ScrollView, Text, View} from 'react-native';
import useReports from '../../hooks/reports/useReports';
import {TopBar, Navbar, MissingReport} from '../../components';

const Reports = () => {
  const {reports} = useReports();
  return (
    <>
      <ScrollView style={{marginHorizontal: 20}}>
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
        {reports.length === 0 ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>No Reports yet</Text>
          </View>
        ) : (
          reports?.map(report => (
            <MissingReport
              key={report.id}
              name={report.name}
              reportedBy={report.reportedBy}
              location={report.location}
              description={report.description}
              email={report.senderEmail}
              photo={report.photo}
            />
          ))
        )}
      </ScrollView>
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
