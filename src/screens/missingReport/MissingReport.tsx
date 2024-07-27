import {ScrollView, Text, View} from 'react-native';
import TopBar from '../../components/topBar/TopBar';
import TextInputs from '../../components/ui/textInput/TextInput';
import Button from '../../components/ui/button/Button';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  handleChange,
  selectDateOfBirth,
  selectEyeColor,
  selectFullName,
  selectGender,
  selectHairColor,
  selectHeight,
  selectLength,
  selectNickname,
  selectWeight,
} from '../../store/features/missingReportSlice';
import UploadPicture from '../../components/uploadPicture/UploadPicture';

const MissingReport = () => {
  const name = useAppSelector(selectFullName);
  const gender = useAppSelector(selectGender);
  const dateOfBirth = useAppSelector(selectDateOfBirth);
  const nickname = useAppSelector(selectNickname);
  const height = useAppSelector(selectHeight);
  const weight = useAppSelector(selectWeight);
  const eyeColor = useAppSelector(selectEyeColor);
  const hairColor = useAppSelector(selectHairColor);
  const length = useAppSelector(selectLength);
  const dispatch = useAppDispatch();

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
        <View>
          <Text
            style={{
              fontFamily: 'Familjen Grotesk',
              fontSize: 23,
              fontWeight: '400',
              color: 'black',
              marginTop: 40,
            }}>
            Basic Details of Missing Person
          </Text>
          <TextInputs
            value={name}
            onChange={text =>
              dispatch(handleChange({name: 'fullName', value: text}))
            }
            text="Missing Person's Full Name"
          />
          <TextInputs
            value={gender}
            onChange={text =>
              dispatch(handleChange({name: 'gender', value: text}))
            }
            text="Gender"
          />
          <TextInputs
            value={dateOfBirth}
            onChange={text =>
              dispatch(handleChange({name: 'dateOfBirth', value: text}))
            }
            text="Date of Birth"
          />
          <TextInputs
            value={nickname}
            onChange={text =>
              dispatch(handleChange({name: 'nickname', value: text}))
            }
            text="Nickname or known alias"
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Familjen Grotesk',
              fontSize: 23,
              fontWeight: '400',
              color: 'black',
              marginTop: 20,
            }}>
            Physical Description
          </Text>
          <TextInputs
            value={height}
            onChange={text =>
              dispatch(handleChange({name: 'height', value: text}))
            }
            text="Height"
          />
          <TextInputs
            value={weight}
            onChange={text =>
              dispatch(handleChange({name: 'weight', value: text}))
            }
            text="Weight"
          />
          <TextInputs
            value={eyeColor}
            onChange={text =>
              dispatch(handleChange({name: 'eyeColor', value: text}))
            }
            text="Eye Color"
          />
          <TextInputs
            value={hairColor}
            onChange={text =>
              dispatch(handleChange({name: 'hairColor', value: text}))
            }
            text="Hair Color"
          />
          <TextInputs
            value={length}
            onChange={text =>
              dispatch(handleChange({name: 'length', value: text}))
            }
            text="Length of Hair"
          />
        </View>
        <UploadPicture />
        <View style={{borderWidth: 0.5, borderColor: 'black', marginTop: 25}} />
        <View style={{display: 'flex', alignItems: 'center'}}>
          <View style={{marginTop: 16, width: 207}}>
            <Button>Submit Report</Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MissingReport;
