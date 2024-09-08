import {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  handleChangeQuery,
  handleFilter,
  selectSearchData,
} from '../../store/features/missingReportSlice';

type typeFilter = 'male' | 'female' | 'age' | 'all';

const useHandleFlow = () => {
  const dataF = useAppSelector(selectSearchData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(handleFilter('all'));
    dispatch(handleChangeQuery(''));
  }, []);

  const change = (value: typeFilter) => {
    dispatch(handleFilter(value));
  };
  return {change, dataF};
};

export default useHandleFlow;
