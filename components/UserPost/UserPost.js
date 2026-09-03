import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import UserProfileImage from '../UserProfileImage/USerProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

const UserPost = props => {
  return (
    <View style={style.container}>
      <View style={style.userInfoContainer}>
        <View>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={48}
          />
        </View>
        <View style={style.userDetailsContainer}>
          <Text style={style.userName}>
            {props.firstName} {props.lastName}
          </Text>
          {props.location && (
            <Text style={style.location}>{props.location}</Text>
          )}
        </View>
        <TouchableOpacity
          accessibilityLabel="More options"
          accessibilityRole="button"
          disabled={!props.onMoreOptionsPress}
          onPress={() => props.onMoreOptionsPress?.(props.id)}>
          <FontAwesomeIcon icon={faEllipsisH} color="gray" size={24} />
        </TouchableOpacity>
      </View>
      <View style={style.postImageContainer}>
        <Image source={props.image} style={style.postImage} />
        <View style={style.postDetailsContainer}>
          <View style={style.postDetailsItem}>
            <FontAwesomeIcon icon={faHeart} color="#76869F" size={24} />
            <Text style={style.likes}>{props.likes}</Text>
          </View>
          <View style={style.postDetailsItemComment}>
            <FontAwesomeIcon icon={faComment} color="#76869F" size={24} />
            <Text style={style.comments}>{props.comments}</Text>
          </View>
          <View style={style.postDetailsItemComment}>
            <FontAwesomeIcon icon={faBookmark} color="#76869F" size={24} />
            <Text style={style.bookmarks}>{props.bookmarks}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  likes: PropTypes.number.isRequired,
  profileImage: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
    .isRequired,
  comments: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  onMoreOptionsPress: PropTypes.func,
};

export default UserPost;
