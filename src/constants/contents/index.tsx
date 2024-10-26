import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import {Dimensions, PixelRatio} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {navTypes} from '../../types/types';
import {filterItemType} from '../../types/types';
import {
  handleChange,
  selectDateOfBirth,
  selectEyeColor,
  selectHairColor,
  selectHeight,
  selectLength,
  selectLocation,
  selectNickname,
  selectWeight,
} from '../../store/features/missingReportSlice';

export const {width, height} = Dimensions.get('window');

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export const wp = (percentage: number) => (width * percentage) / 100;
export const hp = (percentage: number) => (height * percentage) / 100;

export const items: filterItemType[] = [
  {id: 1, text: 'all', child: 'All'},
  {id: 2, text: 'male', child: 'Male'},
  {id: 3, text: 'female', child: 'Female'},
  {id: 4, text: 'age', child: 'Age'},
  {id: 5, text: 'age', child: 'Age'},
];

export const allItems = () => {
  const dateOfBirth = useAppSelector(selectDateOfBirth);
  const nickname = useAppSelector(selectNickname);
  const height = useAppSelector(selectHeight);
  const weight = useAppSelector(selectWeight);
  const eyeColor = useAppSelector(selectEyeColor);
  const hairColor = useAppSelector(selectHairColor);
  const length = useAppSelector(selectLength);
  const location = useAppSelector(selectLocation);
  const dispatch = useAppDispatch();
  const handleChangeValues = ({name, value}: {name: string; value: string}) => {
    dispatch(handleChange({name, value}));
  };
  const itemsTop = [
    {
      id: 3,
      value: dateOfBirth,
      text: 'Date of Birth',
      onChange: (text: string) =>
        handleChangeValues({name: 'dateOfBirth', value: text}),
    },
    {
      id: 4,
      value: nickname,
      text: 'Nickname or known alias',
      onChange: (text: string) =>
        handleChangeValues({name: 'nickname', value: text}),
    },
  ];

  const itemsBelow = [
    {
      id: 1,
      value: height,
      text: 'Height',
      onChange: (text: string) =>
        handleChangeValues({name: 'height', value: text}),
    },
    {
      id: 2,
      value: weight,
      text: 'Weight',
      onChange: (text: string) =>
        handleChangeValues({name: 'weight', value: text}),
    },
    {
      id: 3,
      value: eyeColor,
      text: 'Eye Color',
      onChange: (text: string) =>
        handleChangeValues({name: 'eyeColor', value: text}),
    },
    {
      id: 4,
      value: hairColor,
      text: 'Hair Color',
      onChange: (text: string) =>
        handleChangeValues({name: 'hairColor', value: text}),
    },
    {
      id: 5,
      value: length,
      text: 'Length of Hair',
      onChange: (text: string) =>
        handleChangeValues({name: 'length', value: text}),
    },
    {
      id: 6,
      value: location,
      text: 'Last Seen Location',
      onChange: (text: string) =>
        handleChangeValues({name: 'location', value: text}),
    },
  ];

  return {itemsTop, itemsBelow};
};

export const navItems: navTypes = [
  {
    id: 1,
    text: 'Home',
    navigate: 'Home',
    child: <Icon name="home-outline" size={18} color="black" />,
  },
  {
    id: 2,
    text: 'Reports',
    navigate: 'Reports',
    child: <Icon1 name="handshake-outline" size={18} color="black" />,
  },
  {
    id: 3,
    text: 'Upload',
    navigate: 'MissingReport',
    child: <Icon2 name="pluscircleo" size={18} color="black" />,
  },
  {
    id: 4,
    text: 'Profile',
    navigate: 'Edit',
    child: <Icon3 name="dots-three-horizontal" size={18} color="black" />,
  },
];
