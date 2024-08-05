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
