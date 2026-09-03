import React from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import style from './style';

const UserProfileImage = ({profileImage, imageDimensions}) => {
  return (
    <View
      style={[style.userImageContainer, {borderRadius: imageDimensions / 2}]}>
      <Image
        source={profileImage}
        style={{
          width: imageDimensions,
          height: imageDimensions,
          borderRadius: imageDimensions / 2,
        }}
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
    .isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default UserProfileImage;
