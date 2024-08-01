import {personType} from './personTypes';

export type initialTypes = {
  fullName: string;
  gender: 'male' | 'female';
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
