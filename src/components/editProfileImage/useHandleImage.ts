import {useState, useEffect} from 'react';
import {ImageSourcePropType} from 'react-native';

const useHandleImage = (
  photo: string | null,
  photoURL: string | null | undefined,
) => {
  const path = '../../constants/images/icons/images/noProfile.png';
  const [imageSource, setImageSource] = useState<ImageSourcePropType>(
    require(path),
  );
  useEffect(() => {
    if (photo) {
      setImageSource({uri: photo});
    } else if (photoURL) {
      setImageSource({uri: photoURL});
    } else {
      setImageSource(require(path));
    }
  }, [photo, photoURL]);
  return {imageSource};
};

export default useHandleImage;
