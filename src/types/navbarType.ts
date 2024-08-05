export type navType = {
  children: React.ReactNode;
  text: string;
  navigate: 'Home' | 'Reports' | 'MissingReport' | 'Edit';
};

export type textType = {text: string}