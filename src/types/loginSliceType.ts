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
