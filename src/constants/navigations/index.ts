import {
  EditProfile,
  ForgotPassword,
  Home,
  Login,
  MissingReport,
  ProfileFlow,
  Registration,
  Reports,
} from '../../screens';
import {navigation} from '../../types/types';

export const navigationLogged: navigation = [
  {id: 1, name: 'Home', component: Home},
  {id: 2, name: 'Edit', component: EditProfile},
  {id: 3, name: 'MissingReport', component: MissingReport},
  {id: 4, name: 'Profile', component: ProfileFlow},
  {id: 5, name: 'Reports', component: Reports},
];

export const navigationLog: navigation = [
  {id: 1, name: 'Login', component: Login},
  {id: 2, name: 'Register', component: Registration},
  {id: 3, name: 'ForgotPassword', component: ForgotPassword},
];
