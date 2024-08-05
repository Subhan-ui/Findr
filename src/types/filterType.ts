type typeFilter = 'male' | 'female' | 'age' | 'all';

export type changeFilter = {changeFilter: (value: typeFilter) => void;};

export type logoType = {color: string}