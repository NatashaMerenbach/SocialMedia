import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import style from './style';
import UserProfileImage from '../UserProfileImage/USerProfileImage';
import {horizontalScale} from '../assets/styles/scaling';

const UserStory = ({firstName, profileImage}) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage
        profileImage={profileImage}
        imageDimensions={horizontalScale(65)}
      />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
    .isRequired,
};

export default UserStory;
