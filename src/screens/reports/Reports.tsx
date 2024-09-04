import {ScrollView, Text, View} from 'react-native';
import useReports from './useReports';
import {TopBar, Navbar, MissingReport} from '../../components';
import styles from './ReportStyles';

const Reports = () => {
  const {reports} = useReports();
  return (
    <>
      <ScrollView style={styles.wrap}>
        <View style={styles.barWrap}>
          <TopBar text="Reports" />
        </View>
        {reports?.length === 0 ? (
          <View style={styles.noReport}>
            <Text>No Reports yet</Text>
          </View>
        ) : (
          reports?.map(report => (
            <MissingReport
              key={report?.postDate}
              name={report?.name}
              reportedBy={report?.reportedBy}
              location={report?.location}
              description={report?.description}
              email={report?.senderEmail}
              photo={report?.photo}
            />
          ))
        )}
      </ScrollView>
      <View style={styles.footerWrap}>
        <Navbar />
      </View>
    </>
  );
};

export default Reports;
