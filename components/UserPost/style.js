import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helper';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginBottom: verticalScale(16),
    width: '100%',
  },
  userInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  userDetailsContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  userName: {
    color: '#022150',
    fontSize: fontScale(16),
    fontFamily: getFontFamily('600'),
  },
  location: {
    textAlign: 'left',
    color: '#79869F',
    fontSize: fontScale(12),
    fontFamily: getFontFamily('400'),
    marginTop: verticalScale(5),
  },
  postImageContainer: {
    marginTop: verticalScale(35),
    marginLeft: horizontalScale(10),
    borderBottomWidth: 1,
    paddingBottom: verticalScale(20),
    borderBottomColor: '#EFF2F6',
  },
  postImage: {
    marginTop: verticalScale(20),
    alignSelf: 'center',
    width: '100%',
    borderRadius: horizontalScale(20),
  },
  postDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  postDetailsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: horizontalScale(20),
  },
  postDetailsItemComment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: horizontalScale(27),
  },
  likes: {
    color: '#76869F',
    fontSize: fontScale(14),
    fontFamily: getFontFamily('400'),
    marginLeft: horizontalScale(3),
  },
  comments: {
    color: '#76869F',
    fontSize: fontScale(14),
    fontFamily: getFontFamily('400'),
    marginLeft: horizontalScale(3),
  },
  bookmarks: {
    color: '#76869F',
    fontSize: fontScale(14),
    fontFamily: getFontFamily('400'),
    marginLeft: horizontalScale(3),
  },
});

export default style;
