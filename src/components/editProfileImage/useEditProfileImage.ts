import {useState, useEffect} from 'react';
import {ImageSourcePropType} from 'react-native';
import { path } from '../../constants/images';

const useHandleImage = (
  photo: string | null,
  photoURL: string | null | undefined,
) => {
  const [imageSource, setImageSource] = useState<ImageSourcePropType>(
    path
  );
  useEffect(() => {
    if (photo) {
      setImageSource({uri: photo});
    } else if (photoURL) {
      setImageSource({uri: photoURL});
    } else {
      setImageSource(path);
    }
  }, [photo, photoURL]);
  return {imageSource};
};

export default useHandleImage;
