import {ScrollView, View} from 'react-native';
import {useState} from 'react';
import useMissingReports from '../../hooks/missingReport/useMissingReports';
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
    handleChangeValues,
    handleSubmitReport,
    loading,
    photo,
    name,
    gender,
    dateOfBirth,
    nickname,
    height,
    weight,
    eyeColor,
    hairColor,
    length,
    location,
  } = useMissingReports();

  return (
    <ScrollView>
      <View style={{marginLeft: 20, marginRight: 30}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 18,
            gap: 8,
          }}>
          <TopBar text="Missing Person Details" />
        </View>
        <MissingReportWrapper
          marginTop={40}
          text="Basic Details of Missing Person">
          <TextInputs
            value={name}
            onChange={text =>
              handleChangeValues({name: 'fullName', value: text})
            }
            text="Missing Person's Full Name"
          />
          <TextInputs
            value={gender}
            onChange={text => handleChangeValues({name: 'gender', value: text})}
            text="Gender"
          />
          <TextInputs
            value={dateOfBirth}
            onChange={text =>
              handleChangeValues({name: 'dateOfBirth', value: text})
            }
            text="Date of Birth"
          />
          <TextInputs
            value={nickname}
            onChange={text =>
              handleChangeValues({name: 'nickname', value: text})
            }
            text="Nickname or known alias"
          />
        </MissingReportWrapper>
        <MissingReportWrapper marginTop={20} text="Physical Description">
          <TextInputs
            value={height}
            onChange={text => handleChangeValues({name: 'height', value: text})}
            text="Height"
          />
          <TextInputs
            value={weight}
            onChange={text => handleChangeValues({name: 'weight', value: text})}
            text="Weight"
          />
          <TextInputs
            value={eyeColor}
            onChange={text =>
              handleChangeValues({name: 'eyeColor', value: text})
            }
            text="Eye Color"
          />
          <TextInputs
            value={hairColor}
            onChange={text =>
              handleChangeValues({name: 'hairColor', value: text})
            }
            text="Hair Color"
          />
          <TextInputs
            value={length}
            onChange={text => handleChangeValues({name: 'length', value: text})}
            text="Length of Hair"
          />
          <TextInputs
            value={location}
            onChange={text =>
              handleChangeValues({name: 'location', value: text})
            }
            text="Last seen Location"
          />
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
        <View style={{borderWidth: 0.5, borderColor: 'black', marginTop: 25}} />
        <View style={{display: 'flex', alignItems: 'center'}}>
          <View style={{marginTop: 16, width: 207}}>
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
