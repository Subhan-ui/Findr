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
