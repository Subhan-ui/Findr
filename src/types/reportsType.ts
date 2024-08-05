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