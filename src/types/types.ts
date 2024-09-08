export type btnType = {
  children: string | string[];
  onPress?: () => void;
  loading?: boolean;
};

export type inputType = {
  text: string;
  value: string;
  onChange: (text: string) => void;
};

export type viewBtnType = {
  handleModal: () => void;
  text: string;
  width: number;
};

export type imageType = {
  photoURL: string | null | undefined;
  photo: string | null;
  handleChoosePhoto: () => void;
};

type typeFilter = 'male' | 'female' | 'age' | 'all';

export type changeFilter = {changeFilter: (value: typeFilter) => void};

export type filterItemType = {id: number; text: typeFilter; child: string};

export type logoType = {color: string};

export type user = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string | null;
};

export type stateTypes = {
  name: string;
  email: string;
  password: string;
  user: user | null;
};

export type initialType = {
  fullName: string;
  gender: 'Male' | 'Female' | 'Rather not to say';
  dateOfBirth: string;
  nickname: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
  length: string;
  location: string;
  date: string;
  data: personType[];
  searchedData: personType[];
  searchedQuery: string;
};

export type reportType = {
  name: string;
  reportedBy: string;
  location: string;
  description: string;
  email: string;
  photo: string;
};

export type wrapper = {
  text: string;
  children: React.ReactNode;
  marginTop: number;
};

export type modalType = {
  modalVisible: boolean;
  handleModal: () => void;
};

export type navType = {
  children: React.ReactNode;
  text: string;
  navigate: 'Home' | 'Reports' | 'MissingReport' | 'Edit';
};

export type textType = {text: string};

export type navigatorTypes = {
  Home: undefined;
  SplashScreen: undefined;
  Login: undefined;
  Register: undefined;
  Edit: undefined;
  ForgotPassword: undefined;
  MissingReport: undefined;
  Reports: undefined;
  Profile: undefined;
};

export type personType = {
  id?: string;
  email?: string;
  name: string;
  age: string;
  lastSeen: string;
  location: string;
  photo: string;
  gender: string;
  postDate: string;
};

export type uploadType = {
  handleChoosePhoto: () => void;
  pic: string | null;
  handleDelete: () => void;
};

export type reportsType = {
  id: string;
  name: string;
  description: string;
  age: string;
  senderEmail: string;
  location: string;
  photo: string;
  reportedBy: string;
  postDate: string;
};

export type initialTypes = {
  location: string;
  email: string;
  description: string;
  reports: reportsType[];
};

export type navTypes = {
  id: number;
  navigate: 'Home' | 'Reports' | 'MissingReport' | 'Edit';
  text: string;
  child: React.ReactNode;
}[];

export type navigation = {
  id: number;
  name: keyof navigatorTypes;
  component: React.ComponentType<any>;
}[]