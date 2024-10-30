import {ScrollView, View} from 'react-native';
import {useState} from 'react';

import styles from './MissingReportStyles';
import useMissingReports from './useMissingReports';
import GenderDropdown from '../../components/ui/dropdown/Dropdown';
import { allItems } from '../../constants/constants';
import {
  TopBar,
  TextInputs,
  Button,
  UploadPicture,
  DateTimeModal,
  MissingReportWrapper,
} from '../../components';

const MissingReport = () => {
  const [show, setShow] = useState(false);
  const {
    handleChoosePhoto,
    handleDeletePhoto,
    handleSubmitReport,
    name,
    handleChangeValues,
    loading,
    photo,
    gender,
    isDropdownOpen,
    genderOptions,
    handleSelectGender,
    dropdownOpen,
  } = useMissingReports();
  const {itemsTop, itemsBelow} = allItems();
  return (
    <ScrollView>
      <View style={styles.wrap}>
        <View style={styles.headerWrap}>
          <TopBar text="Missing Person Details" />
        </View>
        <MissingReportWrapper
          marginTop={40}
          text="Basic Details of Missing Person">
          <TextInputs
            value={name}
            onChange={(text: string) =>
              handleChangeValues({name: 'fullName', value: text})
            }
            text="Missing Person's Full Name"
          />
          <GenderDropdown
            selectedGender={gender}
            isDropdownOpen={isDropdownOpen}
            options={genderOptions}
            handleSelectGender={handleSelectGender}
            dropDownOpen={dropdownOpen}
          />
          {itemsTop.map(item => (
            <TextInputs
              value={item.value}
              key={item.id}
              onChange={item.onChange}
              text={item.text}
            />
          ))}
        </MissingReportWrapper>
        <MissingReportWrapper marginTop={20} text="Physical Description">
          {itemsBelow.map(item => (
            <TextInputs
              value={item.value}
              key={item.id}
              onChange={item.onChange}
              text={item.text}
            />
          ))}
          <DateTimeModal
            modalVisible={show}
            handleModal={() => setShow(prev => !prev)}
          />
        </MissingReportWrapper>
        <UploadPicture
          handleChoosePhoto={handleChoosePhoto}
          pic={photo}
          handleDelete={handleDeletePhoto}
        />
        <View style={styles.line} />
        <View style={styles.center}>
          <View style={styles.btnWrap}>
            <Button onPress={handleSubmitReport} loading={loading}>
              {loading ? 'Submitting...' : 'Submit Report'}
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MissingReport;
